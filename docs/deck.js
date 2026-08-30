const slides = [...document.querySelectorAll(".slide")];
const dots = document.getElementById("dots");
const page = document.getElementById("page");
const notesEl = document.getElementById("notes");
let i = 0;

slides.forEach((_, n) => {
  const b = document.createElement("button");
  b.title = String(n + 1);
  if (slides[n].dataset.act) b.classList.add("act");
  b.addEventListener("click", () => go(n));
  dots.appendChild(b);
});

function go(n) {
  i = Math.max(0, Math.min(slides.length - 1, n));
  slides.forEach((s, k) => s.classList.toggle("on", k === i));
  [...dots.children].forEach((d, k) => d.classList.toggle("on", k === i));
  page.textContent = `${i + 1} / ${slides.length}`;
  notesEl.textContent = slides[i].dataset.notes || "";
  history.replaceState(null, "", `#/${i + 1}`);
}

function parseHash() {
  const m = location.hash.match(/#\/?(\d+)/);
  return m ? Number(m[1]) - 1 : 0;
}

go(parseHash());
addEventListener("hashchange", () => go(parseHash()));

document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
    e.preventDefault();
    go(i + 1);
  }
  if (e.key === "ArrowLeft" || e.key === "PageUp") {
    e.preventDefault();
    go(i - 1);
  }
  if (e.key === "Home") go(0);
  if (e.key === "End") go(slides.length - 1);
  if (e.key === "f" || e.key === "F") toggleFull();
  if (e.key === "p" || e.key === "P") notesEl.classList.toggle("on");
});

function toggleFull() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
  else document.exitFullscreen();
}
document.getElementById("btn-full").onclick = toggleFull;
document.getElementById("btn-notes").onclick = () => notesEl.classList.toggle("on");

document.querySelectorAll("[data-jump]").forEach((b) => {
  b.addEventListener("click", () => go(Number(b.dataset.jump)));
});

document.querySelectorAll(".slide.walk").forEach((slide) => {
  const steps = [...slide.querySelectorAll(".step")];
  const btn = slide.querySelector("button");
  let s = 0;
  const paint = () => steps.forEach((el, k) => el.classList.toggle("on", k < s));
  paint();
  if (btn) btn.addEventListener("click", () => {
    s = Math.min(steps.length, s + 1);
    paint();
  });
});

document.querySelectorAll(".qa button").forEach((b) => {
  b.addEventListener("click", () => b.classList.toggle("open"));
});

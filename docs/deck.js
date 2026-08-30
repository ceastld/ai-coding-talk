(() => {
  const slides = [...document.querySelectorAll(".slide")];
  const progress = document.getElementById("progress");
  const page = document.getElementById("page");
  const sec = document.getElementById("sec");
  const notesEl = document.getElementById("notes");
  const hint = document.getElementById("hint");
  let index = 0;
  let step = 0;
  let hintTimer = 0;

  const stepsOf = (n) => [...slides[n].querySelectorAll(".reveal > *")];

  const paintSteps = () => {
    stepsOf(index).forEach((el, k) => el.classList.toggle("in", k < step));
    const hintEl = slides[index].querySelector(".walk-hint");
    if (hintEl) {
      const total = stepsOf(index).length;
      hintEl.hidden = total === 0 || step >= total;
    }
  };

  const go = (n, fromHash = false) => {
    const next = Math.max(0, Math.min(slides.length - 1, n));
    const backward = next < index;
    index = next;
    const total = stepsOf(index).length;
    step = backward ? total : 0;
    slides.forEach((s, k) => s.classList.toggle("on", k === index));
    paintSteps();
    page.textContent = `${index + 1} / ${slides.length}`;
    sec.textContent = slides[index].dataset.sec || "";
    notesEl.textContent = slides[index].dataset.notes || "";
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    if (!fromHash) history.replaceState(null, "", `#/${index + 1}`);
  };

  const parseHash = () => {
    const m = location.hash.match(/#\/?(\d+)/);
    return m ? Number(m[1]) - 1 : 0;
  };

  const forward = () => {
    const total = stepsOf(index).length;
    if (step < total) {
      step += 1;
      paintSteps();
      return;
    }
    go(index + 1);
  };

  const back = () => {
    if (step > 0) {
      step -= 1;
      paintSteps();
      return;
    }
    go(index - 1);
  };

  const toggleFull = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  };

  const toggleNotes = () => notesEl.classList.toggle("on");

  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (["ArrowRight", " ", "PageDown"].includes(e.key)) {
      e.preventDefault();
      forward();
    }
    if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      back();
    }
    if (e.key === "Home") go(0);
    if (e.key === "End") go(slides.length - 1);
    if (e.key === "f" || e.key === "F") toggleFull();
    if (e.key === "p" || e.key === "P") toggleNotes();
    hideHintSoon();
  });

  document.getElementById("btn-full").addEventListener("click", toggleFull);
  document.getElementById("btn-notes").addEventListener("click", toggleNotes);

  document.querySelectorAll("[data-go]").forEach((btn) => {
    btn.addEventListener("click", () => go(Number(btn.dataset.go) - 1));
  });

  let touchX = 0;
  document.addEventListener("touchstart", (e) => {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  document.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) forward();
    else back();
  }, { passive: true });

  const hideHintSoon = () => {
    window.clearTimeout(hintTimer);
    hintTimer = window.setTimeout(() => hint.classList.add("off"), 2400);
  };

  addEventListener("hashchange", () => go(parseHash(), true));
  go(parseHash(), true);
  hideHintSoon();
})();

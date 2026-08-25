# AI 编程怎么真正跑起来

下周分享用的私人材料。不是「怎么跟 ChatGPT 聊天」，而是：**人定规则，Agent 按规则干活，活能复查、能关掉、能复用。**

仓库私有。对外讲的时候打开 slides，需要细节再点进 examples。

## 怎么讲（约 40 分钟）

| 分钟 | 打开 | 讲什么 |
| --- | --- | --- |
| 0–3 | [talk/slides.md](talk/slides.md) 开场 | 聊天写代码为什么撑不久 |
| 3–12 | 同一份 slides | 四层：对话 → Skill → Automation → 产品自己也是 Agent |
| 12–22 | 现场打开本仓 `examples/mini-automation` | 走一遍「新反馈」 |
| 22–30 | [examples/actions](examples/actions) | 两个示例动作：入口怎么接到 Agent |
| 30–37 | [cases/real-loops.md](cases/real-loops.md) | 真事：该自动、该停、该不信审查机器人 |
| 37–40 | 最后几页 | 带走三句话 + Q&A |

投屏：用 [Marp](https://marp.app/) 打开 `talk/slides.md`（VS Code 插件 *Marp for VS Code* → Preview）。没有 Marp 就当普通 Markdown 往下滚，一节一屏。

讲解词在 [talk/speaker-notes.md](talk/speaker-notes.md)。演示顺序在 [talk/demo-script.md](talk/demo-script.md)。

## 现场还可以打开的真仓库（别 clone 讲）

这些是真在跑的，适合「再点一眼」：

- [QuickerOrg/qk-automation](https://github.com/QuickerOrg/qk-automation) — 反馈分拣 / 已处理关掉 / TryAutoFix
- [QuickerOrg/Quicker](https://github.com/QuickerOrg/Quicker) 里的 `.cursor/skills`、`.agents/skills` — 仓库专属做法
- Quicker MCP（`dev/v2` 已合）：本机 loopback，外部 Agent 能 eval、搜/导出/校验/导入动作

讲的时候**不要贴私有源码**。行为、规则、结果可以讲。

## 本仓有什么

```
talk/                  投屏 + 讲解词 + 演示顺序
examples/mini-automation   给观众看的缩小版 qk-automation
examples/actions           两个可讲解的示例动作
examples/skills            一条「会前简报」skill，可直接复用
cases/                     真实闭环（脱敏，不贴源码）
```

## 讲完可以让人带走

1. Skill 是「一种情况一种做法」，写清何时用、自动做什么、何时停。
2. Automation 是「规则仓库」：改 markdown，Agent 行为跟着变；要有总开关。
3. 自动审查可以看，不能当合并闸。人负责不可逆的那一下。

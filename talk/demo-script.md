# 现场演示顺序（约 10 分钟）

不要 clone 私有主仓。用本仓 `examples/`。

## 0. 开场准备

- VS Code 开着本仓
- 左边：`examples/mini-automation/policies/decision-rules.md`
- 右边：`examples/mini-automation/skills/inbox-triage/SKILL.md`
- 浏览器备用：https://github.com/QuickerOrg/qk-automation（只给「这是真仓」看一眼 README，立刻回来）

## 1. 一条假反馈走进去（6 分钟）

把下面三段当「用户刚开的单」，口头走决策，不要真改别人的 issue。

### 单 A：已经没了

> 标题：截图贴图会把窗口卡死
> 正文：2.x 里贴图之后鼠标动不了
> 时间线：相关开发 PR 已合进主线
> 当前主线：这个卡死已经不在了

走法：第一句点名 **已处理** → `already-done` → 关单。评论：「当前已经是这样了。」不要请对方再验证。

### 单 B：缺信息

> 标题：动作运行很慢
> 正文：有时候会卡一下
> 没有版本、没有复现、没有期望

走法：点名 **未处理** → `inbox-triage` 看不清类型 → `need-more-info`。打「需要更多信息」，用 skill 里的三问：版本、怎么复现、你期望怎样。

### 单 C：能分拣的新 bug

> 标题：面板搜索清空后选中项丢了
> 正文：1. 打开面板 2. 搜「截图」3. 清空搜索框，原来高亮的项没了
> 版本：当前预览

走法：未处理 → `inbox-triage` 打 `bug` → 能看懂就停在「摘要 + 建议」，**不要**因为能看懂就开修。开修要有 `TryAutoFix` 或人点头。

指着 `decision-rules.md` 说：开修的钥匙不在聊天里，在标签和规则表。

## 2. 两个动作（3 分钟）

打开 `examples/actions/throw-to-triage.md`：

- 入口：选中文字 + 热键
- 处理：按 inbox-triage
- 出口：标签建议 + 一句人话，不当场改线上 issue

打开 `examples/actions/meeting-brief.md`：

- 入口：下周分享前
- 处理：`examples/skills/meeting-brief`
- 出口：一页纸，能直接念

说：「动作是按钮。Skill 是做法。Automation 是何时用哪种做法。」

## 3. 如果还有 1 分钟

打开真仓 `qk-automation` 的 skills 表，对照迷你版：「大的就是这些行，只是规则更密、有源码核对、有对外不贴源码。」

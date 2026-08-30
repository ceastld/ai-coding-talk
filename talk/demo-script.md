# 现场走单（约 10 分钟）

不要 clone 私有主仓。用本仓 `examples/mini-automation`。
现场页从 `#/11` 进走单。空格揭步骤，不要一次翻完。

## 0. 开场准备

- 浏览器全屏打开现场页
- 编辑器左边：`examples/mini-automation/policies/decision-rules.md`
- 编辑器右边：`examples/mini-automation/skills/inbox-triage/SKILL.md`
- 备用：https://github.com/QuickerOrg/qk-automation（只证明「大的就是这些行」，立刻回来）

## 1. 三条假单（6 分钟）

口头走决策。不要真改别人的 issue。

### 单 A：已经没了

> 标题：截图贴图会把窗口卡死
> 正文：2.x 里贴图之后鼠标动不了
> 时间线：相关开发 PR 已合进主线
> 当前主线：这个卡死已经不在了

第一句点名 **已处理** → `already-done` → 关单。
评论：「当前已经是这样了。」不要请对方再验证。

### 单 B：缺信息

> 标题：动作运行很慢
> 正文：有时候会卡一下
> 没有版本、没有复现、没有期望

点名 **未处理** → 看不清类型 → `need-more-info`。
打「需要更多信息」，用 skill 里的三问：版本、怎么复现、你期望怎样。
不要同时猜一个补丁。

### 单 C：能分拣，不能开修

> 标题：面板搜索清空后选中项丢了
> 正文：1. 打开面板 2. 搜「截图」3. 清空搜索框，原来高亮的项没了
> 版本：当前预览

未处理 → `inbox-triage` 打 `bug` → 停在摘要。
没有 `TryAutoFix`、也没有人点头，**不要**开修。
开修的钥匙不在「我看懂了」里，在标签和规则表。

## 2. 入口不必是聊天窗口（2 分钟，可砍）

打开 `examples/actions/throw-to-triage.md`：

- 入口：选中一段反馈 + 热键
- 处理：按 inbox-triage
- 出口：标签建议 + 一句人话，默认不改线上 issue

人负责何时按。规则负责按了之后走哪条路。

## 3. 如果还有 1 分钟

打开真仓 `qk-automation` 的 skills 表，对照迷你版：
大的就是这些行，只是规则更密、有源码核对、对外不贴源码。

# 真实闭环（脱敏，可讲）

都不贴源码。数字是公开 PR / 公开 issue，能讲过程。

## 1. 规则仓库驱动反馈

`qk-automation` 管的是 [Quicker2-issues](https://github.com/QuickerOrg/Quicker2-issues)。

Agent 先读 `AGENTS.md` 和 `policies/decision-rules.md`，再打开匹配 skill。

学到的：

- 总开关 `notify-only` / `apply-skills` 比「今天小心点」可靠
- 第一句必须是已处理 / 未处理。只看正文会把已上线的单重新实现一遍
- 证据够了就关，不要「请再验证」。用户不是你的测试员
- 对外评论写人话，不要「问题类 / 涉及面 / 泛化方向」
- 读私有源码用 grok / 云端 Agent，出口只留行为结论

## 2. 自动审查当参谋，不当闸

合过的主线 PR 里，自动审查把当时已经合法的 GitHub Actions `queue` 字段判成非法（对照的是旧文档）。同系列里，它也抓到过真的墓碑匹配会丢数据。

所以流程是：瞥一眼 → 核合同 → 人决定合不合。
「审查绿了」和「能合」不是一件事。

## 3. 工具协议要 fail-closed

Agent 的 `write_file` 兼容一种 `@@` 信封。头损坏时如果落到「当原文写」，会覆盖目标文件。

跟进修的是：看起来像信封就 `invalid_args`，并且清掉半成品正文。另有测试：坏信封不得改磁盘。

讲的时候一句话：自动层越能干，拒绝路径越要干净。

## 4. Agent 契约要能离开 Windows

MCP 合进主线之后，测试最初只活在 Windows testhost 里。云端 Linux 没有那套宿主，等于核心契约没人在 PR 上跑。

后来把 live Catalog 装配拆成 partial，契约测试放到可移植项目里。Linux 上 `dotnet test` 18 条过了再合。

讲的时候：如果你的 Agent 只能在你那台桌面上证明自己，它就不算工程。

## 5. 一次对话一件事

同一条 PR / 同一个 bug 留在同一个会话。目标变了就新开，第一条带锚点。
日常主仓工作有固定会话，不跟分享稿、跨平台方案混在一起。

这不是洁癖。是防止规则和约束被长上下文冲掉。

# 两个环怎么转（可讲的短例）

不贴源码。只用来把框架讲落地。

## 内环：Plan → Implement → Check → Accept

任务：一条已有测试红了，登录按钮文案不对。

1. **Plan** — 只改文案；成功标准是该测试绿；不碰登录逻辑。
2. **Implement** — 按计划改，产出 diff。
3. **Check** — 跑那条测试。红就回 2。发现「其实该改的是 i18n 键」就回 1。
4. **Accept** — 绿了才 commit。

学到的：没有可跑的 Check，Agent 只能说「应该好了」。没有 Accept 门，半成品会先进仓库。

## 外环：Issue → PR

任务：用户开了 issue，要的是可审查的修复，不是本地改完。

1. Issue 信息不够（没期望、没现在行为）→ 先问，不进内环。
2. 够了 → 开分支，走内环。
3. 内环 Accept 停在分支 commit + 开 PR。
4. CI 是外环的 Check。红了回内环。
5. Merge 是人。Agent 不合主线。

学到的：开 PR 是 Agent 侧的 Accept，不是事情做完。CI 绿也不等于能合。

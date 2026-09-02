---
marp: true
theme: default
paginate: true
style: |
  section { font-size: 28px; }
  h1 { font-size: 44px; }
  h2 { font-size: 34px; }
  footer { font-size: 14px; }
---

<!-- _footer: 设计 Agent Loop -->

# 设计 Agent Loop

自动化写代码，不是一次生成。
是 **Plan → Implement → Check**，过了才 **Accept**。

---

# 今天只讲框架

- 不比模型，不教 prompt
- 不讲「AI 替你做完整产品」
- 不堆 skill、工单、产品细节

只讲循环怎么接：每一步进出什么、失败回哪、谁有权写入仓库。

---

# 聊天写代码，缺的是循环

写了 → 看起来对 → 丢进仓库。

1. 没有计划，成功标准只在人脑子里
2. 没有机器能判的 Check，环关不上
3. 没有 Accept 门禁，半成品也能进主线

---

# 内环：本地把一件事做完

```
Plan → Implement → Check → Accept
              ↑         |
              └---------┘  不过就再改
```

Check 不过 → 回到 Implement。
计划错了 → 回到 Plan。
Accept 之前，仓库当没发生过。

---

# 四格各自只做一件事

| 格 | 只做这件事 |
| --- | --- |
| Plan | 边界、成功标准、动哪些文件。输出是计划，不是代码 |
| Implement | 只执行计划，产出 diff。不扩 scope |
| Check | 用命令判定过 / 不过，留下证据。自己不改代码 |
| Accept | 门禁过了，才 commit。这是进仓库的唯一口 |

---

# Check 必须是机器能判的

- 测试、类型检查、复现命令、Plan 里写死的成功标准
- 「看起来对」「模型自评」关不上环
- 要有预算：N 次失败就停，不要死循环

过 / 不过是命令的退出码，不是感觉。

---

# 失败回哪，先写死

- Check 红、计划仍对 → **Implement**
- 做不下去 / 范围错了 / 标准本身错 → **Plan**
- 超预算，或破坏数据 / 对外承诺 → **停，给人**

---

# Accept 是唯一进仓库的口

- 前面都是草稿：可以扔，可以重来
- 过门禁才 commit，不要边写边往 main 上堆
- 人守不可逆的：合主线、对外口径、破坏性改动

---

# 外环：Issue 回到 PR

```
Issue → 信息够不够 → 内环（分支上）→ PR
                              ↓
                         CI 再 Check → 人 Merge
```

Agent 的 Accept 停在 PR。
Merge 是仓库级 Accept，默认是人。

---

# 两个环套在一起

**内环** 把一件代码做对，出口是过门禁的 commit。
**外环** 把仓库里的一件事做完，出口是可审查的 PR。

外环里的 CI，就是多一轮 Check。
PR 开了 ≠ 做完了。

---

# 先钉死这四问

1. 这一步的 **输入 / 输出** 是什么？
2. **失败回哪**一步？
3. 怎么用 **命令判定结束**？
4. 谁有权 **Accept**？

先画循环，再写 skill，再写 prompt。

---

# 这样设计，环是假的

- 没 Check 就 Accept
- Check 靠人眼，或模型自评
- 无限重试
- Issue 直接 Implement，跳过 Plan
- Agent 自己合主线

---

# 带走

1. 自动化写代码 = 设计循环，不是堆对话。
2. 内环：Plan → Implement → Check ↺ → Accept。
3. 外环：Issue → 内环 → PR → 人合。

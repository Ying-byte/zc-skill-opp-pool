---
name: zc-skill-opp-pool
description: >-
  按岗位/地点/公司检索机会库存量；返回候选，不自动入库。
  Use in any Agent Host that can mount stdio MCP. Pair with zc-skill-opp-pool.
---

# 机会库搜岗 · Skill

## When to use

- User asks for: 机会库搜岗
- 按岗位/地点/公司检索机会库存量；返回候选，不自动入库。

## Tools (`zc-skill-opp-pool`)

| Tool | Args |
|------|------|
| `search_jobs` | query, jdText, profileText, location, notes, limit |

## Example

```json
{
  "query": "Frontend Engineer",
  "location": "remote",
  "jdText": "<paste JD>",
  "profileText": "<paste profile>"
}
```

## Limits

- Do not invent employers, dates, or numbers
- Do not apply or send email unless the user confirms
- Unknown facts must be marked unknown

## Host install

Mount this repo as stdio MCP (see README). Not Zhencheng-only.

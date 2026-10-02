#!/usr/bin/env node
import { createFirstpartyMcp } from '../_shared/create-firstparty-mcp.mjs';

const mcp = createFirstpartyMcp({
  "id": "opp-pool",
  "titleZh": "机会库搜岗",
  "summary": "按岗位/地点/公司检索机会库存量；返回候选，不自动入库。",
  "tools": [
    "search_jobs"
  ],
  "proxyTools": {
    "search_jobs": "zc_discover_jobs"
  },
  "localKind": "search"
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});

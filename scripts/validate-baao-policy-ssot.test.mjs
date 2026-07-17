import assert from "node:assert/strict";
import test from "node:test";

import { validatePolicySnapshot } from "./validate-baao-policy-ssot.mjs";

const validSnapshot = {
  "docs/internal/OPERATIONS_HANDBOOK.md": [
    "BAAO Operations Handbook v3",
    "寄与した分だけ名乗り、受け取った価値には返し、断る自由を守る。",
    "Referral",
    "Co-Delivery",
    "Case Verification",
    "Knowledge Asset License",
    "Activity Ledger",
  ].join("\n"),
  "docs/people/README.md": "Activity Ledgerで役割と品質を記録する。",
  "docs/governance/README.md": "個別Opt-inと権利分離を行う。",
  "README.md": "評議会 | ¥2,000,000",
  "website/app/fellows/page.tsx": "辞退しても資格や案件配分で不利益はありません。",
};

test("current policy snapshot passes", () => {
  assert.deepEqual(validatePolicySnapshot(validSnapshot), []);
});

test("legacy revenue-share and contribution-score terms fail", () => {
  const snapshot = {
    ...validSnapshot,
    "website/app/fellows/page.tsx": "Impact Pointsを増やすと昇格します。",
    "docs/people/README.md": "自力案件はPC 12%を払います。",
  };

  const errors = validatePolicySnapshot(snapshot);
  assert.ok(errors.some((error) => error.includes("Impact Points")));
  assert.ok(errors.some((error) => error.includes("PC 12%")));
});

test("missing centerpin and old council price fail", () => {
  const snapshot = {
    ...validSnapshot,
    "docs/internal/OPERATIONS_HANDBOOK.md": "BAAO Operations Handbook v3",
    "README.md": "評議会 | ¥220,000",
  };

  const errors = validatePolicySnapshot(snapshot);
  assert.ok(errors.some((error) => error.includes("centerpin")));
  assert.ok(errors.some((error) => error.includes("旧評議会価格")));
});

# BAAO 60日パイロット台帳仕様

- 作成日: 2026-07-17
- 対象: BAAO制度改定案の実運用パイロット
- テンプレート: `templates/BAAO_PILOT_LEDGER_TEMPLATE.csv`
- 検証: `node scripts/validate-baao-pilot-ledger.mjs <ledger.csv>`

## 1. 何を1行にするか

1行は「1回の提示から終了まで」を表す。Referral、Co-Delivery、Case、Knowledgeを1行へまとめない。同じ案件でCaseとKnowledgeを選んだ場合は、別の`transaction_id`を発行する。

提示だけで断られた案件も削除せず、`declined`として残す。失注を消すと受諾率と提示導線別採算が上振れするためである。

## 2. ステータス

| `decision_status` | 意味 | 終了状態 |
|---|---|---|
| `offered` | 標準条件を提示した | いいえ |
| `declined` | スコーピング前に辞退 | はい |
| `scoping_paid` | スコーピング料入金済み | いいえ |
| `scoping_rejected` | スコーピング後に不採択・不成立 | はい |
| `accepted` | 本体契約を締結した | いいえ |
| `in_delivery` | 本体役務を提供中 | いいえ |
| `completed` | 納品、売上認識、原価確定済み | はい |
| `cancelled` | 契約後に中止 | はい |

標準遷移は`offered → declined`または`offered → scoping_paid → scoping_rejected / accepted → in_delivery → completed / cancelled`とする。

## 3. 区分

| 項目 | 値 |
|---|---|
| `archetype` | `direct_member` / `enterprise_member` / `external_partner` / `other` |
| `lead_origin` | `member_direct` / `baao_new_lead` / `joint` / `other` |
| `transaction_type` | `referral` / `co_delivery` / `case` / `knowledge` |
| `customer_permission_status` | `not_requested` / `pending` / `approved` / `not_approved` / `not_required` |
| `coi_status` | `unchecked` / `clear` / `mitigated` / `blocked` |
| `complaint_status` | `none` / `open` / `resolved` |

`offer_variant`には提示カードの識別子をそのまま記録する。標準外の値を作る場合は、価格例外の承認記録へリンクする。表示名では集約せず、価格または条件を変えたら別の識別子を発行する。

## 4. 金額と工数

### 4-1. 売上

- `scoping_fee_yen`: スコーピング開始前に受け取る金額。
- `prepayment_yen`: 本体価格のうち、着手前までに受領した累計額。スコーピング料を本体へ充当した場合は、その金額を含む。
- `recognized_revenue_yen`: 終了時に当該取引の売上として認識した総額。成約時はスコーピング料を二重計上しない。不成立時に返金しないスコーピング料は、その金額だけを売上にする。

### 4-2. 原価

- `labor_cost_rate_yen_per_hour`: 当該行に使うBAAO直接工数の評価単価。
- `offer_direct_cost_yen`: 候補確認、標準提示、初回説明、回答記録の直接工数原価。
- `scoping_direct_cost_yen`: 見積、権利、COI確認の直接工数原価。
- `delivery_direct_cost_yen`: 納品に使ったBAAO直接工数原価。
- `author_fee_yen`: 著者への固定報酬または最低保証。
- `royalty_yen`: 確定した売上連動報酬。
- `external_cost_yen`: 案件固有の外注・第三者ライセンス費。
- `total_direct_cost_yen`: 上記6項目の合計。

全工数は実測値を`offer_hours`、`scoping_hours`、`delivery_hours`へ記録する。現在の評価用原価は1.2万円/時間とし、各工数原価は`実測時間 × labor_cost_rate_yen_per_hour`に一致させる。評価単価を変更した場合は、理由と適用日を決裁ログに残し、比較対象を同じ基準で再計算する。辞退された提示も`offer_direct_cost_yen`を0円へ丸めない。

### 4-3. 粗利

```text
実現粗利 = recognized_revenue_yen - total_direct_cost_yen
粗利率 = 実現粗利 / recognized_revenue_yen
```

売上が0円の場合の粗利率は0とする。将来販売、推定ブランド価値、未成約紹介料は含めない。

## 5. 同意と人間心理

- `opt_in_confirmed`: 4取引を別々に選べると説明し、本人が当該取引を選んだ場合だけ`yes`。
- `membership_no_disadvantage_confirmed`: 断っても会員資格、称号、案件配分、参加権に影響しないと説明した場合だけ`yes`。
- `fairness_score_1_7`: 「この提示は、自分とBAAOの負担・見返りに照らして公平だった」の7段階回答。

担当者は、相手が断りにくそうだからと欄を代理入力しない。回答保留は空欄のままにし、その取引を開始しない。

## 6. 自動停止する不整合

バリデーターは少なくとも次をエラーにする。

- 必須列の欠落、取引IDの重複、未定義の区分。
- 明示的Opt-inまたは不利益なしの確認が`yes`でない。
- 売上、原価、粗利、粗利率の式が合わない。
- 3区分の直接工数原価が、実測時間と行の評価単価に一致しない。
- 完了取引の粗利率が20%未満。
- 本体不成立で単独完了した有料スコーピングの粗利率が20%未満。
- スコーピング不成立、完了、取消の確定フローが赤字。
- 同一`offer_variant`の終了提示が3件以上あり、その累計粗利が赤字。
- Case / Knowledgeの100%前受け、Co-Deliveryの70%前受けが不足。
- 前受け入金日より先に本体作業を開始。
- Case / Knowledgeを顧客許諾なしで完了扱いにする。
- 解消できないCOIがあるのに取引を進める。

辞退1〜2件の提示原価はエラーにせず警告にする。3件時点から同一`offer_variant`の累計提示導線を判定し、60日終了時は件数にかかわらず累計貢献利益と1提示あたり平均貢献利益をゲート会議で確認する。小標本のP10は成立取引の原価分布をみる参考値に限定する。個別行を通過しても、受付上限、総稼働64時間、配信SLA、公平感中央値は別途確認する。

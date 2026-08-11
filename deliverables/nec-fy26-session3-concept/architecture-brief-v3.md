# 第3回 一枚絵ページ設計 v3

## 修正方針

- レクチャーの主語はBrainbaseではなく、企業の知識をAIが安全に利用するための一般的な設計方法とする。
- Brainbaseは、講師自身がこの設計思想をどのように実装しているかを示すケーススタディとしてのみ扱う。
- RAG、Graph、個人KG、Ontology、RACI、MCP、Agent、Human Gateを、特定製品に依存しない順序で説明する。
- 田岡氏の課題、発言、試行内容は参加者向け資料に出さず、参加者が事前事情を知らなくても理解できる一般化ケースを使う。
- AI駆動PMO、契約継続、Brainbase導入提案は本編から外す。

## Deck Brief

- Audience: NECのAI推進担当者・管理者層。第1・2回の未受講者、GraphやOntologyの初学者を含む
- Decision or change expected: 自社のナレッジ施策を「検索ツール導入」ではなく、関係・意味・責任・実行統制まで含む業務設計として捉え直す
- Presentation setting and duration: 第3回研修、90分。全体像説明用の1ページ
- Center pin: Agentを企業で動かすには、情報量だけでなく、関係、意味、責任、権限、人の承認が必要である
- What the audience already knows: Mail・Teams・Driveに業務記録があり、RAGで文書検索や回答生成ができる
- What must be proven: RAGからGraph・個人KG・Ontology・RACIへ進む意味と、それらをMCP・Agent・Human Gateにつなぐ理由
- Output format: 16:9 PNG。日本語を含む全要素を画像内に描画
- Required sources: 第2回資料のデザイン、第2回実施内容、NECの過去経緯、Brainbaseの設計資料
- Unconfirmed inputs: 参加者数、当日の利用可能ツール、匿名化データを用いたデモ可否
- Existing design source: `deliverables/nec-fy26-session2-full-deck/`
- Locked palette: 背景:#F8FAFD／面:#FFFFFF／本文:#071B50／補足:#5D6988／アクセント:#FF7A00（橙）、#04AFC4（シアン）、#6B2CBF（紫）、#1785E5（青）
- Fonts: Noto Sans JP、Hiragino Sans、Yu Gothic相当
- Grid, footer, and page-number rules: 16:9、十分な外周余白、右下フッターなし
- Illustration and icon language: 業務記録、接続、知識構造、責任、Agent、人の承認を区別する意味アイコン。装飾アイコンは置かない

## 一枚絵の主張

### タイトル

企業の知識を、Agentが安全に使える形へ

### 結論

業務記録をRAGで探せるようにするだけでは、Agentを企業業務へ接続できない。Graphで関係を、個人KGで経験と判断基準を、Ontologyで共通語彙と業務ルールを、RACIで実行・承認・相談・通知の責任を定義し、MCPとHuman Gateを通じて承認された実行だけを業務へ戻す。

### 情報構造

`業務の記録 → MCP → RAG → Graph → 個人KG → Ontology → RACI → Agent → Human Gate → MCP経由の書き戻し`

Brainbaseは上記の流れの外側にある製品枠として描かず、下部の小さな「実装例」帯で次の対応だけを示す。

`Graph SSOT｜Personal KG｜Ontology Kernel｜Decision / RACI｜Automation Run`

## Slide Plan

| No. | Title | Role | Question | Conclusion | Information structure | Intensity | Hero | Visual asset | Layout sentence | Evidence |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | 企業の知識を、Agentが安全に使える形へ | 分析 | 業務記録が安全なAgent実行へどうつながるか | 検索、関係、個人文脈、意味、責任、接続、承認を一つの流れとして設計する | 順序 | 強 | 図版 | 汎用アーキテクチャ図 | 左から右へ知識の成熟と実行統制を描き、Brainbaseは下部の実装例帯だけに置く | 第2回資料、NEC経緯、一般化した設計原則、Brainbase設計資料 |

## Renderer Handoff

- Exact content: Mail、Teams、Drive、MCP、RAG、Graph、個人KG、Ontology、RACI、Agent、Human Gate、承認後の書き戻し、Brainbase実装例
- Elements that may be shortened: Mail・Teams・Driveの説明、Agentの作業例
- Elements that must remain verbatim: `RAG`、`Graph`、`個人KG`、`Ontology`、`RACI`、`MCP`、`Agent`、`Human Gate`
- Do not invent: NEC固有の課題、田岡氏の試行、Brainbase導入効果、完全自動化、契約提案
- Citation or source line: 講師説明用の根拠は別紙に保持し、参加者向け一枚絵には個別案件情報を記載しない
- Locked palette copied verbatim: 背景:#F8FAFD／面:#FFFFFF／本文:#071B50／補足:#5D6988／アクセント:#FF7A00（橙）、#04AFC4（シアン）、#6B2CBF（紫）、#1785E5（青）

## Preflight

- Evidence: PASS。NEC固有情報と講師の実装例を分離
- Narrative: PASS。一般原則を理解した後に実装例を見る順序
- Layout: PASS。左から右への一方向の読み順。書き戻しのみHuman GateからMCPへ戻る
- Visual system: PASS。第2回の白背景、ネイビー、限定的な橙・紫・シアンを継承
- Visual assets: PASS。すべてのアイコンが情報源、接続、知識、責任、承認の識別に使われる
- AI-slop rejection: PASS。Brainbaseを中央の万能箱にせず、意味のない製品宣伝・CTA・抽象的な装飾を排除

## Output

- First draft: `07-enterprise-knowledge-agent-architecture-full-imagegen-v7.png`
- Final: `08-enterprise-knowledge-agent-architecture-full-imagegen-v8.png`
- Mode: built-in `image_gen`。v7を生成後、書き戻し経路だけを精密編集
- Brainbase占有率: 下部の実装例帯のみ、画面全体の約15〜20%
- Arrow QA: 読み取りは `業務記録 → MCP → 知識基盤 → Agent → Human Gate`。書き戻しは `Human Gate → MCP → 業務記録` とし、MCPを迂回する矢印を置かない
- Confidentiality QA: 田岡氏、退職予定者、個別部門課題を記載しない
- Promotion QA: Brainbaseを唯一解・導入提案・主役として表現しない

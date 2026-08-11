# 第3回 一枚絵ページ設計 v2

## Deck Brief

- Audience: NECのAI推進担当者・管理者層。ナレッジ基盤やGraphの専門家とは限らない
- Decision or change expected: RAGだけではなく、意味・判断・変更履歴を扱う組織知基盤が必要だと理解する
- Presentation setting and duration: 第3回研修、全体像説明用の1ページ
- Center pin: Ontologyは知識を置く箱ではなく、Graphの事実を同じ意味で読み書きするための契約である
- What the audience already knows: Mail・Teams・Driveに業務記録がある。RAGで検索できる
- What must be proven: MCP、Brainbase、Agent、人の承認がどのようにつながり、誤った事実や規則を正本へ入れないか
- Output format: 16:9 SVGおよびPNG
- Required sources:
  - 添付 `story-brainbase-ontology-kernel`
  - Brainbase `graph.ssot` capability
  - Brainbase `personal-kg` capability
  - 第2回資料のデザイン
- Unconfirmed inputs: Ontology active versionの稼働、Automation Runの現行完成範囲
- Existing design source: `deliverables/nec-fy26-session2-full-deck/`
- Locked palette: 背景:#F8FAFD／面:#FFFFFF／本文:#071B50／補足:#5D6988／アクセント:#FF7A00（橙）、#04AFC4（シアン）、#6B2CBF（紫）、#1785E5（青）
- Fonts: Noto Sans JP、Hiragino Sans、Yu Gothic
- Grid, footer, and page-number rules: 58px外周、上部タイトル、下部結論線、右下フッター表記なし
- Illustration and icon language: 細線の意味アイコン。装飾目的の反復アイコンは使用しない

## Title-Only Story

1. MCPでつなぎ、Ontology Kernelで意味を揃え、Agentが安全に仕事を進める

## Slide Plan

| No. | Title | Role | Question | Conclusion | Information structure | Intensity | Hero | Visual asset | Layout sentence | Evidence |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | MCPでつなぎ、Ontology Kernelで意味を揃え、Agentが安全に仕事を進める | 分析 | 業務記録がどう組織知と安全なAgent実行につながるか | MCPで接続し、Ontology KernelがGraphへの読み書きを検証し、人の承認後に正本・業務へ反映する | 関係 | 強 | 図版 | システム全体の循環図 | 左から情報源、MCP、Brainbase、Agentを並べ、中央のOntology KernelをGraphの意味契約として描き、下部に変更ライフサイクルを置く | 添付Story、capability yml |

## Renderer Handoff

- Exact content: Mail、Teams、Drive、MCP、RAG、Graph SSOT、Personal KG、Ontology Kernel、Agent、Automation Run、Human Gate、Decision／RACI、変更ライフサイクル
- Elements that may be shortened: 各システムの具体例、Agentの機能説明
- Elements that must remain verbatim: `Graph SSOT`、`Ontology Kernel`、`Personal KG`、`Automation Run`、`Decision / RACI`
- Do not invent: Ontologyのactive版稼働、完全自動実行、個人KGからGraphへの自動昇格
- Citation or source line: 添付Storyの意味境界・受け入れ基準
- Locked palette copied verbatim: 背景:#F8FAFD／面:#FFFFFF／本文:#071B50／補足:#5D6988／アクセント:#FF7A00（橙）、#04AFC4（シアン）、#6B2CBF（紫）、#1785E5（青）

## Preflight

- Evidence: PASS。実装済み・実装中・未確認を区別
- Narrative: PASS。1ページ1問
- Layout: PASS。接続、意味契約、実行、変更管理の関係構造
- Visual system: PASS。第2回の白背景、ネイビー、橙・紫・シアンの線画を継承
- Visual assets: PASS。アイコンは情報源、意味、実行、承認の識別に使用
- AI-slop rejection: PASS。横並びカードの反復を避け、Ontology Kernelを一つの主役として扱う

## Render QA

- Canvas: PASS。1664 × 936（16:9）
- SVG validation: PASS。XMLとして正常
- Hierarchy: PASS。Ontology Kernelを主役とし、Graph SSOTはその検証対象、RAGとPersonal KGは証拠・候補文脈として分離
- Promotion boundary: PASS。Personal KGからの接続を「候補・参照」の破線とし、自動昇格を表現していない
- Human control: PASS。適合後はHuman Gateへ進み、承認後にGraphへcanonical公開する流れを明示
- Status boundary: PASS。Storyはactiveだが受け入れ基準は未完了、active Ontology versionは未確認と表示
- Legibility: PASS。最終PNGを原寸確認し、タイトル・ステージ見出し・主要ラベルの干渉を解消

## Image Generation v3

- Mode: built-in `image_gen`。v2 PNGを編集対象・内容正本として使用
- Output: `03-ontology-kernel-agent-architecture-imagegen-v3.png`
- Final size: 1664 × 936
- Prompt center: 「構成・文言・意味境界を維持し、上質な日本企業向け編集デザインと精密なテック図解へ再設計する。Ontology Kernelを主役にし、RAG、Personal KG、Graph SSOT、Human Gateの境界は変更しない」
- Visual change: MCPを接続の背骨として強調し、Brainbase内部の余白・線幅・アイコン・面の階層を整理。過剰な3D、グラデーション、装飾アイコンは使用しない
- Semantic QA: PASS。Personal KGのみを表示し、Meshおよび右下フッターは追加されていない
- Status QA: PASS。Story active、受け入れ基準未完了、active Ontology version未確認の表記を維持

## Image Generation + Vector Control v4

- Reason for redesign: v3は元画像をedit targetとして保持条件を強く指定したため、レイアウトと既存の矢印形状を引き継ぎすぎた
- Image generation role: built-in `image_gen`で、文字・矢印なしのOntology統制リング／Graph hero illustrationをゼロから生成
- Vector role: 日本語、ステータス、Human Gate、Graph公開、Automation Run、書き戻しの方向をSVGで決定的に配置
- Output: `04-ontology-kernel-controlled-loop-v4.png`
- Final size: 1664 × 936
- Direction QA:
  - 業務の正本 → MCP
  - MCP → RAG / Evidence、およびPersonal KG
  - Agent proposal → Ontology Kernel
  - 適合 → Human Gate
  - Human Gate承認 → Graph SSOT canonical公開
  - Human Gate承認 → Automation Run
  - Automation Run → MCP → Mail / Teams / Drive書き戻し
- Semantic QA: PASS。違反は拒否・隔離、不足は競合・未確認。Personal KGは候補・参照で自動昇格しない
- Visual QA: PASS。v3の横長カード構成を廃し、中央のGraph heroと統制リングを中心とする循環構図へ変更

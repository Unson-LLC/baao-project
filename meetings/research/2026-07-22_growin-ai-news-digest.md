# AI最新ニュース・ダイジェスト

**作成者**: 佐藤圭吾
**作成日時**: 2026年7月22日
**用途**: グローウィン・パートナーズ様向け 定例AIコンサル 冒頭ニュース共有
**主題**: 一つのAgent、会社のGraph、企業固有のOntology
**構成**: Loop → Graph → Ontology → Governance → Business Application

---

## エグゼクティブサマリー

この1カ月で、企業向けAIをめぐる論点は「どのAIモデルを使うか」「何個のAIエージェントを作るか」から、**企業全体の知識・権限・業務をどう構造化するか**へ移りました。

OpenClaw開発者のPeter Steinberger氏は7月17日（日本時間18日ごろ）、**“Are we still talking loops or did we shift to graphs yet?”**――まだLoopの話をしているのか、それともGraphへ移ったのか――と投稿しました。正式な方法論の発表ではなく、短い問題提起ですが、今月の複数のニュースを最もよく表しています。

一方、Sierraは職種別に作っていた社内AIエージェントを一つの「Pinecone」に統合しました。AIエージェントを増やすほど価値が増えるわけではなく、従業員に「どのエージェントを使うか」を判断させること自体が新たな負担になるためです。AWSも同じ週に、部門ごとのエージェント乱立が、重複開発、認証情報の増殖、競合操作、見えないコスト、コンプライアンス違反を招く「Agent Sprawl」を警告しました。

この流れを整理すると、今後の企業AIは次の3層になります。

| 層 | 役割 |
|---|---|
| **One Agent** | 従業員・顧客から見える一つの窓口、継続する文脈、責任主体 |
| **Graph** | 人、AI、データ、業務システム、承認を結ぶ実行経路 |
| **Ontology** | 「顧客」「案件」「売上」「承認」など、会社固有の意味・関係・判断基準 |

そして、そのGraphを安全に動かすために、**Agent Identity、権限、監査、Human-in-the-loop**が必要になります。

グローウィン様にとって重要なのは、部門別AIエージェントを次々と販売することではありません。顧客企業を一つのAgentとして機能させるための**Corporate Ontology／Business Graphを設計し、既存のERP・CRM・人事システム内で安全に動かす役割**です。これは、これまで議論してきた「会社の脳」「AIガバナンス」「グローウィン版FDE」を一つの事業構想にまとめるものです。

---

## 今月の全体像

| 大潮流 | ニュース | グローウィン様への意味 |
|---|---|---|
| **1. AgentからGraphへ** | Peter氏「LoopからGraphへ」 | 個別Agentの改善から、組織全体の接続設計へ |
|  | Sierraが職種別Agentを一つに統合 | 表は一つのAgent、裏は部門横断Graph |
|  | AWSがAgent Sprawlを警告 | Agent台帳、共通基盤、コスト管理が必要 |
| **2. Graphに意味を与えるOntology** | Microsoft Fabric IQ／Databricks Genie Ontology | 会社固有の用語、指標、関係、判断基準をAIに理解させる |
|  | Salesforce／SlackがCRM・BI・MCPを統合 | 「会社の脳」が抽象論から実装パターンへ |
| **3. Graphを安全に動かすGovernance** | Microsoft Entra Agent IDが正式提供 | AgentのID、所有者、権限、ライフサイクルを管理 |
|  | OracleがFusion内のAgentic Application構築を拡張 | 財務・人事AIを既存統制の中で実行 |
|  | PeopleXが人事AXとAIガバナンスを拡大 | 人事AIで公平性、説明責任、現場定着を同時設計 |

---

## 1. AgentからGraphへ

### OpenClaw開発者Peter Steinberger氏、「LoopからGraphへ」を示唆

![Loopの次はGraphへ](./images/2026-07-22_growin-news-01-loop-to-graph.png)

AIエージェント開発では、これまで「考える→実行する→結果を確認する→再試行する」というLoopの設計が中心でした。しかし、企業の仕事は一つのLoopでは完結しません。営業、法務、財務、人事、顧客、基幹システムが関係し、途中に権限確認や人間の承認が入ります。

Peter氏の問いは、AI開発の焦点が**一つのエージェントを賢くすることから、複数の主体と業務の関係を設計することへ移る**兆候として読めます。

ただし、Peter氏が「Graph Engineering」という正式な設計手法や標準を公表したわけではありません。あくまで短い問いが業界の議論を触発したものです。この留保を置いたうえでも、今月のSierra、AWS、Microsoft、Oracleの動きを束ねる言葉として重要です。

**グローウィン示唆**

- AIコンサルの単位を「一業務・一Agent」ではなく、**業務間の依存関係と判断経路**へ引き上げる
- 経理、人事、提案、マーケティングを別々にAI化するのではなく、共通する顧客・案件・人材・権限をGraphで接続する
- Graphの設計そのものを、業務改革・内部統制・ERP導入の上流サービスとして商品化する

**出典**: [Peter Steinberger氏の投稿転載（Digg）](https://digg.com/tech/mcw7wsyq) / [発言の位置づけを検証した解説](https://smartscope.blog/en/blog/graph-engineering-loop-engineering-logic-review/)

### Sierra、職種別Agentを廃止し、一つの「Pinecone」へ統合（2026年7月9日）

![職種別Agentを廃止しOne Agentへ](./images/2026-07-22_growin-news-02-sierra-one-agent.png)

Sierraは社内AI導入の初期段階で、サポート、データ分析、エンジニアリング、営業という職種別Agentを構築しました。しかし、社員が「どのAgentが何をするのか」を覚える負担が生まれ、実運用では機能しなかったと公表しています。

より本質的な問題は、価値の高い仕事ほど部門内ではなく部門横断で進むことでした。そこでSierraは、すべてを一つの「Pinecone」に統合しました。

- Slackハンドルは一つ
- URLは一つ
- 質問から成果物完成まで、一つのスレッドで文脈を維持
- 利用するシステム、ツール、モデルはAgent側が判断
- 社員本人のアクセス権を引き継ぎ、ツール呼び出しごとにポリシーを適用
- GitHub、Salesforce、Linearなど、既存のSystem of Recordは置き換えない

Pineconeは600人以上に利用され、3月以降7万5,000セッション以上が実行され、SierraのPRの70%がPinecone経由で作成されたとしています。

重要なのは、**一つのAgentとは一つのモデルや一枚岩のシステムを意味しない**ことです。Pineconeの内部ではClaude CodeとCodexを使い分け、37の社内システムへ接続しています。利用者からは一つの窓口に見えますが、裏側にはモデル、データ、権限、業務を結ぶGraphがあります。

**グローウィン示唆**

- 「人事Agent」「財務Agent」を別製品として並べる前に、利用者から見た入口を一つにする
- 社内実践では、提案準備、契約確認、顧客調査、収益分析を一つの案件スレッドでつなぐ
- 専門能力は交換可能なノードにし、顧客へは一つの責任主体として提供する

**出典**: [Sierra「AI-pilling our company: lessons learned」](https://sierra.ai/blog/ai-pilling-our-company-lessons-learned)

### AWS、部門ごとの「Agent Sprawl」を警告（2026年7月17日）

![Agent Sprawlが生む隠れコスト](./images/2026-07-22_growin-news-03-agent-sprawl.png)

AWSは、複数事業部が個別にAIエージェントを開発することで、次の問題が既に起きていると指摘しました。

- 調達、日程調整、レポート作成など、共通能力の重複開発
- 複数Agentが共通システムへ書き込み、データ競合や不整合が発生
- 部門別には小さく見える費用が全社で積み上がる「Hidden Cost Aggregation」
- Agentごとの認証情報、監視、プロンプト、テスト、保守の増加
- 正規ルートが遅いことで生じるShadow Agent
- データ境界を越えた利用によるコンプライアンス違反

MicrosoftもSingle-Agent／Multi-Agentの設計指針で、Multi-Agentは受け渡しごとに状態管理、エラー処理、認証、監視、重複コンテキスト処理が発生し、コストと遅延が増えると説明しています。権限分離、複数チームの独立運用、将来の大規模拡張といった明確な理由がない限り、まずSingle-Agentで価値を検証する考え方です。

**グローウィン示唆**

- AIガバナンス診断に、**Agent台帳、所有者、利用モデル、接続データ、月次費用、停止条件**を加える
- 新規Agentを作る前に、既存Agent・共通スキルを検索する「BuildよりReuse」のルールを設ける
- ROIをトークン数やセッション数ではなく、決算日数、提案リードタイム、採用歩留まりなどの業務成果で測る

**出典**: [AWS「Managing AI agent sprawl across business units」](https://aws.amazon.com/blogs/industries/managing-ai-agent-sprawl-across-business-units/) / [Microsoft「Single agent or multiple agents」](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai-agents/single-agent-multiple-agents)

---

## 2. Graphに意味を与えるOntology

### Microsoft Fabric IQ、企業OntologyをAgentの共通意味層に（2026年7月8日更新）

![Graphに意味を与えるOntology](./images/2026-07-22_growin-news-04-ontology.png)

Graphが「何と何がつながっているか」を表すのに対し、Ontologyは**そのつながりが会社にとって何を意味するか**を定義します。

例えば「優良顧客」という言葉でも、売上、粗利、継続確率、戦略的重要性のどれを指すかで判断は変わります。Ontologyがなければ、営業Agentと財務Agentが同じ顧客データを見ても異なる結論を出します。

MicrosoftはFabric IQで、顧客、注文、製品などのEntity、その属性、関係、ビジネスロジックをOntologyとして定義し、CopilotやAgentが企業固有の言葉で推論できるようにしました。異なる部門、データソース、ワークフローで意味を再利用し、同じ定義を何度も作らないことを狙っています。

Databricksも6月にGenie Ontologyを発表しており、OntologyはPalantir固有の概念ではなく、企業向けAIの標準的な設計要素になり始めています。

**グローウィン示唆**

- 「会社の脳」を文書検索基盤ではなく、**企業固有の概念・関係・判断基準を持つBusiness Ontology**として定義する
- グローウィンが強い経営管理、人事、財務の知見を、KPI定義、判断ルール、例外条件として形式知化する
- FDEが現場で得た暗黙知をプロンプトに閉じ込めず、OntologyとGraphへ残す

**出典**: [Microsoft「What is Fabric IQ?」](https://learn.microsoft.com/en-us/fabric/iq/overview) / [Microsoft「What Is Ontology?」](https://learn.microsoft.com/en-us/fabric/iq/ontology/overview) / [Databricks Genie One／Genie Ontology発表報道](https://www.itpro.com/technology/artificial-intelligence/databricks-launches-ai-co-worker-genie-one)

### Salesforce／Slack、CRM・Tableau・Data 360・外部ツールをSlackbotへ統合（2026年7月16日）

![会話画面が会社の脳の入口に](./images/2026-07-22_growin-news-05-salesforce-slack-mcp.png)

Salesforceは新しいMCPサーバー群を公開し、SlackbotからSalesforce CRM、Tableau、Data 360、外部アプリケーションへ接続できるようにしました。利用者はSlack上で顧客情報の確認、商談更新、データ分析、業務実行を行えます。

これは「会社の脳」が単なる社内検索ではなく、次の4要素を持つ実装へ進んだことを示します。

1. 会話を一つの入口にする
2. CRM、BI、文書、業務SaaSのデータを接続する
3. 閲覧だけでなく更新・実行まで行う
4. MCPを通じて接続先を交換・追加できる

**グローウィン示唆**

- Salesforce導入企業だけの話にせず、HubSpot、Slack／Teams、会計・人事SaaSをつなぐ再現可能なパターンとして扱う
- CRMをSSOT、Ontologyを意味層、Slack等をAgent UIとして分離する
- 顧客情報の要約ではなく、提案作成→レビュー→承認→CRM更新までを一つのGraphにする

**出典**: [Salesforce Japan「SlackをAIオペレーティングシステムへと進化させる新たなMCPサーバー」](https://www.salesforce.com/jp/news/press-releases/2026/07/16/new-mcp-servers-ai-data-in-slack/)

---

## 3. Graphを安全に動かすGovernance

### Microsoft Entra Agent ID、AIエージェント向けID・権限管理を正式提供

![AIエージェントにもIDと職務分掌を](./images/2026-07-22_growin-news-06-entra-agent-id.png)

AIエージェントが自律的にデータを読み、システムを更新するなら、各Agentを「誰が作ったか分からないスクリプト」として扱うことはできません。MicrosoftはEntra Agent IDを正式提供し、AIエージェントに固有IDを与え、認証、認可、Conditional Access、所有者・スポンサー、ライフサイクル、監査を管理できるようにしました。

また、Microsoft Agent 365を全Agentの統一台帳・コントロールプレーンとし、Entra Agent IDをID基盤にする方針を示しています。MCPやA2Aで接続が広がるほど、Agentにも従業員と同様の入社、異動、権限変更、退職に相当する管理が必要になります。

**グローウィン示唆**

- **AIエージェント・ガバナンス診断**を独立商品化する
- 診断項目は、Agent台帳、業務目的、所有者、スポンサー、接続データ、権限、Human-in-the-loop、ログ、費用、停止・廃止条件
- J-SOXや職務分掌の知見を「Agentの職務分掌」へ拡張する

**出典**: [Microsoft Entra releases and announcements](https://learn.microsoft.com/en-us/entra/fundamentals/whats-new) / [Microsoft「What's new in Microsoft Entra Agent ID」](https://learn.microsoft.com/en-us/entra/agent-id/whats-new-agent-id)

### Oracle、Fusion内でAgentic Applicationを構築するAI-native Builderを発表（2026年7月14日）

![AIを業務システムの統制内へ](./images/2026-07-22_growin-news-07-oracle-agentic-applications.png)

Oracleは、Fusion Cloud Applicationsの内部でAgentic Applicationを作成・実行する新しいBuilder Experienceを発表しました。

Oracleの特徴は、AIをERPやHCMの外側へ後付けするのではなく、Fusion内の次の要素をそのまま利用する点です。

- 財務・人事・サプライチェーン等のBusiness Object
- 既存ワークフロー
- 権限と承認階層
- ポリシー
- 実行ログと監査証跡

利用企業やパートナーは、No-code／Pro-codeの両方で、複数の専門Agentが連携するAgentic Applicationを構築できます。VS Code、Codex、Claude Code等も利用しながら、Oracleと同じFusion-nativeのガバナンス枠組みで実行できるとしています。

これは、財務・人事AIの勝ち筋が「ERPからデータをコピーして外部AIへ渡す」ことではなく、**既存のトランザクション、承認、統制の中にAIを入れること**へ移っていることを示します。

**グローウィン示唆**

- グローウィン版FDEの役割を、Agent開発そのものではなく、**業務Ontology、承認経路、例外処理、KPIを設計する人材**と定義する
- 財務・人事の業務知識を再利用可能なAgent Skill／Workflowとして資産化する
- Oracle Fusion以外でも、NetSuiteや国内ERPの既存統制を壊さない実装原則として横展開する

**出典**: [Oracle「AI-Native Builder Experience」](https://www.oracle.com/ae/news/announcement/oracle-introduces-ai-native-builder-experience-2026-07-14/) / [Oracle「Fusion Agentic Applications」](https://www.oracle.com/europe/news/announcement/oracle-introduces-fusion-agentic-applications-2026-03-24/)

### PeopleX、人事AX支援を業務・データ・ガバナンス・定着まで拡大（2026年6月9日）

![人事AIは効率化だけでは足りない](./images/2026-07-22_growin-news-08-peoplex-hr-governance.png)

PeopleXは、人事領域でAIを前提に組織を再設計する「人事AXコンサルティング」を深化させました。同社は、人事戦略だけでなく、業務プロセス、データ基盤、ガバナンス、現場定着までを一体で設計する必要があると説明しています。

PeopleXはAI面接についても、AI事業者ガイドラインを踏まえた独自のAI倫理ガイドラインとガバナンス体制を公開しています。人事AIは、効率化だけでなく、採用・評価・配置という個人のキャリアに影響するため、公平性、説明可能性、個人情報、異議申立て、人間による最終判断が不可欠です。

**グローウィン示唆**

- 人事AI導入をSaaS選定で終わらせず、**評価基準のOntology化とHuman-in-the-loop設計**まで含める
- PeopleX等の製品導入に、AI倫理・公平性・権限・ログのレビューを組み合わせる
- グローウィン社内で先行導入し、制度設計×AI実装×運用定着の事例として外販する

**出典**: [PeopleX「人事AXコンサルティングサービスを深化」](https://peoplex.jp/news/20260609/) / [PeopleX「AI活用に関する安心に向けた取り組み」](https://peoplex.jp/trusted_ai/)

---

## グローウィン様にとっての結論

### 「会社の脳」の定義

> **会社の脳 = SSOTとなる事実 + Ontologyとなる会社固有の意味・判断基準 + Graphとなる業務・権限・実行経路**

文書をベクトル検索できるだけでは、会社の脳にはなりません。AIが「優良顧客」「承認済み」「採用すべき人材」「例外として認める条件」の意味を理解し、正しい権限と承認経路で行動できて、初めて業務で使える会社の脳になります。

### グローウィン版FDEの役割

グローウィン版FDEは、顧客先でプロンプトを書く人ではありません。

- 現場の言葉と経営指標をOntologyとして定義する
- 業務、データ、人、AI、承認をGraphとして可視化する
- Agentに与える権限と停止条件を設計する
- 既存ERP・CRM・HRシステムの統制内に実装する
- 現場で得た例外処理と判断知識を顧客企業の資産として残す

この役割なら、外部モデルや製品が入れ替わっても価値が残ります。

### 商品化の優先順位

1. **AIエージェント台帳・権限診断**
   既存Agent、所有者、接続データ、権限、費用、ログ、停止条件を可視化する。

2. **Corporate Ontology Workshop**
   顧客、案件、売上、人材、承認、リスク等の意味と関係を経営・現場で合意する。

3. **One Agent PoC**
   複数Agentを乱立させず、提案業務など一つのJob-to-be-doneを入口から成果物までつなぐ。

4. **ERP／CRM／HR内実装支援**
   Oracle、Salesforce、PeopleX等の既存統制を利用し、実業務へ組み込む。

5. **運用・ROIレビュー**
   Agent利用回数ではなく、決算日数、提案リードタイム、採用歩留まり、例外発生率で評価する。

---

## 今日の会議でそのまま使える冒頭コメント

「今月のニュースを一言でまとめると、AIエージェントを何個作るかという競争が終わり始めた、ということだと思います。OpenClawのPeter Steinberger氏が“LoopからGraphへ移ったのか”と問い、Sierraは実際に職種別のAgentを一つに統合しました。一方でAWSはAgentの乱立による重複開発、権限増殖、見えないコストを警告しています。

ただ、一つのAgentにすべてを詰め込むという話でもありません。利用者から見える窓口は一つにしながら、裏側では人、AI、データ、承認をGraphとして構成する。そして、そのGraphに会社固有の言葉や判断基準を与えるのがOntologyです。

Microsoft、Oracle、Salesforce、PeopleXのニュースを見ると、このGraphとOntologyを既存の権限・承認・監査の中で動かす競争が始まっています。グローウィンさんにとっては、部門別Agentを販売するより、顧客企業の業務OntologyとBusiness Graphを設計することが、会社の脳やFDE構想を本当の事業にする道ではないかと思っています。」

---

## 本日のディスカッション問い

> グローウィンは「部門ごとのAIエージェントを導入する会社」になるのか。
> それとも「顧客企業を一つのAgentとして機能させる、業務OntologyとBusiness Graphを設計する会社」になるのか。

---

*調査日: 2026-07-22 / 情報源: Sierra、AWS、Microsoft、Oracle、Salesforce、PeopleX、Databricks関連公開情報。Peter Steinberger氏の発言は検索可能な転載で確認し、正式な方法論の発表とは区別して記載。*

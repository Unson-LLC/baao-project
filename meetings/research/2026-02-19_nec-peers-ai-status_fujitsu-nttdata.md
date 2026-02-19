# 富士通・NTTデータ 生成AI利活用状況調査

調査日: 2026-02-19
調査目的: NECコンサルティング向け 競合他社の生成AI利活用状況把握

---

## 富士通

### セキュリティ・利用ポリシー

**生成AI利活用ガイドライン（一般公開済み）**

- 2023年5月に社内で生成AIをセキュアに利用できる環境を全社展開。全従業員が利用可能
- 「富士通 生成AI利活用ガイドライン」（第1.2版, 2024年7月）を策定し、社外にも一般公開
  - 倫理的・法的観点からリスク（ハルシネーション、著作権侵害、バイアス）と対策例を詳述
  - 技術部門・事業部門など実利用者の意見を取り入れた実用的な内容
  - AIの知識がない社員にも理解しやすい構成で、業界内でも参考事例として評価
- GitHub Copilot導入時は、経営層のリード下で全社推進部門・セキュリティ部門・法務部門・品質保証部門が横断してガイドラインを整備
- 情報セキュリティ、品質リスク、知財リスクに関する厳格な確認・チェック体制を構築
- **Fujitsu Cloud Service Generative AI Platform**（2025年2月〜）：機密性の高いデータをプライベート領域で管理し、安全に生成AIを利活用可能な環境を提供

**外部AIツールの開放度合い**: 全従業員に開放済み（ガイドライン順守前提）。ChatGPTベースの社内環境を整備し、約46,000人が利用中

### 社内普及・組織

**AI推進体制**

- **CTO**: Vivek Mahajan氏（執行役員副社長 CTO/CPO）がAI戦略を統括。専任のCAIOは公表されていないが、CTOがAI推進のトップリーダー
- 2024年12月・2025年12月にテクノロジー戦略説明会を開催し、AIを5つのキーテクノロジーの中心に据えた全社戦略を発表
- 全社推進部門がセキュリティ・法務・品質保証と横断連携してAI導入を推進

**社内AI利用状況（2025年時点）**

- 汎用型生成AIの社内利用者数: **約46,000人**
- 日次利用回数: **約170,000回**
- 主な用途: コード生成、提案書作成、レポート自動化、アンケート分析等

**GitHub Copilot展開**

- 2024年7月からSI事業にGitHub Copilot活用を開始
- 2025年3月末: **4,000アクティブユーザー**達成（計画通り）
- 利用者の**90%以上**が効果を実感
- **20%以上の作業時間短縮効果**
- 2025年度末（2026年3月末）までに累積**37万5,000時間**の削減効果を見込む
- 社内開発基盤「Fujitsu Developers Platform」にGitHub Copilotを統合して社内普及

### 活用事例

**1. AI-Driven Software Development Platform（2026年2月17日発表・運用開始）**

- 独自LLM「Takane」と富士通研究所のAIエージェント技術を活用
- ソフトウェア開発の**全工程**（要件定義→設計→実装→結合テスト）をAIエージェントが協調実行
- **生産性100倍**の実績: 従来3人月→4時間（法令改正に伴うプログラム改修案件）
  - 約6万8,000本のプログラム資産から対象10本を自動特定
  - 法令文書を入力すると人の介在なしにAIが改修作業を完了
- 「Multi-layer Quality Control」: 熟練SEの暗黙知をAIに学習させ、生成物を多角的に監査
- 2026年1月より診療報酬改定に伴うソフトウェア改修に実適用
- 2026年度中に金融・製造・流通・公共分野へ展開予定

**2. GitHub Copilotによるリファクタリング**

- Javaコードを**75%削減**（965行→238行）: 共通化可能な処理をAIが提案しスリム化

**3. Salesforceサポートデスクでの活用**

- 生成AIにより約**80%の工数削減**を達成
- 顧客体験と生産性の向上を同時に実現

**4. Fujitsu Kozuchi Enterprise AI Factory（2026年1月26日発表）**

- 顧客専有環境で業務に最適化した生成AIの自律運用を可能にするプラットフォーム
- 社内ファインチューニング、モデル量子化等の機能を提供
- 2026年2月から段階提供開始、正式提供は2026年7月予定

### 独自LLM方針

**独自LLM「Takane（高嶺）」**

- カナダCohere社と共同開発した企業向けLLM
- 2024年9月に提供開始。日本語理解ベンチマーク（JGLUE）で**世界最高記録**を達成
- プライベート環境で動作可能（閉域利用対応）
- 製造業・安全保障・医療・行政等の専門領域に対応
- 法令文書の正確な理解、税務・電子カルテ等の専門業務知識、ソフトウェア工学の知見を学習

**軽量化・高速化技術（2025年9月発表）**

- 生成AI再構成技術を開発（精度量子化 + 専用AI蒸留）
- 1bit量子化で**メモリ消費量94%削減**、精度維持率**89%**（世界最高水準）、処理速度**3倍**高速化
- 2025年度後半からTakane量子化版のトライアル環境を提供

**外部LLMの使い分け**: 汎用的な社内業務にはChatGPTベースの環境を提供しつつ、専門領域・セキュリティ要件の高い業務にはTakaneを適用する二段構え

**プラットフォーム戦略**: 「Fujitsu Kozuchi」ブランド配下で生成AI・Physical AI・AIエージェントをシームレスに連携

### 情報源

- [富士通 生成AI利活用ガイドライン（PDF）](https://global.fujitsu/-/media/Project/Fujitsu/Fujitsu-HQ/technology/key-technologies/news/ta-generative-ai-utilizationguideline-20240112/fujitsu-generative-ai-utilizationguideline-jp.pdf)
- [AI-Driven Software Development Platform プレスリリース](https://global.fujitsu/ja-jp/pr/news/2026/02/17-01)
- [富士通 ソフトウェア開発への生成AI適用（note）](https://note.com/fujitsu_pr/n/n52583c18f838)
- [Fujitsu Kozuchi Enterprise AI Factory](https://global.fujitsu/ja-jp/pr/news/2026/01/26-02)
- [Takane軽量化技術](https://global.fujitsu/ja-jp/pr/news/2025/09/08-01)
- [Takane提供開始プレスリリース](https://pr.fujitsu.com/jp/news/2024/09/30.html)
- [ITmedia: 富士通ソフトウェア開発全工程AI自動化](https://www.itmedia.co.jp/aiplus/articles/2602/17/news086.html)
- [SBクリエイティブ: 生産性100倍](https://www.sbbit.jp/article/cont1/180995)
- [Fujitsu Cloud Service Generative AI Platform](https://pr.fujitsu.com/jp/news/2025/02/13.html)
- [Salesforce活用事例](https://www.salesforce.com/jp/blog/jp-fujitsu-ai-casestudy/)

---

## NTTデータ

### セキュリティ・利用ポリシー

**AIガバナンス体制**

- 産学官と連携した**グローバルなAIガバナンス体制**を構築
- ガイドライン・ポリシーの継続的な改訂を実施
- 生成AI研修の基礎課程（Whitebelt）でAIガバナンス・セキュリティ・リスク管理の順守を教育

**AIガードレールの導入**

- 不適切なAIサービスの利用を監視・保護する「AIガードレール」を社内導入推進
- アクセス権限の制御、利用ログの記録、利用ポリシーの徹底
- 「シャドーAI」（組織の管理外でのAIツール利用）問題への対策を明示

**セキュアな利用環境の提供**

- 「LITRON Generative Assistant（LITRON GA）」でユーザー認証・ログ取得等のセキュリティ機能を一括提供
- 閉域環境（プライベートクラウド）での生成AI利用を推進
- 2025年度中にプライベートクラウド版「LITRON GA」を拡充予定

**外部AIツールの開放度合い**: 社内環境で安全に利用できる基盤（LITRON GA等）を提供し、ガードレール付きで利用推進。シャドーAI問題への対策も実施

### 社内普及・組織

**GenAIビジネス推進部**

- NTTデータ国内全社の生成AIビジネスをリードする専門組織を設置
- 主要テクノロジーパートナー（AWS、Google Cloud、Microsoft、OpenAI）との協業を強化

**生成AI人材育成プログラム（4段階構成）**

| レベル | 名称 | 内容 |
|--------|------|------|
| Level 1 | **Whitebelt** | 基礎リテラシー、AIガバナンス・セキュリティ・リスク管理 |
| Level 2 | **Yellowbelt** | 顧客に価値を提供できる実践的スキル |
| Level 3 | **Greenbelt** | 複雑な生成AI案件を成功に導く高度人材 |
| Level 4+ | 職種別認定 | コンサル・営業・エンジニア・ユーザー別プログラム（予定） |

**実績と目標**

- 2024年10月: 全社員向け生成AI人財育成フレームワーク整備
- 2025年10月: 実践的生成AI人財（Yellowbelt修了）**7万人**達成（当初目標の2026年度末3万人を大幅前倒し）
- 2027年度末: 育成対象を**全社員約20万人**に拡大（全員をAIネイティブ化）
- 2025年8月: 国際的人材育成アワード「Brandon Hall Group Excellence Awards」学習・人材開発分野**金賞受賞**

**ビジネス成果**

- 主要テクノロジーパートナーとの協業でグローバル**2,000件超の受注**達成

### 活用事例

**1. AIネイティブ開発（2026年度導入予定）**

- ITシステム開発をほぼ生成AIが担う技術を2026年度中に導入
- 開発工程そのものをAIに適した形に単純化するアプローチ
- 要件定義→設計→製造→テストの全工程で生成AIを活用
- 実証段階で製造工程**7割合理化**、工期短縮・生産性**約3倍**向上

**2. RFPチェック業務の効率化**

- 有識者の知見・ノウハウを生成AIに学習させ、非機能要件チェックを自動化
- RFP対応期間を**約6割短縮**

**3. テスト工程の自動化**

- 複数AIエージェントを組み合わせ、総合テスト項目表を自動生成
- LLMが理解しやすい形式への前処理パイプラインを構築

**4. 営業業務変革PoC**

- 生成AIを活用した営業業務の変革実証を実施
- LITRON Sales・LITRON Marketingとして専門領域特化型AIエージェントを提供

**5. 顧客体験革命（支援→実行へ）**

- 生成AIの役割を「支援」から「実行」に進化させ、顧客体験を変革

### 独自LLM方針

**NTTグループの独自LLM「tsuzumi」との連携**

- NTT版LLM「tsuzumi」は軽量モデル（7Bベース）で、オンプレミスでも利用可能
- 2024年3月に商用開始
- 追加学習に大規模マシンリソースが不要で、コスト**1/20以下**に低減

**LITRON GA × tsuzumi連携（2024年4月〜）**

- 閉域環境でtsuzumiと連携した文書検索・回答生成サービスを提供
- 業務データを学習したtsuzumiで、業務に特化した日本語回答を生成

**LITRON Builder（2026年4月提供開始）**

- 企業が自ら業務特化型AIを開発可能にする開発基盤
- 自然言語でAIエージェントの開発・運用が可能
- Library機能: 他社やNTTデータが開発した業務特化型エージェントを再利用可能
- Multi Platform機能: パブリッククラウド〜オンプレミス対応
- LITRON関連ビジネス全体で2027年度末までに累計**200億円**規模の売上目標

**今後の対応**

- 「tsuzumi 2」（アップデート版）への順次対応予定
- 2025年度中にプライベートクラウド版LITRON GA・「LLM as a Service」を拡充
- AWSとの3年間の戦略的協業契約（SCA）でLITRON・tsuzumiをAWS上で提供

**独自LLM vs 外部LLMの使い分け**: NTTグループのtsuzumiを閉域・コスト重視の案件に適用しつつ、OpenAI・AWS等の外部LLMも柔軟に組み合わせるハイブリッド戦略。LITRON Builderでマルチプラットフォーム対応を実現

### 情報源

- [NTTデータ 生成AI人財育成 全社員20万人拡大](https://www.nttdata.com/global/ja/news/release/2025/102900/)
- [LITRON Builder 提供開始](https://www.nttdata.com/global/ja/news/release/2025/120901/)
- [NTTデータ 生成AIサービス](https://www.nttdata.com/jp/ja/services/generative-ai/)
- [AIガードレール解説](https://www.nttdata.com/jp/ja/trends/data-insight/2025/1203/)
- [プライベートクラウド版 拡充](https://www.nttdata.com/global/ja/news/topics/2025/090502/)
- [tsuzumi連携 LITRON GA](https://www.nttdata.com/global/ja/news/release/2024/012600/)
- [AIネイティブ開発（日経新聞）](https://www.nikkei.com/article/DGXZQOUC254OB0V21C25A2000000/)
- [AIエージェント業務変革事例](https://www.nttdata.com/jp/ja/trends/data-insight/2025/082702/)
- [ソフトウェア開発への生成AI活用トレンド](https://www.nttdata.com/jp/ja/trends/data-insight/2025/0124/)
- [営業業務変革PoC](https://www.nttdata.com/jp/ja/trends/data-insight/2025/1003/)

---

## 比較サマリー

| 項目 | 富士通 | NTTデータ |
|------|--------|----------|
| **ガイドライン** | 自社策定・一般公開済み（第1.2版） | 社内ガバナンス体制+AIガードレール |
| **社員AI利用者数** | 約46,000人（汎用AI） | 実践人財7万人（Yellowbelt修了） |
| **AI推進組織** | CTO（Mahajan氏）が統括 | GenAIビジネス推進部 |
| **AI人材育成規模** | GitHub Copilot 4,000人 + 汎用AI 46,000人 | 2027年度末に全社員20万人 |
| **独自LLM** | Takane（Cohere共同開発、日本語世界最高） | tsuzumi（NTT開発、軽量7B、閉域対応） |
| **開発自動化** | AI-Driven基盤: 全工程自動化、生産性100倍 | AIネイティブ開発: 生産性3倍、7割合理化 |
| **プラットフォーム** | Fujitsu Kozuchi（AI/Physical AI/Agent統合） | LITRON（GA/Builder/Sales/Marketing等） |
| **外部AI利用** | ChatGPTベース環境を全社展開 | OpenAI・AWS・Google Cloud等と協業 |
| **開発効率化の数値** | 累積37.5万時間削減（2026年3月末目標） | RFP対応期間6割短縮、グローバル2,000件受注 |

---

## NECへの示唆

1. **ガイドラインの公開**: 富士通は生成AIガイドラインを一般公開し、業界のリーダーシップを示している。NECも同様の透明性ある発信を検討すべき
2. **全社員AI化の波**: NTTデータの20万人計画は業界最大規模。NECも全社員のAIリテラシー向上施策を加速する必要がある
3. **独自LLM vs 外部LLM**: 両社とも独自LLM（Takane/tsuzumi）を持ちつつ外部LLMも併用するハイブリッド戦略。NECの独自AI戦略との差異を明確にすべき
4. **開発自動化競争**: 富士通の「生産性100倍」は強烈なメッセージ。NTTデータの「AIネイティブ開発」も全工程カバー。NECの開発効率化施策の競争力を点検すべき
5. **プラットフォーム化**: 両社ともAIを統合ブランド（Kozuchi/LITRON）で展開。NECのcotomiポジショニングとの比較検討が必要

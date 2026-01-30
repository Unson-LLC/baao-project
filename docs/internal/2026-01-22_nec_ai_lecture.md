# 2026年、AIの戦場で何が起きているのか

## シリコンバレーのCEOたちが見ている未来と、私たちがつかむべき機会

**作成**: 佐藤圭吾（BAAO理事）
**提出日**: 2026年1月22日
**対象**: NEC 社内研修用

---

## Executive Summary（1枚サマリー）

### 市場の変化：AIは「ツール」から「パートナー」へ

2026年、AIは根本的に変わった。指示待ちツールから、自律的に動くパートナーへ。OpenAI、Google、Microsoftの各CEOが注目するのは、**アンビエント化**（常時稼働）、**記憶機能**（長期文脈保持）、**マルチエージェント連携**（複数AIの協調）の3つだ。

同時に、規制環境も激変。EU AI Actで全世界売上高の最大7%という罰金リスクが現実化。「安全性が信頼を生む」（Sam Altman）時代に突入した。

### NECの勝ち筋：「国産AI×SI力×業界特化」でBluStellar 1兆円へ

**3つの武器**：
1. **国産LLM「cotomi」**：日本語性能と透明性で海外勢を凌駕
2. **50年のSI実績**：基幹システム連携のノウハウ
3. **業界特化AI**：金融・製造・医療・公共で先行

**BluStellar事業で2026年度から売上1兆円**を目指す体制が整った。

### 直近1ヶ月の重要トレンド（12/19〜1/22）

| 日付 | 出来事 | 影響 |
|------|--------|------|
| 12/17 | [Google Gemini 3 Flash リリース](https://blog.google/products/gemini/gemini-3-flash/) | モデル競争激化 |
| 1/7 | [ChatGPT Health発表](https://techcrunch.com/2026/01/07/openai-unveils-chatgpt-health-says-230-million-users-ask-about-health-each-week/) | ヘルスケアAI本格化 |
| 1/12 | [Apple、SiriにGemini採用発表](https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html) | 業界地図激変 |
| 1/13 | [Claude Cowork発表](https://fortune.com/2026/01/13/anthropic-claude-cowork-ai-agent-file-managing-threaten-startups/) | エージェント実用化加速 |
| 1/16 | [ChatGPT広告導入発表](https://www.cnn.com/2026/01/16/tech/chatgpt-ads-openai) | ビジネスモデル転換 |
| 1/19-23 | [Davos 2026「AI津波」発言](https://www.cnbc.com/2026/01/20/ai-impacting-labor-market-like-a-tsunami-as-layoff-fears-mount.html) | 労働市場への影響が焦点に |

---

## プロローグ：「1年前の会話を思い出してくれた」

2025年秋、あるOpenAI利用者がX（旧Twitter）にこう投稿した。

「ChatGPTが1年前の会話を思い出してくれた。鳥肌が立った」

Sam Altmanはこのポストをリポストし、こう書き添えた。「This is just the beginning（これはまだ始まりに過ぎない）」。

その数週間後、Salesforceのチーフサイエンティストが宣言する。「Ambient intelligenceは2026年の企業を変える」。

一方、日本では多くの企業がまだ「ChatGPTを使ってみました」のフェーズに留まっている。

**だが、NECは違う。**

「クライアントゼロ」——AIを顧客に売る前にまず自社で徹底的に使い倒す。この姿勢が、NECをAIネイティブカンパニーへと導く。

---

## 1. 直近1ヶ月のビッグニュース（12/19〜1/22）

### OpenAI：GPT-5.2からChatGPT広告へ

| 日付 | リリース | 概要 | ソース |
|------|---------|------|--------|
| 12/11 | **GPT-5.2** | Google Gemini 3への「Code Red」対応。長文脈・ツール利用強化 | [OpenAI](https://openai.com/index/introducing-gpt-5-2/) |
| 12/16 | **GPT Image 1.5** | 画像生成4倍高速化 | [OpenAI](https://openai.com/index/new-chatgpt-images-is-here/) |
| 12/18 | **GPT-5.2-Codex** | エージェント型コーディング特化 | [OpenAI](https://openai.com/index/introducing-gpt-5-2-codex/) |
| 1/7 | **ChatGPT Health** | 医療データ連携、2.3億人/週が健康質問 | [TechCrunch](https://techcrunch.com/2026/01/07/openai-unveils-chatgpt-health-says-230-million-users-ask-about-health-each-week/) |
| 1/16 | **広告テスト発表** | 無料版・Goプランに広告導入へ | [CNN](https://www.cnn.com/2026/01/16/tech/chatgpt-ads-openai) |

**示唆**：OpenAIはヘルスケア・広告という**収益多角化**に舵を切った。

### Google：Gemini 3でAppleを獲得

| 日付 | リリース | 概要 | ソース |
|------|---------|------|--------|
| 11/18 | **Gemini 3 Pro** | 20ベンチマーク中19でトップ | [Google Blog](https://blog.google/products/gemini/gemini-3/) |
| 12/17 | **Gemini 3 Flash** | Pro性能を高速・低コストで提供 | [Google Blog](https://blog.google/products/gemini/gemini-3-flash/) |
| 1/12 | **Apple提携** | **SiriがGemini採用**、時価総額$4兆 | [CNBC](https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html) |

**示唆**：Appleが独自AI開発を断念し、Googleに依存。**プラットフォーム戦争の新局面**。

### Anthropic：エージェント実用化の最前線

| 日付 | リリース | 概要 | ソース |
|------|---------|------|--------|
| - | **Claude Opus 4.5** | SWE-bench 80.9%（業界初80%超） | [Anthropic](https://www.anthropic.com/news) |
| 12/9 | **MCP寄贈** | Linux Foundation「Agentic AI Foundation」へ | [Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation) |
| 1/13 | **Claude Cowork** | **ファイル操作エージェント**発表 | [Fortune](https://fortune.com/2026/01/13/anthropic-claude-cowork-ai-agent-file-managing-threaten-startups/) |
| 1/12 | **Claude for Healthcare** | 医療データ連携対応 | [TechCrunch](https://techcrunch.com/2026/01/12/anthropic-announces-claude-for-healthcare-following-openais-chatgpt-health-reveal/) |

**示唆**：AnthropicはMCP標準化で**エージェント時代のインフラ**を押さえにかかっている。

### Meta：Llama 4不正問題とオープンソース撤退

| 出来事 | 詳細 | ソース |
|--------|------|--------|
| Yann LeCun退社 | 「ベンチマーク結果をごまかした」と認める | [Fast Company](https://www.fastcompany.com/91469583/yann-lecun-meta-llama-4-model-zuckerberg) |
| オープンソース撤退 | 次世代「Avocado」はクローズドモデルへ | [CNBC](https://www.cnbc.com/2025/12/09/meta-avocado-ai-strategy-issues.html) |

**示唆**：オープンソースAIの信頼性に疑問符。**ベンチマークの意味**を再考すべき。

### Davos 2026（1/19-23）：AI津波発言

| 発言者 | 発言 | ソース |
|--------|------|--------|
| IMF ゲオルギエバ | 「AIは**津波のように労働市場を直撃**。大半の国・企業は準備できていない」 | [CNBC](https://www.cnbc.com/2026/01/20/ai-impacting-labor-market-like-a-tsunami-as-layoff-fears-mount.html) |
| Anthropic CEO | トランプの中国向けチップ規制緩和は「**大きな間違い**」 | [Euronews](https://www.euronews.com/next/2026/01/20/ai-at-davos-2026-from-work-to-useful-and-safe-ai-heres-what-the-tech-leaders-have-said) |
| Yoshua Bengio | 「AIは人間のように訓練されすぎ。**AIは本当の人間じゃない**」 | [Euronews](https://www.euronews.com/next/2026/01/20/ai-at-davos-2026-from-work-to-useful-and-safe-ai-heres-what-the-tech-leaders-have-said) |

**示唆**：2026年のテーマは「**ハイプからROI**」へ。労働市場への影響が現実化。

---

## 2. アンビエントエージェント：「指示しなくても動くAI」

### 何が起きているか

- 会議中、AIが自動で要約・アクション抽出
- 会議終了と同時に、関係者にタスク自動振り分け
- 結果：**会議時間10%削減、議事録作成80%削減**

Anthropicの**Claude Cowork**（1/13発表）は、PCのファイル操作まで自律的に実行可能になった。

### NECの強み：cotomi Act

NECが2026年1月より提供開始した**[cotomi Act](https://jpn.nec.com/press/202512/20251203_01.html)**は、まさにこのトレンドに合致：
- 業務ノウハウを自動抽出
- 組織資産として蓄積・共有
- デジタル業務の自動化を実現

**提案機会**：既存顧客の基幹システムに、cotomi Actを連携させる提案が有効。

---

## 3. メモリー戦略：「記憶するAI」の競争優位

### 何が起きているか

AnthropicのDario Amodeiは断言する。「**メモリーが競争優位の源泉**だ。記憶のないAIはただのツールに過ぎない」

- ChatGPT Healthは医療データを長期記憶
- Claude for Healthcareもスマートウォッチデータを連携

### NECの強み：業界特化×長期記憶

cotomiの**日本語性能**と**業界特化学習**を組み合わせれば：
- 金融：顧客の取引履歴を記憶し、最適提案
- 製造：設備の稼働履歴を記憶し、予知保全
- 医療：患者の診療履歴を記憶し、継続ケア

**提案機会**：「御社の業界知識×長期記憶」でカスタムLLMを構築。

---

## 4. マルチエージェント：「複数AIの協調」

### 何が起きているか

- **[40%のエージェント搭載アプリ](https://www.gartner.com/en/newsroom/press-releases/2026-01-15-gartner-predicts-60-percent-of-brands-will-use-agentic-ai-to-deliver-streamlined-one-to-one-interactions-by-2028)**（2026年末予測、Gartner）
- 市場規模：2024年$5.2B → **2034年$200B**
- MCP（Model Context Protocol）がLinux Foundation傘下で標準化

### NECの強み：SI力でエージェント連携

50年のSI実績が活きる：
- 基幹システム（SAP、Oracle等）とAIエージェントの連携
- 複数AIの協調設計
- セキュリティ・ガバナンス設計

**提案機会**：「基幹システム×マルチエージェント」の統合提案。

---

## 5. AI規制とガバナンス：NECの「信頼」が武器に

### 何が起きているか

- EU AI Act：**売上高の最大7%**という罰金リスク
- Trump政権：州AI法を無効化するEO署名（12/11）
- 日本：改正個人情報保護法への対応

### NECの強み：AIガバナンスサービス

NECは2025年12月、**[AIガバナンスサービス3種](https://jpn.nec.com/press/202512/20251202_02.html)**を提供開始：
- AI利用状況の監査
- リスク評価
- 規制対応支援

**提案機会**：「AIガバナンス×cotomi導入」のパッケージ提案。

---

## 6. CES 2026：Physical AI元年

### NVIDIAの主要発表（1/7）

| 発表 | 内容 | ソース |
|------|------|--------|
| **Vera Rubin Platform** | Blackwell比10倍スループット | [NVIDIA Blog](https://blogs.nvidia.com/blog/2026-ces-special-presentation/) |
| **Alpamayo** | 自動運転向け推論モデル | [NVIDIA Blog](https://blogs.nvidia.com/blog/2026-ces-special-presentation/) |
| **Physical AI** | 仮想環境訓練→実世界展開 | [TechCrunch](https://techcrunch.com/2026/01/09/ces-2026-everything-revealed-from-nvidias-debuts-to-amds-new-chips-to-razers-ai-oddities/) |

**キーメッセージ**：「AIは訓練フェーズから**実世界応用**へ」

### NECの強み：製造業×ロボティクス

NECは「ロボティクスなどのフィジカル領域においてAIによる連携を図る」と明言。

**提案機会**：5G×エッジAI×産業用ロボットの統合提案。

---

## 7. 2026年の数字で見る変化

| 指標 | 数値 |
|------|------|
| ChatGPT週間ユーザー | **8億人** |
| Gemini API処理量 | **1兆トークン/日** |
| AI失業不安（Davos調査） | **40%**（2024年比+12pt） |
| エージェント搭載アプリ予測 | **40%**（2026年末） |
| エージェント市場成長 | $5.2B → **$200B**（2034年） |

---

## 8. NECが取るべきアクション

### BluStellar 1兆円に向けて

| 領域 | NECの強み | 提案の方向性 |
|------|----------|-------------|
| **エージェントAI** | cotomi Act | 基幹システム連携エージェント |
| **業界特化AI** | 金融/製造/医療/公共の実績 | 業界別カスタムLLM |
| **AIガバナンス** | ガバナンスサービス3種 | 規制対応パッケージ |
| **Physical AI** | ロボティクス連携 | 5G×エッジ×製造DX |

### 「クライアントゼロ」の継続

NECの強みは、**AIを顧客に売る前にまず自社で徹底的に使い倒す**こと。

- 社内業務でcotomi Actを全面活用
- 成功事例を顧客提案に転用
- 「自分たちが使っているから自信を持って勧められる」

---

## エピローグ：日本のAI競争力

シリコンバレーのCEOたちが注目しているのは「技術」から「信頼」へのシフトだ。

Sam Altmanは「安全性が信頼を生む」と語った。プライバシー、セキュリティ、ガバナンス——これらが競争優位になる。

**NECの武器**：
- **国産LLM cotomi**：透明性と日本語性能
- **50年のSI実績**：基幹システム連携
- **業界特化AI**：金融・製造・医療・公共
- **AIガバナンス**：規制対応支援

2026年は、「**AIネイティブカンパニー**」への変革の年。

グローバル競争で、日本企業が巻き返す年にできる。

---

## 参考リンク

- [OpenAI News](https://openai.com/news/)
- [Anthropic News](https://www.anthropic.com/news)
- [Google AI Blog](https://blog.google/technology/ai/)
- [NVIDIA CES 2026](https://blogs.nvidia.com/blog/2026-ces-special-presentation/)
- [NEC AI戦略](https://jpn.nec.com/ai/)
- [Davos 2026 AI Coverage](https://www.euronews.com/next/2026/01/20/ai-at-davos-2026-from-work-to-useful-and-safe-ai-heres-what-the-tech-leaders-have-said)

---

**以上**

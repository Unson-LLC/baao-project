# この半年で、AIはチャットじゃなくて業務OSになっていた

![この半年で、AIはチャットじゃなくて業務OSになっていた](docs/content/images/live-2026-06-10-01-cover.jpg)

## 今日のテーマ

この半年で起きた一番大きな変化は、AIが「チャットで質問に答える道具」から、「業務を動かす基盤」に変わり始めたことです。

以前のAI活用は、個人がChatGPTやClaudeに質問し、文章を書かせたり、調査させたり、コードを書かせたりする使い方が中心でした。

いま起きているのは、それより一段深い変化です。AIが社内データを読み、業務ツールを操作し、権限や監査の枠内で実行され、会社の既存環境に組み込まれ始めています。

つまり、AIは単体アプリではなく、業務OSになり始めています。

---

## 何が変わったのか

![チャットAIから業務OSへ：何が変わったか](docs/content/images/live-2026-06-10-02-before-after.jpg)

| 以前 | これから |
|---|---|
| チャットで質問する | 業務フローの中でAIが動く |
| 個人の便利ツール | チームの標準業務基盤 |
| 文章生成・要約が中心 | 読む、判断する、実行する、記録する |
| モデル性能が論点 | 権限、監査、接続、運用設計が論点 |
| 使う人の工夫に依存 | 組織の仕組みに組み込まれる |

---

## 業務OS化の4ステップ

![業務OS化の4ステップ](docs/content/images/live-2026-06-10-03-four-steps.jpg)

### 1. 社内データを読む

AIが、会議メモ、議事録、CRM、ドキュメント、メール、Slack/Teams、Notion、Google Drive、SharePointなどの情報を参照できるようになります。

重要なのは、AIが「インターネットで調べる」だけではなく、会社の中にある文脈を読めるようになることです。

### 2. 業務ツールを動かす

AIが、SaaSや社内システムを操作し始めます。

例:
- CRMに商談メモを登録する
- 議事録からタスクを作る
- 社内向けWebアプリを作る
- コードを修正し、テストし、レビューする
- スプレッドシートやダッシュボードを更新する

### 3. 権限と監査で守る

![AIを業務OSにする時の設計論点](docs/content/images/live-2026-06-10-04-governance.jpg)

AIが業務を動かすようになると、便利さと同時にリスクも増えます。

これから重要になるのは、「AIを使うかどうか」ではなく、以下をどう設計するかです。

- どのデータを読ませるか
- どの操作を許可するか
- どこで人間の承認を挟むか
- ログをどう残すか
- 外部接続やファイル操作をどう制限するか

### 4. 人間は判断と設計に集中する

AIが読む、まとめる、転記する、下書きする、実行する部分を担うほど、人間の役割は変わります。

人間が担うべきなのは、次のような仕事です。

- 何を目的にするかを決める
- どこまでAIに任せるかを決める
- 例外時の判断をする
- 顧客や社内の納得を作る
- 業務全体の設計を見直す

---

## 直近ニュースで見る変化

### OpenAI: AWSに入り、企業導入の壁が下がる

OpenAIのモデルとCodexがAWSで一般提供されました。

これは単に「使える場所が増えた」という話ではありません。企業にとっては、既存のAWSのセキュリティ、ガバナンス、調達、請求、運用の枠組みにAIを載せやすくなるという意味があります。

### OpenAI: Agents SDKとSitesで、AIが実行基盤に近づく

Agents SDKは、AIがファイルを読み、コマンドを実行し、コードを編集し、サンドボックス内で長いタスクを進める方向に進化しています。

ChatGPT Sitesでは、Codexに社内向けの軽量Webアプリを作らせ、ワークスペース内に閉じて共有する流れも出てきています。

### Google: Gemini 3.5は「行動するAI」へ

Gemini 3.5は、Google自身が「frontier intelligence with action」と表現しています。

ポイントは、賢い回答だけではなく、長い業務タスクやエージェント的な作業を実行する方向に寄っていることです。Google WorkspaceやGoogle Cloudに入ることで、業務の入口そのものにAIが組み込まれていきます。

### Anthropic: 高性能モデルだけでなく、計算資源が本丸になる

Claude Fable 5 / Mythos 5の発表に加えて、Anthropicは大規模な計算資源確保も進めています。

業務OSとしてAIを使うには、賢さだけでは不十分です。業務時間中に安定して使えること、長いタスクを止めずに実行できること、地域や業界ごとのデータ要件に対応できることが重要になります。

---

## 自社で考えるチェックリスト

![自社で最初にAI OS化すべき業務を探す](docs/content/images/live-2026-06-10-05-checklist.jpg)

以下の問いに答えると、自社で最初にAI OS化すべき業務が見えてきます。

### 1. 毎回、人間が同じように読んでいる情報は何か

例:
- 議事録
- 顧客メモ
- 問い合わせ
- 提案依頼
- 契約書
- 採用応募書類
- 日報

### 2. 毎回、人間が同じように転記している場所はどこか

例:
- CRM
- スプレッドシート
- タスク管理ツール
- Slack/Teams
- Notion
- 会計システム

### 3. AIに任せると怖いのはどこか

例:
- 機密データを読ませること
- 間違った判断をすること
- 勝手に外部送信すること
- 誰が承認したか分からないこと
- ログが残らないこと

### 4. 人間が最後に判断すべき箇所はどこか

AIに任せるほど、人間の判断点を明確にする必要があります。

「全部AIにやらせる」ではなく、「AIが下準備し、人間が決める」設計が現実的です。

---

## 今日の結論

AI活用の論点は、ツール選びから業務設計へ移っています。

これから重要なのは、どのAIが一番賢いかではありません。

重要なのは、どの業務を、どのデータにつなぎ、どの権限で動かし、どこに人間の承認を置くかです。

AIを業務OSとして使える会社は、人間の時間を「作業」から「判断と設計」に戻せます。

---

## 参考リンク

- OpenAI: OpenAI frontier models and Codex are now available on AWS  
  https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/
- OpenAI: The next evolution of the Agents SDK  
  https://openai.com/index/the-next-evolution-of-the-agents-sdk/
- OpenAI Help: ChatGPT Enterprise & Edu Release Notes  
  https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
- OpenAI: Introducing Lockdown Mode and Elevated Risk labels in ChatGPT  
  https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/
- Google: Gemini 3.5: frontier intelligence with action  
  https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
- Google: Introducing Nano Banana Pro  
  https://blog.google/innovation-and-ai/products/nano-banana-pro/
- Anthropic: Claude Fable 5 and Claude Mythos 5  
  https://www.anthropic.com/news/claude-fable-5-mythos-5
- Anthropic: Higher usage limits for Claude and a compute deal with SpaceX  
  https://www.anthropic.com/news/higher-limits-spacex

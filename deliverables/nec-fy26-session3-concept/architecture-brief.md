# 第3回 一枚絵ページ設計

- タイトル: MCPでつなぎ、Brainbaseで文脈化し、Agentが仕事を進める
- 役割: 分析
- 強度: 強
- 問い: Mail・Teams・Driveの記録が、どのように組織知とAgentの仕事につながるか
- 結論: MCPが業務システムとの接続を担い、BrainbaseがRAG・Graph・個人KG・Ontologyを通じて文脈を育て、Agentが人の承認下で業務へ戻す
- 情報構造: 循環＋包含
- ヒーロー: Brainbase内部の知識レイヤー
- レイアウト: 左に業務アプリ、中央左にMCP、中央にBrainbase、右にAgentを置き、上段を読み取り、下段を書き戻しの循環として示す
- パレット: 背景:#F8FAFD／面:#FFFFFF／本文:#071B50／補足:#5D6988／アクセント:#FF7A00（橙）、#04AFC4（シアン）、#6B2CBF（紫）、#1785E5（青）
- 表現上の境界:
  - Graph SSOT: 現行機能として確認済み
  - 個人KG: 実装進行中
  - Ontology: 発展構想。完成済み機能とは表現しない
  - Agentによる外部更新: 人の承認・権限・監査を通す
- 根拠:
  - 田岡氏の会話: Teams会議・チャット・メール・日報から退職予定者の知識を残す試行
  - Brainbase `graph.ssot` capability
  - Brainbase `personal-kg` capability

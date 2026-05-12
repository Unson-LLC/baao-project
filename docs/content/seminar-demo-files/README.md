# Claude Code セミナー デモ用素材

**用途**: 2026/05/12 Claude Codeセミナー（管理職向け）のライブ実演用
**配布**: セミナー後、参加者にダウンロードURL提示（任意）

---

## ファイル構成

```
seminar-demo-files/
├── README.md (このファイル)
├── minutes/                     # デモ① 議事録要約用
│   ├── 01_existing-customer-followup.md
│   ├── 02_new-customer-proposal.md
│   ├── 03_complaint-response.md
│   ├── 04_contract-renewal.md
│   └── 05_partner-initial-meeting.md
└── sales/                       # デモ② 経営会議スライド用
    └── Q4_2025_sales.csv
```

---

## デモ① で使う: minutes/ 配下5本

シナリオ:「部下5人がそれぞれ顧客面談を行い、その議事録が上がってきた。
月曜の部門会議までに、私が要点を整理する必要がある」

→ 5本を Claude Code Desktop アプリのフォルダにドラッグ
→ プロンプトで部門会議用サマリを生成させる

## デモ② で使う: sales/Q4_2025_sales.csv

シナリオ:「部下から上がってきた4半期売上データを、
来週月曜の経営会議で報告したい。3秒で状況がわかる HTML スライドが欲しい」

→ CSV を Claude Code Desktop アプリに渡す
→ プロンプトでグラフ付きHTMLを生成させる

## デモ③: メール文面 → トーン調整

事前ファイルなし。プロンプトのみで実演（状況設定をその場で口頭で渡す）。

---

## 全て匿名化・架空のデータ

- 会社名、人名、商品名、数字 すべて架空
- 公開可能（実顧客情報は含まれない）

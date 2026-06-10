# Notion Image Style

Use this prompt with Nano Banana via `-t news -p` so the script does not attach the default Sato reference image.

## Command Pattern

```bash
PROMPT='<paste custom prompt below>'
/Users/ksato/workspace/.venv/bin/python /Users/ksato/workspace/common/ops/scripts/nano_banana.py \
  -t news \
  -p "$PROMPT" \
  -o docs/content/images/live-YYYY-MM-DD-NN-slug.png \
  "<topic>" \
  "<point 1>" "<point 2>" "<point 3>" "<point 4>"
```

The script may save `.jpg` even when `-o` says `.png`; use the actual generated path.

## Custom Prompt

```text
日本語のグラフィックレコーディング風1枚図解を作成してください。

テーマ: {topic}

主要ポイント:
{points_text}

スタイル要件:
- 横長16:9
- 白または薄い生成り背景の平面図解
- 写真風ホワイトボードではなく、Notionに貼るためのデジタルなグラレコ資料
- 太い黒マーカー風の線、青マーカー、オレンジマーカー、黄色ハイライトで整理
- 中央に大きなタイトルまたは吹き出しを置き、周囲に4つ前後の論点を配置
- 手描き風の矢印、点線、囲み、簡単なアイコンで関係性を示す
- 文字はすべて読みやすい日本語。英語は使わない
- 余白を広めに取り、Notion上で読みやすくする
- セミナー資料・稽古ライブ資料として自然な完成度

人物禁止:
- 人物を描かない
- 顔、身体、スーツの登壇者、講師、キャラクター、手、写真風人物を一切入れない
- 佐藤圭吾や特定人物を再現しない
- 似顔絵、アニメ人物、ピクトグラム人物も使わない

避けるもの:
- 写真風のホワイトボード
- 会議室、壁面ボード、マーカーの実写表現
- 企業ロゴ
- 透かし
- 小さすぎて読めない文字
- 過度な装飾

出力: 人物なしの、白背景グラレコ風Notion貼り付け用画像。
```

## Reference Look

Match the direction of:

`/Users/ksato/workspace/projects/baao/docs/content/images/live-2026-06-10-05-checklist.jpg`

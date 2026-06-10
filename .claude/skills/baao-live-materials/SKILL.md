---
name: baao-live-materials
description: Create Notion-ready BAAO keiko live materials from a theme or rough idea, including audience-facing Markdown, multiple consistent Nano Banana images, prior BAAO context checks, and source links. Use when the user asks for 稽古ライブ資料, BAAO live materials, Notion貼り付け資料, 見せる資料, ライブ資料, or wants multiple images for a BAAO AI weekly/live session.
---

# BAAO Live Materials

## Workflow

1. Confirm the output is audience-facing material, not a backstage ネタ帳, unless the user explicitly asks for ネタ帳.
2. Gather BAAO context before drafting:
   - Read recent relevant files in `/Users/ksato/workspace/projects/baao/docs/content/`.
   - Search `/Users/ksato/workspace/projects/baao/meetings/minutes` and `meetings/transcripts` for live/稽古/テーマ context.
   - Use Brainbase MCP if available for project or personal context.
3. For current AI/news claims, browse and prefer official sources. Use absolute dates.
4. Create a Notion-friendly Markdown file:
   - Path: `docs/content/NOTION_YYYY-MM-DD_<SLUG>.md`
   - Use short sections, tables, checklists, and copy that can be pasted directly into Notion.
   - Put reference links at the end.
5. Generate multiple images, not one:
   - Minimum set: cover, before-after, core framework/steps, governance/design points, checklist.
   - Save to `docs/content/images/live-YYYY-MM-DD-NN-<slug>.jpg`.
   - Insert each image near the matching section in the Markdown.
6. Use Nano Banana through the existing script:
   - Script: `/Users/ksato/workspace/common/ops/scripts/nano_banana.py`
   - Python: `/Users/ksato/workspace/.venv/bin/python`
   - Do not edit `nano_banana.py`.
   - Use `-t news -p <custom prompt>` to avoid the default Sato reference image.
   - Read `references/notion-image-style.md` for the required custom prompt.
7. Validate images manually with `view_image`:
   - All images must share the same flat white-background graphic-recording style.
   - No Sato/person/face/body/hand/lecturer/photo-whiteboard.
   - Text must be reasonably readable.
   - Regenerate any image that violates these rules.
8. Remove failed trial images before finishing.
9. Report final Markdown and image paths.

## Image Set

Use these defaults unless the user specifies another structure:

| No | Filename suffix | Purpose |
|---|---|---|
| 01 | `cover` | Main thesis |
| 02 | `before-after` | What changed |
| 03 | `framework` or `steps` | Core model |
| 04 | `governance` | Permissions, approval, audit, risks |
| 05 | `checklist` | Audience self-diagnosis |

Add `06-news-map` only when current news items need their own visual.

## Markdown Shape

```markdown
# <title>

![cover](docs/content/images/live-YYYY-MM-DD-01-cover.jpg)

## 今日のテーマ
...

## 何が変わったのか
![before-after](...)
...

## <core framework>
![framework](...)
...

## 設計論点
![governance](...)
...

## 自社で考えるチェックリスト
![checklist](...)
...

## 参考リンク
- ...
```

## Quality Bar

- Write for participants seeing the material, not for the presenter preparing backstage.
- Avoid long speaker notes and internal planning language.
- Explain the center pin in 1-3 sentences near the top.
- Use BAAO language naturally: 稽古, 実務, 業務設計, 判断, 運用.
- Keep image labels concise; long explanations belong in Markdown.

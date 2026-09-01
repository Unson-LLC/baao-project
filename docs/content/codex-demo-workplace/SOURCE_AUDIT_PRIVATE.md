# 本人の判断基準・登壇用抜粋 — 内部監査メモ

このファイルは`live-folder/`へコピーしない。

## 取得状況

- 確認日：2026-07-15
- 正本：Brainbaseに蓄積された本人の判断基準（owner-visible `memory_candidates`）
- 取得方法：Brainbase読み取り専用API
- 公開用抜粋：実在顧客、人物、案件、会議本文を除いて選んだ項目のみ
- 当日デモ：Brainbaseへライブ接続せず、固定した公開用データを使用

## 採用した判断軸

| 登壇用node_id | Brainbaseで確認した主題 | 公開用の変換 |
|---|---|---|
| `pkg:persona-brain-first` | Persona Brain／相手視点 | 実在文脈を除き、顧客コミュニケーションの判断軸に限定 |
| `pkg:delegate-judgment-not-only-information` | 判断・優先順位・次アクションのAI委譲 | 監査・法務・人事・最終責任は人間確認という除外条件を保持 |
| `pkg:delegate-by-responsibility-boundary` | 責任範囲と戻し先による委任 | 架空案件のPM・CS・営業責任者へ適用 |
| `pkg:human-reduces-decision-fear` | 人間が相手の決断の恐怖を減らす | 顧客が次に動ける説明と、人間による最終送信へ変換 |
| `pkg:ai-management-as-operating-system` | 承認・証跡・記憶を含むAI駆動経営 | 実行ログとレビュー票へ適用 |

## 公開前チェック

- [x] owner以外の実在人物を含まない
- [x] 実在顧客・案件・会議名を含まない
- [x] Brainbaseにある本人情報の生本文を含まない
- [x] 認証情報を含まない
- [x] 本人の判断基準が会社ルールを上書きしない

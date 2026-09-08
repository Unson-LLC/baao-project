---
title: "2026-09-08 BAAO×グローウィン BrainBase定例会 — MCP接続検証とBrainBase本質共有"
date: 2026-09-04
project_id: "proj_baao_growin"
transcript_ref: "meetings/transcripts/2026-09-04_mana-recovery-F0BUGFV3TNG.txt"
brainbase_context_receipt: "mmctx_7f7e867317d0b7b859b5e28a303916dd"
brainbase_context_checksum: "1f85bf06259cfb5628278cb72cd3984032b7bb2f3ffd21a656a9830731a57621"
brainbase_source_refs: [{"type":"graph_entity","id":"per_01KGYC7NNS0VXADK7NP48W4VR5"},{"type":"graph_entity","id":"per_growin_kato_shintaro"},{"type":"graph_entity","id":"per_oyasumi_20260603_sano_tetsuya"},{"type":"graph_entity","id":"prj_01KGCS8BC76XRHFCHRRQ8G25MY"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiNTNjZGZjMjItZWRlZS00MzZkLWE3NDYtM2E0M2FiOTUxMTQxIn0.oGNf9IoxEpYHi7ysOqSvCv9MKb0sM8ZDqmsrUpnqyww"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiMThjMzQ0ZjAtZDk3OS00MmM5LWE1ZDYtYjdjMjc3MjEyNDUyIn0.kjnW2OjAKwpTWi5Y2c8_Xz_fJMebBWOPGz5NSlqHAng"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiNzFjNjU0Y2ItODc3YS00MGQxLWE0OGEtNzhiM2UwMmY5NGY5In0.aDAts-GYGMHPZt7_IMVubHYnFreoIz-UXGjTE2UTlgY"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiZjUxYTkyZmUtMzIzZS00N2EzLTk3M2MtMjI3YzIyYjc3MGM4In0.gBDUGhoqNsFubmuzk3DwDd2XDyoinKx4FW8RGPvmmE8"}]
brainbase_context_warnings: []
---

# 2026-09-08 BAAO×グローウィン BrainBase定例会 — MCP接続検証とBrainBase本質共有

BrainBaseをGCP上に構築した佐藤圭吾が、グローウィン・パートナーズ側の川村達見・佐野哲哉・加藤真太郎および井上希望と共にClaude CodeとBrainBaseのMCP接続を検証した回。Backlog GitリポジトリへのCloneは成功したものの、BrainBase本体へのアクセスにはGoogle Workspaceのデバイスフロー認証が必要であることが判明し、サーバー側のトークン交換エラーにより接続は未完了に終わった。グローウィン環境への接続は次回1on1で確実に通す方針となり、代替として佐藤自社のBrainBase環境でデモを行い、「判断を資産化し複利で高める」というBrainBaseの本質的概念が参加者に共有された。

## リポジトリ構造と初期データ投入の説明

会議冒頭、佐藤圭吾がBaao-projectリポジトリの現状を画面共有しながら説明した。先週1週間で実施したことは大きく二点ある。まず、グローウィン環境のBrainBaseに最初に入れるべき情報をExcelフォーマットにまとめ加藤（ウッディ）に共有し、入力してもらった内容に対して佐藤自身が確認・追記を行ったこと。次に、その情報をGCP上に構築したBrainBaseのオントロジーおよびSSOTエンティティとして落とし込んだことである。

リポジトリのREADMEには利用開始手順が記載されているが、佐藤は「情報量でいうと現状4割程度、読みやすさでいうと2割かもしれない」と正直に述べた。ただし大量の資料は別途存在しており、目的として引き継ぎ・ドキュメント化を重視するならそれらを移せば充実できると説明した。佐野哲哉から「いつの日かマニュアルを、と言って結局作られないケースが多い」という懸念が示されたのに対し、佐藤はBrainBase自体がリポジトリの内容を参照してマニュアルを生成できるため構造が揃えば解決し得ると応じた。

なぜこれを最初のユースケースに選んだかについては、45分時点で中間サマリーが出力され、会議終了後にインフォグラフィック形式のPowerPoint相当資料が出てくる体験を参加者に実感してもらうためと説明された。関係一覧・対象一覧といったオントロジーが構造化されることで、AIが「川村さんの所属組織は何か → AX推進室とはどんな部署か → その部署での役割は」という連鎖的な文脈引き出しを行えるようになり、通常のAIより高品質な出力が得られると実演を交えて説明した。

------------

## MCP接続試行と認証エラーの発生

本日の主目標はグローウィン環境のClaude CodeとBrainBaseをMCPで接続し、参加者各自が初回の価値体験をすることだった。まず川村達見がBacklog Gitのリポジトリクローンを試みた。BrainBaseはもともとSlack認証で個人を特定する仕組みだったが、グローウィンがGoogle Workspaceを利用しているためGoogle認証に切り替えた、とのことで検証が始まった。

クローン自体は成功し、コミット履歴も取得できた。しかしBrainBase本体への接続では「グローインドット.jpのGoogle WorkspaceアカウントへのデバイスフローOAuth認証が必要」というエラーが返ってきた。Claude Code側ではブラウザが自動起動しないケースがあり、PowerShellからの操作や手動でのURLコントロール+クリックを試みたが、サーバー側でのGoogleトークン交換に失敗しているという回答が出力された。AIは「原因はBrainBaseサーバー側にある。川村様の操作ミスではない」と明示した。

佐野哲哉については別途個別に接続手順をメールで送ることになった。接続を全員分今日中に完了させることは難しいと判断し、佐藤はまず加藤一人を確実につなぐことを優先し、その後展開する方針を提案した。今日の残り時間は次の話題に移ることとなった。

また接続試行の過程で、MCPの接続口はセキュリティリスクの高い領域であるという話題になった。今年MCP経由のハッキング事例が発生しており、それを受けてMCP 2.0でセキュリティ強化が図られたという話を佐藤が補足した。佐野はUSBと同じ構造的な脆弱性があると指摘し、権限設計の重要性が改めて意識された。

------------

## 自社BrainBase環境によるデモ

グローウィン環境への接続が未完了だったため、佐藤は自社（BAAO/雲孫）のBrainBase環境を使い、「AIが参照先を自ら判断して応答する」挙動を参加者に見せた。Tactiqで取得したリアルタイムの文字起こしをClaude Codeに投げ、「45分時点の内容を構造化して全員の認知を助ける形で出力してほしい」とプロンプトした。

出力結果を見ると、最初はBrainBaseを参照しない回答が返った。佐藤が「明示的に参照しろ」と指示すると、過去の決定事項・未解決タスク・参加者の役割が引き出された。参加者名のエイリアス（例：川村→上村など文字起こしの揺れ）を複数登録しておく運用の重要性も確認された。また、AIが低リスク判断と見なした質問については自律的に回答を差し戻して先に進む挙動があり、「BrainBase内の判断軸をもって自律的に進める」機能が紹介された。

このデモを通じて、会議前に過去の決定・関係者・未解決事項が自動サマリーされるユースケースの価値が参加者に具体的に伝わった。一方でBrainBaseにプロジェクトのマイルストーンや目標情報が不足しているため、出力の精度向上には今後その情報の投入が必要という課題も顕在化した。

------------

## BrainBaseの本質概念の共有

会議終盤、佐藤はBrainBaseをどう社内外に説明するかという問いに対し、先週考え抜いたフレームを共有した。「会社とは判断の積み上げである」という見立てがその出発点である。トヨタでもソニーでも、資料そのものではなく、その資料によって何を判断したかが会社の本当の資産であり、BrainBaseはその「判断」を資産化し、製本履歴として会社を運営できるようにするツールだと説明した。

組織でBrainBaseを利用するということは、代表者の判断をチーム全員に配布し、その判断の複利化を実現することを意味する。普通の社員が20点の判断しかできないところを、代表の判断軸を参照することで80〜90点の判断ができるようになる。さらにその判断をレトロスペクティブで改善し続けることで、全員の判断水準が複利で上昇していく、というのがBrainBaseの本質だと佐藤は述べた。「資料を資産化するのではなく、判断を資産化する」という言い回しが川村に刺さり、「データベースではなくBrainBase（脳の基盤）と呼ぶ理由がわかった」という反応があった。川村が「聖書はアップデートされないから解釈を変え続けるしかないが、BrainBaseはアップデートされる」と例えたことで場が盛り上がった。

## アクションアイテム

- [ ] 佐野哲哉へBrainBase MCP接続手順をメールで送付する（担当: 佐藤 圭吾）
  - 背景: 当日の接続試行で発生したGoogle Workspaceデバイスフロー認証エラーの経緯と手順をまとめ、佐野哲哉に個別メールで送付する。AIが生成したエラー回答ログをそのまま添付する形でも可とする。
- [ ] 加藤真太郎との1on1打ち合わせを設定してBrainBase接続を確実に完了させる（担当: 川村 達見）
  - 背景: グローウィン環境でのBrainBase MCP接続（Google WorkspaceデバイスフローOAuth認証を含む）を確実に通すことを目的に、佐藤・加藤の1対1の短時間打ち合わせを設定する。提案書作成ユースケースのデモも含めて対応する予定。

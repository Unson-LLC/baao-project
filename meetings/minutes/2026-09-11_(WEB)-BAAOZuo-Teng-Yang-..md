---
title: "BAAO BrainBase 議事録自動生成システム設計・アーキテクチャ確認打ち合わせ（佐藤・加藤）"
date: 2026-09-11
project_id: "proj_baao_growin"
transcript_ref: "meetings/transcripts/2026-09-11_(WEB)-BAAOZuo-Teng-Yang-..txt"
brainbase_context_receipt: "mmctx_a97d903a7c489acc0de3599a62ed1ab3"
brainbase_context_checksum: "763d971b657b2b81c2a3d7afd1fcf26ac643c85df80955785ac7d2d519676150"
brainbase_source_refs: [{"type":"graph_entity","id":"prj_01KGCS8BC76XRHFCHRRQ8G25MY"},{"type":"graph_entity","id":"per_01KGYC7NNS0VXADK7NP48W4VR5"},{"type":"graph_entity","id":"per_growin_kato_shintaro"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiZjdmZjNkMjEtMTEyMS00OTkzLWJkY2EtMjkyODgzNDg1NWIzIn0.gk-ynSMo9yS9wsJkY11H-seTz9bIeX5racvkgmUe7IQ"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiZjUxYTkyZmUtMzIzZS00N2EzLTk3M2MtMjI3YzIyYjc3MGM4In0.gBDUGhoqNsFubmuzk3DwDd2XDyoinKx4FW8RGPvmmE8"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiNTNjZGZjMjItZWRlZS00MzZkLWE3NDYtM2E0M2FiOTUxMTQxIn0.oGNf9IoxEpYHi7ysOqSvCv9MKb0sM8ZDqmsrUpnqyww"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiMThjMzQ0ZjAtZDk3OS00MmM5LWE1ZDYtYjdjMjc3MjEyNDUyIn0.kjnW2OjAKwpTWi5Y2c8_Xz_fJMebBWOPGz5NSlqHAng"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiODAwNGQ1MTQtNGM5Yi00MmU4LWE5OGItZGQ3NzczYjVmMjI4In0.C83nNdBrsbJ9vnE-PVZtyfM3ooooJ27yPEZglbbdPDE"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiMWI1NGJiOWMtMzU0ZS00Nzc1LTg4MjItYmQ3ZTU2YmZjMTM4In0.bLYRlwCLcWQXDXQs5TgqYauC5YXzUBIKzvDBxaohlQ4"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiYWYzNTkyODctYzAxZi00MWYxLWE4MjEtNjQ3ODljNzI3Y2FiIn0.RY_rQIIFvMzS5JiX7okQhGkGeqxPktrdmY6tQGpPOEU"},{"type":"canonical_task","id":"ct1.eyJ2IjoiMS4wLjAiLCJzIjoicG9zdGdyZXMiLCJyIjoiNmI3Yzc5NDUtOWJjZC00ZjRjLTkzMGEtOWQxZDJlNGNjMDk0In0.4Zk2Q7yk2J9unQvfWrNq_ovTAuQGsdlKGcpU5vtOsS8"}]
brainbase_context_warnings: []
---

# BAAO BrainBase 議事録自動生成システム設計・アーキテクチャ確認打ち合わせ（佐藤・加藤）

本打ち合わせは、グローウィン・パートナーズ社向けにBrainBaseを活用した会議議事録自動生成システムを来週の次回定例（川村氏参加予定）までに動作可能な状態にすることを目標として実施された。佐藤圭吾が事前に構築した45分チェックポイント出力と会議終了後のインフォグラフィック生成の完成イメージをデモし、実現方式（Google Meet API経由のトランスクリプト取得、Cloud RunによるMeeting Orchestrator）を解説した。バックエンド処理をCloud Run側に持たせる案とClaude Codeプラグイン側で完結させる案を比較した結果、セキュリティ・権限設計の複雑さを避け、まず加藤が一人でプラグインから動かせる状態を実証する方針で合意した。BrainBase内のデータ境界（SSOT＝資料・参照情報、KG＝判断・決定）と、BacklogはBrainBaseの参照先リンクとして管理するという設計方針も確認された。加藤が作成したシステム全体像の図を今後の共通認識資料として活用することも合意した。

## 会議開始の目的確認と事前準備の共有

加藤から議題を整理し「来週の定例で動く状態にすること」をゴールとして確認した。具体的には、①BrainBaseに入れる情報の設計、②上物アプリ（まな）をどう通すかの2点を本打ち合わせで詰めることを双方が合意した。佐藤はこのゴール達成のため、事前に検証を重ねており、完成イメージのデモからセッションを開始した。

------------

## 45分版・終了後版のインフォグラフィック出力デモ

佐藤が画面共有で、前回会議（グローウィン向けSNS運用案件の会議を想定）の45分時点に生成されるチェックポイント資料と、会議終了後に生成される5ページ構成のインフォグラフィックを提示した。45分版はその時点の到達点・現在課題・対応案・残り時間で決めること3点を構造化して表示するものであり、終了後版は会議サマリー・決定事項・未解決点・次回定例に向けた施策確認を含む。インフォグラフィックの画像パートはClaude Codeのみでは生成できないため、GCP上のGemini APIを経由して画像生成する方式で実現したと佐藤が説明した。API費用はGemini画像生成1回あたり6円前後との見込みが共有され、加藤はこれを了承した。出力の再現性を担保するプロンプトも合わせて準備済みであることが示された。

------------

## システム全体アーキテクチャとCloud Run（Meeting Orchestrator）の役割説明

佐藤は会議開始からインフォグラフィック送付までの自動フローを図示しながら解説した。Claude Codeから「会議開始」を宣言するとGCP上のCloud Runに起動指示が飛び、Cloud Run上のMeeting Orchestrator（「ちっちゃいおじさん」という比喩で概念を整理）がGoogleカレンダーとBrainBaseから今回の会議情報・前回議事録・宿題を並行して取得し、開始ブリーフを生成する。加藤は「オーケストレーターはCloud Runという舞台の中にいる役割を持ったおじさん」という理解を確認し、以後の会話で共通言語として機能した。43分タイマーはOrchestrator内で計測され、Google Meet APIを通じて会議中のトランスクリプトを取得する。会議終了イベントを捕捉した後、完全トランスクリプトを元に終了後の5ページ資料を生成し、Googleカレンダーの参加者全員にGmailで配信するエンドツーエンドの流れが示された。

Cloud RunはGCP内のサービスのひとつであり、現時点ではまだ構築されていない（これから実装）との確認も取れた。Google Meet API経由でのトランスクリプト取得は技術的な実現可能性は確認済みだが、権限・認証周りの動作検証が必要な段階にある。

------------

## プラグイン方式 vs サーバー側処理方式の比較と方針決定

GoogleドライブやGmailとの接続について2つのアーキテクチャ案が比較された。Claude Codeプラグイン方式は権限スコープが利用者単位で明確になる一方、利用者それぞれがプラグイン設定を行う手間が生じる。サーバー側（Cloud Run）で一括処理する方式は会議終了後に完全自動でメール配信まで完結する利便性があるが、サービスアカウントへのアクセス権付与・送信元の名義・格納先フォルダの設定など運用ルール・セキュリティポリシーの整備が必要であり、次回定例までの期間では対応が難しい。

加藤から「まず一人（自分）が動かせることを見せられれば十分」という判断が示され、プラグイン方式を採用することで合意した。この判断に連動して、Cloud Run（Meeting Orchestrator）の役割はGoogle Meet APIの呼び出し部分のみに絞り、カレンダー・BrainBaseの参照はClaude Codeから直接行うアーキテクチャに変更された。佐藤は「作るものはほぼスキルファイルになる」と述べ、Cloud Runの出番が大幅に減ったことを確認した。場合によってはCloud Run自体を使わずGCP上のAPIを直接叩くだけで完結する可能性も言及された。

------------

## BrainBaseへのデータ格納方針：SSOTとKGの境界設計

加藤から「議事録生成に必要な情報（前回議事録・Backlogタスクの進捗）をBrainBaseにどう格納するか」という問いが出た。佐藤はまずBacklogの課題管理についての方針を示し、「課題はBacklogを正本とし、BrainBaseにはそのBacklogプロジェクトへのリンク（場所情報）のみを置く」という境界設計を説明した。課題の根拠情報まですべてをBrainBaseに移植しようとすると範囲が際限なく広がるため、BrainBaseは「どこに何があるかを管理する場所」として機能させる方針であることが明確化された。加藤はこの方針を了解し、BrainBaseへの情報登録はまずリンク・場所情報から始めることで合意した。佐藤からBacklogやGoogleドライブの「入れ方例」をGitリポジトリに追加して共有する約束がなされた。

また、SSOTとKGの概念的な整理も行われた。SSOTは「資料・参照情報の格納場所」、KGは「判断・決定の格納場所」という日本語での説明が佐藤から示され、加藤の理解が深まった。個人KGは個人の情報インボックスとして機能し、そこから組織KGや組織SSOTへ昇格させていくという構造も確認された。組織SSOTにおいて個人SSOTは不要であり、個人が組織に属している場合は組織の共有ドライブ相当のKGに直接投入する設計が適切との説明がなされた。

------------

## 加藤作成のシステム全体像図のレビューと今後の活用

加藤が事前に作成していたBrainBaseシステム全体像（4枚構成）を佐藤がレビューした。SlackとまなのUI層・Cloudflare上のシステム・BrainBaseの参照構造という大まかな方向性は正確と評価された。個人版BrainBaseのSSOT/KG図については合っているが、組織版の詳細情報はまだ加藤に渡せていないため、組織版の図が粗くなっている点を佐藤が指摘した（うちの会社固有情報が混在しているため、グローウィン向けに切り分け中）。土日中に組織版の情報を提供できる見込みとなった。今後の会議でこの図を共通認識のベースとして使っていくことが合意され、図への追記事項として①まなのシステム内部構成（細粒度の図）②SSOTおよびKGが格納するエンティティの具体例③3月までのマイルストーン概要の3点が挙げられた。まなのHTMLを加藤が送付し、佐藤が内容を確認して修正を加える形で対応することになった。

------------

## コスト認識の共有と次回の段取り

サーバー側処理が一部残る場合、会議ごとに数円程度の実行コストが発生する可能性がある旨を佐藤が補足し、加藤が川村氏（次回定例の参加者）に事前に共有しておくことを約束した。佐藤は本日夜まで作業が難しい状況のため、土日にCloud Run周りの構築・Google Meet APIのテスト手順・Backlog/GoogleドライブのBrainBase登録例をGitにまとめ、月曜日に加藤が確認する流れとなった。加藤は受け取り次第すぐに対応するとし、テスト（Googleカレンダーに会議を立て、加藤が自分でMeet APIを叩いてトランスクリプトが取れるか確認）も迅速に実施することを確認した。セッション終了間際に、加藤が作成したBrainBase全体像資料をメールで佐藤に送付し、受領確認を取って打ち合わせが締めくくられた。

## アクションアイテム

- [ ] Google Meet APIのテスト手順をGitリポジトリに追加し加藤に共有する（担当: 佐藤 圭吾 / 期限: 2026-09-14）
  - 背景: 加藤がClaude CodeからGoogle Meet APIを叩いて会議中のトランスクリプトを取得できるか確認するためのテスト手順書をGitに追加する。テスト内容はGoogleカレンダーに会議を1件立て、加藤が参加してClaude Codeから会議中の状況を取得できるかを確認するもの。
- [ ] BacklogおよびGoogleドライブのBrainBase登録例（入れ方例）をGitに追加する（担当: 佐藤 圭吾 / 期限: 2026-09-14）
  - 背景: BrainBaseへのデータ登録において、BacklogプロジェクトのリンクやGoogleドライブのパスをどのように登録するか、命名規則と形式の例をGitリポジトリに追加する。これを参照することで加藤が以降の情報登録を自律的に実施できる状態にする。
- [ ] グローウィン向け組織版BrainBase情報（リポジトリ）を切り分けて共有する（担当: 佐藤 圭吾 / 期限: 2026-09-14）
  - 背景: 現在のリポジトリには雲孫社固有情報が混在しているため、グローウィン・パートナーズ向けに提供可能な形に切り分けて共有する。これにより加藤が組織版SSOTのエンティティ図を作成できるようになる。
- [ ] Google Meet APIのテストを実施しトランスクリプト取得を確認する（担当: 加藤 真太郎）
  - 背景: 佐藤からGitで共有されるテスト手順に従い、加藤がClaude CodeからGoogle Meet APIを叩いて会議中のトランスクリプトが取得できるかを自身の環境で検証する。成功した場合は佐藤に連絡し次フェーズ（Cloud Run含む全体構築）に進む。
- [ ] まなのシステム構成HTMLを佐藤に送付する（担当: 加藤 真太郎）
  - 背景: 佐藤がまなのシステム内部構成（細粒度）の図を確認・修正できるよう、加藤が作成した全体像図のHTMLを佐藤に送付する。
- [ ] 会議ごとのAPI実行コスト（数円程度）について川村氏に事前共有する（担当: 加藤 真太郎）
  - 背景: サーバー側処理が残る場合に会議ごとに数円の実行コストが発生しうる点を、次回定例（川村氏参加）の前に加藤から川村氏へ頭出しする。
- [ ] BrainBase全体像図（4枚）を佐藤にメールで送付する（担当: 加藤 真太郎）
  - 背景: 加藤が作成したBrainBaseシステム全体像資料（SlackとまなのUI層・Cloudflare構成・BrainBase構造・KG/SSOTの関係を含む4枚）を佐藤に送付し、内容確認・修正フィードバックを受ける。（会議中に実施済み）

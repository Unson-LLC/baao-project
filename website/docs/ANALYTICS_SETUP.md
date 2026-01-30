# アナリティクス・SEO設定ガイド

このドキュメントでは、Google Analytics、Google Search Console、セキュリティヘッダーの設定方法を説明します。

## 1. Google Analytics（GA4）設定

### メリット
- 詳細なユーザー行動分析（ページビュー、滞在時間、離脱率）
- リアルタイムアクセス状況
- カスタムイベント追跡（フォーム送信、ボタンクリックなど）
- ユーザー属性分析（年齢、性別、地域、デバイス）
- 目標設定とコンバージョン追跡
- 広告効果測定

### 設定手順

#### Step 1: Google Analyticsアカウント作成
1. [Google Analytics](https://analytics.google.com/)にアクセス
2. 「測定を開始」をクリック
3. アカウント名を入力（例: BAAO）
4. プロパティ名を入力（例: BAAO道場Webサイト）
5. レポートのタイムゾーンを「日本」に設定
6. 通貨を「日本円（JPY）」に設定

#### Step 2: データストリームの作成
1. プラットフォームで「ウェブ」を選択
2. ウェブサイトURL: `https://baao-dojo.com`
3. ストリーム名: `BAAO道場メインサイト`
4. 「ストリームを作成」をクリック

#### Step 3: 測定IDの取得
- 「G-」で始まる測定ID（例: `G-XXXXXXXXXX`）をコピー

#### Step 4: 環境変数に設定

**ローカル環境（.env.local）:**
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Vercel環境:**
1. Vercel Dashboard → Project Settings → Environment Variables
2. Key: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
3. Value: `G-XXXXXXXXXX`
4. Environment: Production, Preview, Development すべて選択
5. 「Save」をクリック

#### Step 5: デプロイ
```bash
git add .
git commit -m "Add Google Analytics setup"
git push origin main
```

### 動作確認
1. サイトにアクセス
2. Google Analytics のリアルタイムレポートを確認
3. 自分のアクセスが表示されればOK

---

## 2. Google Search Console設定

### メリット
- 検索キーワードとクリック数の確認
- インデックス状況の確認
- クロールエラーの検出
- モバイルユーザビリティのチェック
- サイトマップの送信
- 構造化データのエラー検出

### 設定手順

#### Step 1: Search Consoleにプロパティを追加
1. [Google Search Console](https://search.google.com/search-console/)にアクセス
2. 「プロパティを追加」をクリック
3. URLプレフィックスを選択
4. URL: `https://baao-dojo.com` を入力

#### Step 2: 所有権の確認
1. 「HTMLタグ」を選択
2. `content="xxxxxxxxxxxxxxxxxxxx"` の値をコピー

#### Step 3: 環境変数に設定

**ローカル環境（.env.local）:**
```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxx
```

**Vercel環境:**
1. Vercel Dashboard → Project Settings → Environment Variables
2. Key: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
3. Value: `xxxxxxxxxxxxxxxxxxxx`
4. 「Save」をクリック

#### Step 4: デプロイして確認
```bash
git push origin main
```

デプロイ後、Search Consoleで「確認」ボタンをクリック

#### Step 5: サイトマップ送信
1. Search Console → サイトマップ
2. 新しいサイトマップのURL: `https://baao-dojo.com/sitemap.xml`
3. 「送信」をクリック

---

## 3. セキュリティヘッダー

### 設定済みのヘッダー

#### ✅ Strict-Transport-Security (HSTS)
```
max-age=63072000; includeSubDomains; preload
```
**効果**: HTTPSを強制、中間者攻撃を防止

#### ✅ X-Frame-Options
```
SAMEORIGIN
```
**効果**: クリックジャッキング攻撃を防止

#### ✅ X-Content-Type-Options
```
nosniff
```
**効果**: MIMEタイプスニッフィング攻撃を防止

#### ✅ X-XSS-Protection
```
1; mode=block
```
**効果**: XSS攻撃を検出・ブロック

#### ✅ Referrer-Policy
```
origin-when-cross-origin
```
**効果**: リファラー情報の適切な制御

#### ✅ Permissions-Policy
```
camera=(), microphone=(), geolocation=()
```
**効果**: 不要な機能へのアクセスを制限

#### ✅ Content-Security-Policy (CSP)
- スクリプト実行を信頼できるソースに制限
- 外部リソースの読み込みを制御
- インジェクション攻撃を防止

### セキュリティスコアの確認

以下のツールでセキュリティ評価を確認できます：

1. **Mozilla Observatory**
   - https://observatory.mozilla.org/
   - 目標: A+ または A

2. **Security Headers**
   - https://securityheaders.com/
   - 目標: A+ または A

3. **SSL Labs**
   - https://www.ssllabs.com/ssltest/
   - 目標: A+ または A

---

## トラブルシューティング

### Google Analyticsでデータが表示されない
- 環境変数が正しく設定されているか確認
- ブラウザの開発者ツールでネットワークタブを確認
- 広告ブロッカーを無効化

### Search Consoleの確認が失敗する
- メタタグが正しくHTMLに出力されているか確認
- デプロイが完了しているか確認
- キャッシュをクリアして再試行

### CSPエラーが発生する
- ブラウザのコンソールでエラー内容を確認
- 必要なドメインをCSPに追加
- `next.config.js`を編集して再デプロイ

---

## まとめ

これらの設定により、以下が実現されます：

✅ **アクセス解析**: ユーザー行動の詳細な把握
✅ **SEO改善**: 検索エンジン最適化の継続的な改善
✅ **セキュリティ強化**: 各種攻撃からサイトを保護
✅ **パフォーマンス監視**: サイトの健全性を維持

定期的にアナリティクスを確認し、データドリブンな改善を行いましょう。

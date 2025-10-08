# Picto Portfolio

Figmaデザインから実装した、個人ポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Work Sans (Google Fonts)

## セクション構成

1. **Header** - ナビゲーションメニュー
2. **Hero** - メインビジュアルと自己紹介
3. **Stats** - 実績統計（経験年数、プロジェクト数、クライアント数）
4. **About** - 自己紹介詳細
5. **Work Process** - 作業プロセス（4ステップ）
6. **Portfolio** - プロジェクト一覧（6件）
7. **Call to Action** - プロジェクト相談の呼びかけ
8. **Blog** - ブログ記事一覧（4件）
9. **What I do?** - サービス内容（3つ）
10. **Happy Clients** - クライアントロゴ（6社）
11. **Testimonial** - お客様の声
12. **Contact** - お問い合わせフォーム
13. **Footer** - フッター

## デザインシステム

### カラーパレット
- **Primary**: #A53DFF（紫）
- **Gray**: 50〜900の階層

### タイポグラフィ
- フォントファミリー: Work Sans
- ウェイト: 400, 500, 600

## 開発方法

### 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

### ビルド

\`\`\`bash
npm run build
\`\`\`

### プロダクションサーバーの起動

\`\`\`bash
npm start
\`\`\`

## プロジェクト構造

\`\`\`
picto-portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── About.tsx
│   │   ├── WorkProcess.tsx
│   │   ├── Portfolio.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Blog.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── HappyClients.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
\`\`\`

## 注意事項

- 画像はプレースホルダーになっています。実際の画像に置き換えてください。
- フォームの送信処理は実装されていません。必要に応じてバックエンド連携を追加してください。
- レスポンシブ対応は部分的です。モバイル対応が必要な場合は追加のブレークポイントを設定してください。

## ライセンス

このプロジェクトは学習・デモ目的で作成されています。

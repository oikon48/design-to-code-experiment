# コードベース構造

## プロジェクト全体の構造

```
design-to-code-experiment/
├── .claude/              # Claude設定
├── .git/                 # Gitリポジトリ
├── .serena/              # Serenaの設定とキャッシュ
├── claude+mcp/           # Claude Code + MCP実装
├── codex+mcp/            # Codex + MCP実装
├── kombai2/              # Kombai実装
├── playground/           # 実験用ディレクトリ
├── .gitignore
├── .mcp.json             # MCP設定
└── README.md             # プロジェクト説明
```

---

## Claude Code + MCP実装 (`claude+mcp/picto-portfolio`)

```
claude+mcp/
├── .next/                # Next.jsビルド出力
├── app/                  # App Router
│   ├── components/       # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── WorkProcess.tsx
│   │   ├── Portfolio.tsx
│   │   ├── WhatIDo.tsx
│   │   ├── Blog.tsx
│   │   ├── Testimonial.tsx
│   │   ├── HappyClients.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # ホームページ
│   └── globals.css       # グローバルスタイル
├── public/               # 静的アセット
├── node_modules/         # 依存関係
├── .eslintrc.json        # ESLint設定
├── next.config.ts        # Next.js設定
├── tailwind.config.ts    # Tailwind CSS設定
├── postcss.config.mjs    # PostCSS設定
├── tsconfig.json         # TypeScript設定
├── package.json
└── README.md
```

### コンポーネント構成
- **レイアウトコンポーネント**: Header, Footer
- **セクションコンポーネント**: Hero, About, Stats, WorkProcess, Portfolio, WhatIDo, Blog, Testimonial, HappyClients, CallToAction, Contact
- 各コンポーネントは単一ファイルで完結

---

## Codex + MCP実装 (`codex+mcp`)

```
codex+mcp/
├── .next/                # Next.jsビルド出力
├── app/                  # App Router
│   ├── components/       # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── BlogSection.tsx
│   │   ├── TestimonialSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CTASection.tsx
│   │   └── Footer.tsx
│   ├── content.ts        # コンテンツデータ
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # ホームページ
│   └── globals.css       # グローバルスタイル
├── public/               # 静的アセット
│   └── images/           # 画像ファイル
├── node_modules/         # 依存関係
├── next.config.mjs       # Next.js設定
├── postcss.config.mjs    # PostCSS設定
├── tsconfig.json         # TypeScript設定
├── package.json
└── index.html
```

### 特徴
- コンテンツデータを`content.ts`で一元管理
- CSS Modulesを使用したスタイリング
- clsxを使った条件付きクラス名管理

---

## Kombai実装 (`kombai2`)

```
kombai2/
├── src/                  # ソースコード
│   ├── components/       # Reactコンポーネント
│   │   ├── sections/     # セクションコンポーネント
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── WorkProcessSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── ClientsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── CallToActionSection.tsx
│   │   ├── cards/        # カードコンポーネント
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProcessCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── BlogCard.tsx
│   │   │   └── ContactInfoCard.tsx
│   │   ├── forms/        # フォームコンポーネント
│   │   │   └── ContactForm.tsx
│   │   ├── common/       # 共通コンポーネント
│   │   │   └── PaginationDots.tsx
│   │   ├── icons/        # アイコンコンポーネント
│   │   │   ├── ArrowRightIcon.tsx
│   │   │   ├── LaunchIcon.tsx
│   │   │   ├── DesignIcon.tsx
│   │   │   ├── DownloadIcon.tsx
│   │   │   ├── AnalyzeIcon.tsx
│   │   │   ├── LocationIcon.tsx
│   │   │   ├── ResearchIcon.tsx
│   │   │   └── PaginationDotsIcon.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/            # ページコンポーネント
│   │   └── PortfolioPage.tsx
│   ├── theme/            # MUIテーマ設定
│   │   └── theme.ts
│   ├── data/             # モックデータ
│   │   └── portfolioMockData.ts
│   ├── App.portfolio.tsx # メインアプリ
│   ├── index.css         # グローバルスタイル
│   └── vite-env.d.ts     # Vite型定義
├── public/               # 静的アセット
│   └── assets/
│       └── images/       # 画像ファイル
├── node_modules/         # 依存関係
├── main.tsx              # エントリーポイント
├── index.html            # HTMLテンプレート
├── KombaiWrapper.tsx     # Kombaiラッパー
├── eslint.config.js      # ESLint設定
├── vite.config.ts        # Vite設定
├── tsconfig.json         # TypeScript設定（ルート）
├── tsconfig.app.json     # アプリ用TypeScript設定
├── tsconfig.node.json    # Node用TypeScript設定
├── package.json
└── README.md
```

### 特徴
- より詳細なディレクトリ構造（sections, cards, forms, common, icons）
- MUIテーマシステムを使用
- Viteによる高速なビルド
- Redux Toolkitで状態管理（設定済み）
- React Routerでルーティング

---

## 共通の構造パターン

### コンポーネントの配置
- **Claude+mcp**: フラットな構造（`app/components/`直下）
- **Codex+mcp**: フラットな構造 + コンテンツデータ分離
- **Kombai2**: 階層的な構造（sections, cards, forms, common, icons）

### スタイルの配置
- **Claude+mcp**: Tailwind CSS（インライン）
- **Codex+mcp**: CSS Modules（globals.css）
- **Kombai2**: MUI sx props + テーマファイル

### アセットの配置
- 全ての実装で`public/`ディレクトリを使用
- 画像は`public/assets/images/`または`public/images/`に配置

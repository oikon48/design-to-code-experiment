# コードスタイルと規約

## 全体的な規約

### TypeScript設定
- **Strict mode**: 有効
- **Target**: ES2017 (claude+mcp), ES2020 (kombai2)
- **Module**: ESNext
- **JSX**: preserve (Next.js) / react-jsx (Vite)

### 命名規則
- **コンポーネント**: PascalCase (例: `Header.tsx`, `HeroSection.tsx`)
- **ファイル名**: PascalCase for components
- **関数**: camelCase
- **変数**: camelCase

---

## Claude Code + MCP実装のスタイル

### ディレクティブ
- `"use client"` を使用（クライアントコンポーネント）

### スタイリング
- Tailwind CSSクラスを使用
- カスタムカラーパレット定義（tailwind.config.ts）:
  - primary: `#A53DFF` (500), `#210C33` (900)
  - gray: 50~900の範囲

### コンポーネント構造
```typescript
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="...">
      {/* JSX */}
    </header>
  );
}
```

### ESLint設定
- `next/core-web-vitals` を継承

---

## Codex + MCP実装のスタイル

### ディレクティブ
- `'use client'` を使用（クライアントコンポーネント）

### スタイリング
- CSS Modules (globals.css)
- clsxライブラリを使用して条件付きクラス名を管理

### コンポーネント構造
```typescript
'use client';

import { useState } from 'react';
import clsx from 'clsx';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className={clsx('site-header', isOpen && 'open')}>
      {/* JSX */}
    </header>
  );
}
```

### 特徴
- 状態管理にuseStateを使用
- アクセシビリティ属性（aria-*）の使用
- セマンティックなHTML

---

## Kombai実装のスタイル

### ディレクティブ
- クライアントディレクティブ不要（Vite使用）

### スタイリング
- Material-UI (MUI) コンポーネント使用
- sx propsでスタイル定義
- テーマシステム使用

### コンポーネント構造
```typescript
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
        {/* JSX */}
      </Toolbar>
    </AppBar>
  );
}
```

### ESLint設定
- typescript-eslint使用
- react-hooks/recommended
- react-refresh プラグイン

### 特徴
- MUIコンポーネントの広範な使用
- レスポンシブデザイン（sx propsでブレークポイント）
- Redux Toolkitで状態管理（必要に応じて）

---

## 共通のベストプラクティス

1. **関数コンポーネント**: クラスコンポーネントではなく関数コンポーネントを使用
2. **TypeScript**: 型定義を適切に使用
3. **デフォルトエクスポート**: コンポーネントはデフォルトエクスポート
4. **Props型定義**: インターフェースまたは型エイリアスで定義
5. **DRY原則**: 繰り返しを避け、再利用可能なコンポーネントを作成
6. **アクセシビリティ**: セマンティックHTML、ARIA属性の適切な使用

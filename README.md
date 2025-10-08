# Design to Code Experiment

Figmaデザインをコードに変換する実験プロジェクトです。複数のツールとアプローチを使用して、デザインからの実装を比較検証しています。

## 概要

このプロジェクトでは、Figmaのデザインノードを取得し、以下の3つの異なるツールを使用して実装を行っています：

- **Claude Code + MCP** - ClaudeとModel Context Protocolを活用した実装
- **Codex + MCP** - CodexとMCPを組み合わせた実装
- **Kombai** - Kombaiを使用した実装（準備中）

## プロジェクト構成

```
design-to-code-experiment/
├── claude+mcp/          # Claude Code + MCP による実装
│   └── picto-portfolio/ # Next.js + React + Tailwind CSS
├── codex+mcp/           # Codex + MCP による実装
│   └── app/             # Next.js + React
├── kombai/              # Kombai による実装（準備中）
└── codex+mcp-bk/        # バックアップ
```

## 各実装について

### Claude Code + MCP (`claude+mcp/picto-portfolio`)

- **フレームワーク**: Next.js 15.1.4
- **UI**: React 19
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **主な機能**:
  - Hero セクション
  - Portfolio セクション
  - Blog セクション
  - Stats & Testimonials
  - Contact フォーム
  - その他複数のコンポーネント

#### 起動方法

```bash
cd claude+mcp/picto-portfolio
npm install
npm run dev
```

### Codex + MCP (`codex+mcp`)

- **フレームワーク**: Next.js 14.1.4
- **UI**: React 18
- **言語**: TypeScript
- **主な機能**:
  - Header
  - Hero セクション
  - About セクション
  - Services セクション
  - Process セクション

#### 起動方法

```bash
cd codex+mcp
npm install
npm run dev
```

### Kombai (`kombai`)

準備中

## 実験の目的

1. **精度の比較**: 各ツールがFigmaデザインをどの程度正確にコード化できるか
2. **効率性の評価**: 実装にかかる時間とプロセスの違い
3. **コード品質**: 生成されるコードの可読性、保守性、ベストプラクティスへの準拠
4. **ワークフローの検証**: 各ツールの開発ワークフローの使いやすさ

## 技術スタック

- **フロントエンド**: React, Next.js
- **スタイリング**: Tailwind CSS, CSS Modules
- **言語**: TypeScript
- **パッケージマネージャー**: npm

## ライセンス

実験用プロジェクトのため、私的利用のみを想定しています。

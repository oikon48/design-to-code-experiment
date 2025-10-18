# プロジェクト概要

## プロジェクトの目的

このプロジェクトは、Figmaデザインをコードに変換する実験的なプロジェクトです。複数のツールとアプローチを使用して実装を比較・検証することを目的としています。

## 実験の目的

1. **精度の比較**: 各ツールがFigmaデザインをコードに変換する際の精度
2. **効率性の評価**: 実装にかかる時間とプロセスの違い
3. **コード品質**: 生成されたコードの可読性、保守性、ベストプラクティスへの準拠
4. **ワークフローの検証**: 各ツールの開発ワークフローの使いやすさ

## 3つの実装

### 1. Claude Code + MCP (`claude+mcp/picto-portfolio`)
- AIとModel Context Protocolを活用した実装
- Next.js 15.1.4 + React 19 + Tailwind CSSを使用

### 2. Codex + MCP (`codex+mcp`)
- CodexとMCPを組み合わせた実装
- Next.js 14.2.33 + React 18 + CSS Modulesを使用

### 3. Kombai (`kombai2`)
- Kombaiツールを使用した実装
- Vite 6.2.0 + React 19 + Material-UI (MUI) 7.3.4を使用

## プロジェクト構成

```
design-to-code-experiment/
├── claude+mcp/          # Claude Code + MCP実装
│   └── picto-portfolio/ # Next.js + React + Tailwind CSS
├── codex+mcp/           # Codex + MCP実装
│   └── app/             # Next.js + React
└── kombai2/             # Kombai実装
    └── src/             # Vite + React + MUI
```

## 主な機能

実装されているコンポーネント：
- ヘッダー/ナビゲーション
- ヒーローセクション
- Aboutセクション
- サービスセクション
- ポートフォリオセクション
- ブログセクション
- プロセスセクション
- お客様の声セクション
- 連絡先フォーム
- フッター

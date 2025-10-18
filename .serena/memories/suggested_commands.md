# 推奨コマンド

## Claude Code + MCP (`claude+mcp/picto-portfolio`)

### セットアップ
```bash
cd claude+mcp/picto-portfolio
npm install
```

### 開発
```bash
npm run dev          # 開発サーバー起動（通常 http://localhost:3000）
```

### ビルド
```bash
npm run build        # プロダクションビルド
npm start            # プロダクションサーバー起動
```

### コード品質
```bash
npm run lint         # ESLintでコードをチェック
```

---

## Codex + MCP (`codex+mcp`)

### セットアップ
```bash
cd codex+mcp
npm install
```

### 開発
```bash
npm run dev          # 開発サーバー起動（通常 http://localhost:3000）
```

### ビルド
```bash
npm run build        # プロダクションビルド
npm start            # プロダクションサーバー起動
```

### コード品質
```bash
npm run lint         # ESLintでコードをチェック
```

---

## Kombai (`kombai2`)

### セットアップ
```bash
cd kombai2
npm install
```

### 開発
```bash
npm run dev          # Vite開発サーバー起動（通常 http://localhost:5173）
```

### ビルド
```bash
npm run build        # プロダクションビルド
npm run preview      # ビルド結果をプレビュー
```

### コード品質
```bash
npm run lint         # ESLintでコードをチェック
```

---

## Git コマンド

### 基本操作
```bash
git status           # 変更状況を確認
git diff             # 変更内容の差分を表示
git log              # コミット履歴を表示
git log --oneline    # コミット履歴を1行で表示
```

### ブランチ操作
```bash
git branch           # ブランチ一覧
git checkout -b <branch-name>  # 新しいブランチを作成して切り替え
git checkout <branch-name>     # ブランチを切り替え
```

### コミット操作
```bash
git add .            # 全ての変更をステージング
git add <file>       # 特定のファイルをステージング
git commit -m "message"  # コミット
```

### リモート操作
```bash
git pull             # リモートの変更を取得
git push             # ローカルの変更をプッシュ
git push -u origin <branch-name>  # 新しいブランチをプッシュ
```

---

## macOS (Darwin) システムコマンド

### ファイル操作
```bash
ls                   # ディレクトリ内容を表示
ls -la               # 詳細表示（隠しファイル含む）
cd <directory>       # ディレクトリ移動
pwd                  # 現在のディレクトリを表示
mkdir <directory>    # ディレクトリ作成
rm <file>            # ファイル削除
rm -rf <directory>   # ディレクトリ削除（注意）
```

### ファイル検索
```bash
find . -name "*.tsx" # TSXファイルを検索
grep -r "pattern" .  # パターンを再帰的に検索
```

### ファイル表示
```bash
cat <file>           # ファイル内容を表示
head -n 20 <file>    # 最初の20行を表示
tail -n 20 <file>    # 最後の20行を表示
```

---

## Node.js / npm コマンド

### バージョン確認
```bash
node --version       # Node.jsバージョン確認
npm --version        # npmバージョン確認
```

### パッケージ管理
```bash
npm install          # package.jsonの依存関係をインストール
npm install <package>  # 特定のパッケージをインストール
npm update           # パッケージを更新
npm outdated         # 古いパッケージを確認
```

### その他
```bash
npm run <script>     # package.jsonのスクリプトを実行
npm list             # インストール済みパッケージ一覧
```

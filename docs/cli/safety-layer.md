# Safety Layer

## 必須機能
- dry-run
- diff表示
- conflict detection
- backup
- skip
- merge markers
- idempotency
- rollback plan
- generated file manifest

## 禁止事項
- token/secretをCLI引数で受け取らない
- secretを生成ファイルへ含めない（`.env.example` のみ）
- OS package managerを勝手に実行しない
- compiler/runtimeを勝手にインストールしない
- 本番環境へ接続しない
- MCPを自動有効化しない
- 既存CIを破壊的に上書きしない

## 既存ファイルがある場合の挙動例
```text
.github/PULL_REQUEST_TEMPLATE.md already exists

? どうしますか
  - skip
  - show diff
  - merge markersを付けて追記
  - backupして上書き
```

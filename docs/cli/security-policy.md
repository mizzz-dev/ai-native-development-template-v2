# CLI Security Policy

- tokenをCLI引数で受け取らない
- secretを生成ファイルに含めない（`.env.example` のみ）
- OS package managerを勝手に実行しない
- compiler/runtimeを勝手にインストールしない
- 外部API自動連携は初期MVPで行わない
- MCP設定はサンプル生成まで（自動有効化しない）
- 既存ファイルを無断上書きしない
- dry-runを優先
- supply chain security（依存検証・pinning）を重視

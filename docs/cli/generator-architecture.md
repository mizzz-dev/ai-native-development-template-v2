# Generator Architecture

## 責務分離
- Core Docs Generator
- Stack Docs Generator
- Workflow Template Generator
- PR Template Section Generator
- README Link Generator
- MCP Guide Generator
- Figma/UI Guide Generator

## 出力管理
- Generated File Manifest: 生成/更新/スキップを記録。
- Dry-run Output: 実変更なしで差分予告。
- Conflict Report: 競合箇所と解決案。
- Update Summary: 実行結果の要約。

## 実行モデル
1. Detector結果 + 手動選択で適用Profile確定。
2. Generatorが対象ファイル一覧を提示。
3. ユーザー確認後に書き込み。
4. 実行結果をmanifestへ保存。

## 生成前の明示
CLIは必ず「何を生成/更新するか」を先に表示して確認を取る。

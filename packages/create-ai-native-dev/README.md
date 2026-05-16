# create-ai-native-dev (MVP)

`npx create-ai-native-dev` / `npm create ai-native-dev@latest` で、既存リポジトリにAI-native開発テンプレートの最小導入と診断を行うCLIです。

## コマンド
- `create-ai-native-dev init [--profile generic|react|nextjs|cpp] [--dry-run]`
- `create-ai-native-dev doctor`

## 安全設計
- 既存ファイルは無断上書きしません（conflictはskip）。
- `--dry-run` で生成予定とmanifestを確認できます。
- secret/tokenの入力・保存、外部API接続、本番接続は行いません。

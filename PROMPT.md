# AI-native 開発実行プロンプト（正本）

## 0. 出力言語
- すべて日本語で出力する。
- PR本文、Issue追記、作業ログ、判断理由、未対応事項、リスクを日本語で記録する。

## 1. 作業開始前に必ず行うこと
1. リポジトリ構成を確認する。
2. 対象Linear Issueを確認し、目的・受け入れ条件・優先度・期限を把握する。
3. 対応するNotion作業ログページを作成または更新する。
4. 目的、前提、影響範囲、非対象範囲を明確化する。

## 2. 作業中の必須ルール
- 重要判断（採用/不採用理由、代替案、リスク）は都度記録する。
- 変更は最小差分で行い、無関係な整形・リネーム・リファクタをしない。
- テスト観点、セキュリティ観点、ロールバック観点を並行して整理する。

## 3. 作業完了時の必須ルール
- エビデンスを `docs/core/evidence-policy.md` に従って残す。
- PR本文に以下を必ず記載する。
  - 目的/背景
  - 対象Linear Issue
  - 関連Notionログ
  - 変更内容/理由
  - テスト結果
  - 未対応事項
  - リスク
  - ロールバック方法

## 4. AIが判断してよいこと / してはいけないこと
### AIが判断してよい
- 既存ルール内での実装方針提案
- ドキュメント更新
- テスト実行と結果整理

### AIが単独でしてはいけない
- production deploy
- Linear IssueのDone確定
- release作成
- secret/個人情報/顧客情報を含む情報の公開

## 5. MCP利用時の記録義務
- 使用MCP、対象リソース、操作内容、理由、実行者、日時を記録する。
- MCP経由でLinear/Notion/GitHubを更新した場合は、更新理由を必ず残す。

## 6. 参照ドキュメント
- `docs/core/development-protocol.md`
- `docs/core/quality-gates.md`
- `docs/core/evidence-policy.md`
- `docs/core/security-policy.md`
- `docs/integrations/linear.md`
- `docs/integrations/notion.md`
- `docs/integrations/mcp.md`

## 追加ルール
- 必要に応じて非エンジニアにも分かる説明を併記すること。
- セキュリティリスクを必ず確認すること。
- AI / MCP利用時はリスクとログを残すこと。
- Repository Scorecardに影響する変更は明記すること。
- PR本文では専門職以外にも分かる要約を含めること。

## High Assurance 追加ルール
- 高保証プロダクトでは利便性より安全性・証跡・承認・再現性を優先する。
- 機密情報をAIへ渡さない。
- MCP write操作は原則禁止または人間承認必須。
- 本番環境操作はAIに任せない。
- サプライチェーン、SBOM、依存関係、artifact signingを確認する。
- 変更管理と監査証跡を必ず残す。

## Tool Integration Policy
- 新規ツール導入時は目的・データ種別・権限・費用・代替案・撤退方法を整理する
- 外部SaaS利用時は機密情報、個人情報、監査ログ、契約・規約リスクを確認する
- MCP連携時はread-onlyを基本とし、write操作は人間承認必須とする
- tool導入は便利さだけでなく、運用負荷・security・vendor lock-inを評価する
- 高保証・air-gapped環境では外部SaaSを前提にしない
- コスト見積もりやコンプライアンス対応は保証ではなく判断材料として扱う

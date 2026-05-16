# AI Native Development Template v2

AIと人間が、どんな技術スタックでも安全・継続的・監査可能に開発するための **AI-native開発運用テンプレート** です。

## このRepositoryは何か

GitHubだけで完結しない実務運用を前提に、以下を統合したテンプレートです。

- GitHub: コード・PR・CI/CD・ADRの正本
- Linear: 課題管理の正本
- Notion: 作業ログ/意思決定補足/証跡まとめの正本
- MCP: Linear / Notion / GitHub連携の安全な補助経路

## 誰向けか

- 個人開発者（軽量なLevel 1から開始）
- 小規模〜中規模チーム（Level 2）
- 商用・監査対応が必要な組織（Level 3）

## 何を解決するか

- AI依頼の属人化
- 課題管理と実装履歴の分断
- 判断理由/証跡不足
- リリース前の品質ゲート漏れ

## 役割分担（GitHub / Linear / Notion）

| 層 | 正本として扱うもの |
|---|---|
| GitHub | ソースコード、PR、レビュー、CI/CD、ADR、リリースノート |
| Linear | 課題、優先順位、ステータス、担当、受け入れ条件、ロードマップ |
| Notion | 作業ログ、AI依頼履歴、調査メモ、判断補足、証跡まとめ |

詳細: `docs/integrations/`

## AI / MCP 利用方針（概要）

- MCPは補助ツール、最終判断は人間
- AI単独で `production deploy / issue close / release作成` を実行しない
- MCP経由の更新は理由と操作ログを記録
- secret/個人情報/顧客情報は最小権限・マスキング前提

詳細: `docs/integrations/mcp.md`, `docs/core/security-policy.md`

## 導入レベル

- **Level 1（個人）**: GitHub中心で開始。Linear/Notionは任意
- **Level 2（チーム）**: Linearを課題管理正本に、Notionで作業記録
- **Level 3（商用/監査）**: MCP運用・証跡管理・品質ゲートを必須化

詳細: `docs/adoption-guide.md`

## Quick Start

1. `docs/adoption-guide.md` を読む
2. `docs/core/development-protocol.md` を確認
3. `PROMPT.md` をAIへ渡す
4. Linear Issueを作成し受け入れ条件を明記
5. Notion作業ログを作成
6. PRテンプレートに沿って提出

## 最初に読むべきドキュメント

- `docs/core/development-protocol.md`
- `docs/core/quality-gates.md`
- `docs/core/evidence-policy.md`
- `docs/integrations/github.md`
- `docs/integrations/linear.md`
- `docs/integrations/notion.md`
- `docs/integrations/mcp.md`

## 品質ゲート（概要）

要件明確化 / 設計レビュー / 実装前確認 / テスト / セキュリティ / レビュー / リリース / エビデンス完了 / ロールバック確認。

詳細: `docs/core/quality-gates.md`

## エビデンス管理（概要）

最低限、以下を追跡可能にします。

- 対象Linear Issue
- 対象PR
- 実行コマンド・テスト結果
- 変更前後の状態
- 判断理由と残課題

詳細: `docs/core/evidence-policy.md`, `docs/templates/evidence-template.md`

## 禁止事項（抜粋）

- AI単独の本番デプロイ、Issueクローズ、リリース作成
- secret/個人情報の無加工保存
- 認可なし外部送信
- 無関係なリファクタ/リネーム

## 注意点

- READMEは入口、詳細は `docs/` を正本にする
- 実績がない事項は「推奨」「想定」「対応可能」と明記する
- 存在しない画像やスクリーンショットへのリンクは作らない


## CLI設計ドキュメント（npx導入）

- Stack Profile Strategy: `docs/cli/stack-profile-strategy.md`
- Project Detection: `docs/cli/project-detection.md`
- Supported Stacks: `docs/cli/supported-stacks.md`
- Safety Layer: `docs/cli/safety-layer.md`
- C++ Profile: `docs/stacks/cpp.md`
- React Profile: `docs/stacks/react.md`

## ライセンス

MIT

## create-ai-native-dev CLI (MVP)
- `npx create-ai-native-dev`
- `npm create ai-native-dev@latest`
- 詳細: `docs/cli/create-ai-native-dev.md`
- 導入ガイド: `docs/getting-started/non-engineer-quickstart.md`, `docs/getting-started/engineer-quickstart.md`

## 追加ドキュメント（Stack Catalog / High Assurance）
- Stack catalog: `docs/catalog/stack-catalog.md`
- High assurance: `docs/assurance/high-assurance-profile.md`
- CLI taxonomy: `docs/cli/profile-taxonomy.md`

## Tool Integration
- [Tool Integration Catalog](docs/tools/tool-integration-catalog.md)
- [Tool Selection Matrix](docs/tools/tool-selection-matrix.md)
- [Tool Risk Classification](docs/tools/tool-risk-classification.md)
- [Tool profiles](docs/tools/profiles/)
- [MCP Tool Permission Matrix Template](docs/templates/mcp-tool-permission-matrix-template.md)
- [Recommended Architecture Generator](docs/tools/recommended-architecture-generator.md)
- [Cost Estimation](docs/tools/cost-estimation.md)
- [Vendor Lock-in Analysis](docs/tools/vendor-lock-in-analysis.md)
- [Compliance Mapping](docs/tools/compliance-mapping.md)
- [Team Maturity Assessment](docs/tools/team-maturity-assessment.md)
- [AI Review Layer](docs/tools/ai-review-layer.md)
- [Air-gapped alternatives](docs/tools/air-gapped-tool-alternatives.md)
- [Governance Dashboard構想](docs/tools/governance-dashboard.md)


## Workflow / Readiness / Governance (Issue #14)
- Workflow Generator: `docs/cli/workflow-generator.md`
- Profile Generator: `docs/cli/profile-generator.md`
- Readiness Commands: `docs/cli/readiness-commands.md`
- Governance Diagnostics: `docs/cli/governance-diagnostics.md`
- Release/Rollback/Governance Readiness: `docs/quality/`
- AI Review Layer / MCP Governance / Golden Path: `docs/governance/`

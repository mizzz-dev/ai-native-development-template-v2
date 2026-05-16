# High Assurance Profile

対象例: 国家システム、公共、金融、医療、防衛、重要インフラ、機密SaaS。

重要原則: 最小権限、職務分離、変更管理、監査証跡、再現可能ビルド、サプライチェーン保護、secret管理、人間承認、本番アクセス制御、ロールバック可能性、インシデント対応、脅威モデリング、データ分類、リリース承認。

AI/MCP制約:
- 機密情報をAIへ渡さない
- MCPはread-onlyを基本
- write操作は人間承認必須
- 本番環境操作禁止
- 操作ログ必須
- Notion等の外部SaaSへ機密情報を保存しない

注記: 本文書は統制強化のガイドであり、保証・認証済みを意味しません。


## Tool制約
Restrictedツールは原則禁止または代替必須。外部SaaS前提にしない。

## Workflow/Readiness要件
- human approval必須
- AI承認代行禁止
- evidence automation必須


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

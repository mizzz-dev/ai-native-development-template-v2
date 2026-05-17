# Evidence-aware Generation

workflow生成時に必要な証跡を案内し、release/rollback/governance/AI review evidenceへ接続する。

- PR本文へevidence linkを記録
- Notion/Linear/GitHub Issue/PR commentの使い分け
- high assuranceではaudit evidenceを必須化
- 外部SaaS禁止環境ではlocal evidenceを推奨


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

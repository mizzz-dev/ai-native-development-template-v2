# repository-scorecard


## Assurance scorecard
`doctor --assurance` で高保証観点(Identity/Change control/SBOM等)を評価。

## Readiness追加観点
- release / rollback / governance の診断結果を記録する。


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

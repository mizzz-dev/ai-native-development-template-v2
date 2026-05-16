# Policy as Code

policy as codeは「保証」ではなく、検証可能性と監査可能性を高める仕組み。

- high assuranceではhuman approval必須
- MCP write操作は原則禁止または承認必須
- 本番操作をAI/MCPに委任しない
- secret/tokenをpolicyへ直書きしない


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

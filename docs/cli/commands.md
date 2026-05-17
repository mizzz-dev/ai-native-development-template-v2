# CLI Commands
- create-ai-native-dev init [--dry-run] [--profile generic|react|nextjs|cpp]
- create-ai-native-dev doctor

## 新規コマンド
- `create-ai-native-dev list profiles`
- `create-ai-native-dev doctor --assurance`


## Tool Commands (MVP)
- `create-ai-native-dev list tools [--category <name>]`
- `create-ai-native-dev add tool <name> --dry-run`
- `create-ai-native-dev doctor --tools`

- `create-ai-native-dev add workflow <react|nextjs|cpp|python|go|security|sbom> --dry-run`
- `create-ai-native-dev add profile <react|aws|postgres|playwright|opentelemetry> --dry-run`
- `create-ai-native-dev doctor --release`
- `create-ai-native-dev doctor --rollback`
- `create-ai-native-dev doctor --governance`

## create-ai-native-dev apply workflow <name>
- 目的: workflow templateを安全に生成/適用する
- 入力: workflow名(react|nextjs|security|sbom), --dry-run
- 出力: manifest/conflict/guidance
- 生成物: .github/workflows/*.yml
- safety behavior: 既存ファイルは無断上書きしない(既定skip)
- high assurance注意点: human approval + audit evidence必須
- 失敗時: 未対応workflowやtemplate欠落をエラー表示

## create-ai-native-dev validate
- 目的: repository baselineの存在確認
- 入力: なし
- 出力: PASS/WARN/FAIL + category + message + recommended action
- 生成物: なし
- safety behavior: 外部API/secret/本番環境への接続なし
- high assurance注意点: WARN/FAILはPRへ未対応事項として記録
- 失敗時: FAILがあると非0終了


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

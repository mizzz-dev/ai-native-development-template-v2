## 目的
## 背景
## 変更内容
## 変更理由
## 影響範囲
## CLIの確認方法
## ドキュメントの確認方法
## テスト内容
## セキュリティ確認
## 非エンジニア確認欄
## セキュリティリスク確認欄
## AI / MCP利用確認欄
## Repository Scorecard影響
## Release Readiness確認
## レビューで見てほしい点
## 懸念点・未対応事項

## 高保証プロダクト向け確認
- [ ] 高保証プロダクト該当有無
- [ ] データ分類
- [ ] AI / MCP制約確認
- [ ] 変更管理番号
- [ ] リリース承認者
- [ ] ロールバック手順
- [ ] 監査証跡リンク
- [ ] SBOM / dependency / secret scan確認
- [ ] 本番影響有無

## Tool導入チェック
- [ ] 新規ツール導入有無
- [ ] 外部SaaS利用有無
- [ ] tool risk level
- [ ] secret / token取扱い
- [ ] MCP利用有無
- [ ] data classification
- [ ] approval / evidence link
- [ ] air-gapped対応への影響
- [ ] vendor lock-in影響
- [ ] cost impact
- [ ] tool撤退方法


## Workflow/Readiness/Governance確認
- [ ] workflow generator利用有無
- [ ] profile generator利用有無
- [ ] release readiness確認
- [ ] rollback readiness確認
- [ ] governance diagnostics確認
- [ ] AI generated code review
- [ ] evidence archive確認


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

- [ ] governance dashboard確認
- [ ] policy enforcement確認
- [ ] evidence graph影響
- [ ] AI provenance影響
- [ ] drift detection影響
- [ ] continuous validation影響

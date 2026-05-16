# Changelog

## 0.6.0 - 2026-05-15
- `create-ai-native-dev` CLI MVPを追加（init/doctor/dry-run/profile指定）。
- Project Detector / Safety Layer / Repository Scorecard診断を追加。
- 非エンジニア・エンジニア向けQuick Startとロール別/セキュリティ/品質/障害対応ドキュメントを追加。
- PRテンプレートとPROMPT群を強化。

## Unreleased
- stack catalog と high assurance 向けドキュメント群を追加
- `list profiles` と `doctor --assurance` を追加

## 2026-05-16
- Tool Integration Catalog / Tool Selection Matrix / Tool Risk Classification を追加
- Tool profile/category docs と templates を追加
- CLIに `list tools` / `add tool --dry-run` / `doctor --tools` を追加

## 0.7.0 - 2026-05-16
- Workflow Generator/Profile Generator/Readiness診断/Governance診断のMVPを追加。
- AI Review Layer・MCP operation governance・Golden Path/Approved Toolchain docsを追加。

## 0.7.0
- Workflow Apply Engine (apply workflow) を追加
- Validation Engine (validate) を追加
- workflow templates (react/nextjs/security/sbom) を追加
- Plugin Architecture / SDK / Validation docsを追加
- Policy as Code docs + policy templatesを追加
- Registry Design / Evidence-aware Generation docsを追加
- README, PROMPT, CLI docs更新


## Governance Platform updates
- Governance Dashboard: `create-ai-native-dev dashboard` / `--json`
- Policy Enforcement: `create-ai-native-dev enforce policy`
- Evidence Graph / AI Provenance / Drift Detection / Continuous Validation docsを参照
- policy violationがある場合はPRに未対応事項として記録
- AI provenanceはprompt全文ではなくsummaryのみを保存
- high assuranceではhuman approvalとaudit evidenceを必須

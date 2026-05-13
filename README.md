# commercial-ai-native-engineering-os

## Repositoryの目的
本Repositoryは、AI時代の開発組織における **Executable Organizational Intelligence** を実装するテンプレートです。

## 最重要思想
- Repository = Executable Organizational Intelligence
- AI = Replaceable Execution Layer
- Human = Strategic Decision Layer

## 想定利用者
- Platform/Principal/Staff Engineer
- SRE・DevSecOps
- Product/Engineering Manager
- AIエージェント運用担当

## 想定プロジェクト
TypeScript / Python / Go / Rust / Java / Kotlin、Frontend、Backend API、SaaS、AI Product、OSS、Enterprise。

## 導入方法
### 最小導入
- docs/core、.github template、scripts最小セットを導入。

### 標準導入
- language overlay / project overlay / runbook / workflowを導入。

### 商用導入
- enterprise/compliance、品質ゲート、監査ログ、運用SLOを有効化。

## レイヤ説明
- Core: 共通規範
- Language Overlay: 言語別運用
- Project Overlay: プロダクト種別運用
- Commercial Layer: 商用/監査/法務運用

## GitHub日本語運用ポリシー
PR/Issue/Discussion/commit message/レビュー/リリースノート/ADRを日本語で統一します。

## AIエージェントへの渡し方
`PROMPT.md` または `PROMPT.txt` をそのまま渡し、`.codex/context/` と関連docsを同時に読み込ませます。

## 品質ゲートとPolicy as Code
`docs/core/quality-gates.md` と `scripts/` + `.github/workflows/` によって強制します。

## 推奨ワークフロー
Issue → Discussion → RFC/PRD → ADR → 実装PR → リリースノート → インシデント/RCA。

## 更新方法
`VERSION.md` と `CHANGELOG.md`、`docs/template-versioning-policy.md` に従って更新します。

## 注意点
会話だけに判断を残さず、必ずRepositoryへ記録してください。

## ライセンス
MIT

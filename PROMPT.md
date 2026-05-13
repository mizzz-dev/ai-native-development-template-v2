# Commercial-Grade AI-Native Engineering OS Prompt

## このPROMPTの使い方

このファイルは、Codex・ChatGPT・Claude・CursorなどのAIに作業を依頼するときに渡す基本プロンプトです。

初めて使う場合は、以下を一緒にAIへ渡してください。

- この `PROMPT.md`
- 対象IssueのURL
- 作業内容
- 必要に応じて `docs/adoption-guide.md`

### 最小の依頼例

```text
このRepositoryのPROMPT.mdに従って作業してください。

対象Issue:
{{ISSUE_URL}}

作業内容:
{{TASK_DESCRIPTION}}

必ず守ること:
- PR本文は日本語
- commit messageは日本語
- 作業ログを保存
- AIプロンプトログを保存
- 重要判断はADRへ保存
```

### 導入作業を依頼する場合

```text
このRepositoryにAI開発プロトコルを導入してください。

参照:
- PROMPT.md
- docs/adoption-guide.md

導入レベル:
Level 1 / Level 2 / Level 3

対象Repository:
{{REPOSITORY_URL}}
```

## 日本語出力ポリシー
すべての説明、判断理由、作業ログを日本語で出力する。

## GitHub日本語運用
PR/Issue/Discussion/commit message を日本語で記録する。

## ガバナンス要件
Repository Constitution / Architectural Invariants / Repository Memory Policy / Context Bootstrap Rules / AI Governance / AI Observability / AI Prompt Logging / Decision Traceability を順守。

## 開発統制
ADR・RFC・PRD必須条件、Branch Lifecycle、Policy as Code、Commercial Readiness、Secure SDLC、Supply Chain Security、Privacy/Compliance、Data Governance、Cost Governance、Customer Impact、Release Governance、Incident Response、Support Readiness、Observability、Recovery First を満たす。

## プロダクト方針
Accessibility / Localization / Feature Flag / Deprecation / Compatibility / Definition of Done / Commercial Definition of Done を満たす。

## 最終出力形式
Summary / Created Files / Repository Philosophy / Japanese GitHub Operation Policy / AI Governance Strategy / Commercial Readiness Strategy / Security Strategy / Supply Chain Security Strategy / Policy as Code Strategy / Repository Memory Strategy / Context Engineering Strategy / Quality Gates / Template Versioning / Usage Guide / Recommended Next Actions

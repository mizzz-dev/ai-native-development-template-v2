# Workflow Template: frontend-ci

- 目的: Frontendの品質とUI証跡の担保
- trigger: push, pull_request
- job構成: install, lint, typecheck, unit-test, e2e, a11y, visual-regression
- 必要ツール: node package manager, playwright, storybook
- cache方針: lockfileベースで依存キャッシュ
- matrix方針: Node version x browser
- 成功条件: lint/typecheck/test/a11y/visual-regressionが通る
- 失敗時調査: snapshot差分, flaky e2e, token/theme不整合
- 導入注意: 既存UI workflowと重複しない命名

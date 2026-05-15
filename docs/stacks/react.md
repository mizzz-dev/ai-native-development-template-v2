# React Profile

## 方針
Reactでは機能実装だけでなく、UI/UX証跡（Figma, screenshot, Storybook, a11y）を必須化する。

## 対応構成
- Vite
- CRA
- custom bundler

## 推奨品質ゲート
- TypeScript typecheck
- lint
- unit test
- E2E
- accessibility
- visual regression
- responsive確認
- loading/empty/error state確認
- keyboard operation確認

## デザイン運用
- Figmaリンク
- Storybook
- design token
- UI evidence（スクリーンショット/動画）

## AI依頼時の注意
状態遷移（loading/empty/error）、受け入れ条件、アクセシビリティ要件を先に明文化。

## PR確認項目
Figma整合、レスポンシブ、キーボード操作、a11y、visual regression。

## CI例
`docs/templates/workflows/frontend-ci.md` を参照。

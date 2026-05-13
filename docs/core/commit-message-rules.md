# Commit Message Rules

## 日本語方針
commit message は日本語要約を必須とする。

## 推奨形式
`type(scope): 日本語の要約`

## 良い例
- feat(auth): セッション更新処理を追加
- fix(api): Webhook重複処理を防止

## 悪い例
- fix
- Update files

## Conventional Commit併用
type/scope は英語可、要約は日本語必須。

## squash / revert / merge方針
- squash: 変更意図と影響を日本語で統合
- revert: 取り消し理由と影響を明記
- merge: 追跡可能な要約を残す

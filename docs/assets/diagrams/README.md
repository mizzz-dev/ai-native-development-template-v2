# diagrams

READMEやadoption-guideで使う図解ファイルの置き場です。

## 何を置く場所か
- アーキテクチャ図
- 導入フロー図
- 運用フロー図

## READMEからどう参照するか
- `docs/assets/diagrams/<file>` の相対パスで参照します。
- Mermaidで表現できる図は、まずREADME本文に直接記載し、必要時のみ画像化してください。

## 命名ルール
- 形式: `diagram-<topic>-vN.ext`
- 例: `diagram-role-split-v1.svg`

## 注意
- 存在しない画像をREADMEから参照しないこと
- 機密情報を含む図はコミットしないこと

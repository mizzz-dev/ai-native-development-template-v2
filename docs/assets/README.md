# docs/assets

このディレクトリは、READMEやdocsで利用する図解・画像の保管場所です。

## 何を置く場所か
- Mermaid原図の補足説明
- 将来追加する図版（PNG/SVG）
- ドキュメント用スクリーンショット

## READMEからどう参照するか
- README.mdからは `docs/assets/diagrams/` と `docs/assets/screenshots/` を相対リンクで参照します。
- 画像追加時は、存在するファイルのみリンクしてください。

## 命名ルール
- 形式: `yyyy-mm-topic-vN.ext`
- 例: `2026-05-adoption-flow-v1.png`

## 注意
- 存在しない画像をREADMEから参照しないこと
- スクリーンショットに個人情報・secret・トークンを含めないこと

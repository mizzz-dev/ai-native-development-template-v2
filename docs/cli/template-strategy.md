# Template Strategy

テンプレートは `core + stack profiles` の合成で構築する。

- Core: 全stack共通（運用、証跡、セキュリティ）
- Stack: React/C++等の品質ゲート差分
- Composition: 複数Profile同時適用を前提に重複排除

詳細は `docs/cli/profile-composition.md` を参照。

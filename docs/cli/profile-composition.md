# Profile Composition

## 基本ルール
- Core profileは1回だけ適用。
- stack固有profileは複数適用可能。
- PR template sectionは重複排除して合成。
- READMEリンクは重複追加しない。
- workflowは既存名と競合しない命名を採用。

## 競合解決
同一ファイルを複数profileが更新する場合はconflictとして表示し、以下に分類:
- 自動merge可能: 非重複ブロック、順序独立リンク追加。
- 人間確認が必要: 同一行編集、workflow job名衝突、既存運用との矛盾。

## 代表構成
- React + Node API
- Next.js + Python worker
- C++ core + Python bindings
- React + C++ WebAssembly
- Terraform + Backend API

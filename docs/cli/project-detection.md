# Project Detection

## 検出対象
`package.json`, `vite.config.*`, `next.config.*`, `tsconfig.json`, `CMakeLists.txt`, `Makefile`, `meson.build`, `pyproject.toml`, `requirements.txt`, `go.mod`, `pom.xml`, `build.gradle`, `composer.json`, `Gemfile`, `Dockerfile`, `*.tf`, `.github/workflows`。

## 検出フロー
1. ルートと主要サブディレクトリを走査。
2. 複数シグナルで候補Profileをスコアリング。
3. 検出結果をCLIで表示。
4. ユーザーが確定/除外/追加。
5. 確定結果を manifest に保存。

## 想定ケース
- Reactのみ
- C++のみ
- React + C++
- React + Node API
- Next.js + Python worker
- C++ core + Python bindings
- React + C++ WebAssembly
- Terraform + Backend API
- 未知のスタック（generic fallback）
- 既存workflow/PR templateあり（競合扱い）

## UI例
- `Detected profiles: react (0.92), cpp (0.78)`
- `Existing CI files detected: .github/workflows/ci.yml`
- `Proceed? [confirm/select manually/abort]`

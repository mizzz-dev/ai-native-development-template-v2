# Stack Profile Strategy

## 目的
`npx create-ai-native-dev` / `npm create ai-native-dev@latest` で、Node.js以外を含む既存プロジェクトへ安全にAI-native運用テンプレートを導入するための設計。

## 基本方針
- CLIは**環境本体をインストールしない**。
- CLIは既存プロジェクトを検出し、対応するProfileを提案してテンプレートを生成する。
- compiler/runtime/package manager はユーザー管理とし、CLIが勝手に導入しない。

## Profileスキーマ
- id / name
- detection rules
- generated docs
- generated workflows
- PR template sections
- quality gates
- optional integrations
- required tools / recommended tools
- unsupported operations
- security notes

## サンプル
```json
{
  "id": "cpp",
  "name": "C++",
  "detect": {
    "files": ["CMakeLists.txt", "Makefile"],
    "extensions": [".cpp", ".cc", ".cxx", ".hpp", ".h"]
  },
  "templates": ["core", "cpp", "security", "release"],
  "workflows": ["docs", "quality", "cpp-ci"],
  "qualityGates": ["configure", "build", "unit-test", "static-analysis", "sanitizer", "compiler-matrix"]
}
```

```json
{
  "id": "react",
  "name": "React",
  "detect": {
    "files": ["package.json", "vite.config.ts", "src/App.tsx"],
    "packageDependencies": ["react"]
  },
  "templates": ["core", "frontend", "design", "figma", "storybook", "playwright"],
  "workflows": ["docs", "quality", "frontend-ci", "ui-quality"],
  "qualityGates": ["lint", "typecheck", "unit-test", "e2e", "accessibility", "visual-regression"]
}
```

## MVP優先
Generic / React / Next.js / C++。

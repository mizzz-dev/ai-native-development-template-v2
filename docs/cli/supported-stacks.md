# Supported Stacks

| Stack | 検出対象 | 主な生成物 | 推奨Quality Gates | 推奨Workflow | 注意点 | 優先度 |
|---|---|---|---|---|---|---|
| Generic | README, Dockerfile | core docs | review/test/security | docs+quality | fallback用途 | MVP |
| React | package.json, vite config | react/profile docs | lint/typecheck/e2e/a11y | frontend-ci | UI証跡必須 | MVP |
| Next.js | next.config, package.json | next docs | lint/typecheck/e2e | frontend-ci | SSR/CSR差分 | MVP |
| Node.js | package.json | backend docs | lint/test/security | backend-ci | runtime固定 | Later |
| C++ | CMakeLists/Makefile/meson | cpp docs | build/test/sanitizer | cpp-ci | toolchain差分 | MVP |
| Python | pyproject/requirements | python docs | lint/type/test | python-ci | venv管理 | Later |
| Go | go.mod | go docs | vet/test | go-ci | module管理 | Later |
| Java | pom/gradle | java docs | build/test | java-ci | JDK差分 | Later |
| PHP/Laravel | composer.json | php docs | lint/test | php-ci | 拡張モジュール | Later |
| Ruby/Rails | Gemfile | ruby docs | lint/test | ruby-ci | gem lock整合 | Later |
| Mobile | android/ios markers | mobile docs | test/ui | mobile-ci | 署名情報注意 | Later |
| Infrastructure/IaC | *.tf | infra docs | fmt/validate/plan | infra-ci | state保護 | Later |
| Data | notebook/pipeline markers | data docs | data test | data-ci | データ機密 | Later |
| AI/ML | model/prompt markers | ml docs | eval/repro | ml-ci | モデル再現性 | Later |

## Catalog連携
詳細分類は `docs/catalog/stack-catalog.md` を参照。

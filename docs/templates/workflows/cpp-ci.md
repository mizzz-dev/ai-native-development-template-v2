# Workflow Template: cpp-ci

- 目的: C++の再現可能ビルドと品質検証
- trigger: push, pull_request
- job構成: configure, build, test, static-analysis, sanitizer
- 必要ツール: cmake/make/meson, compiler, ctest
- cache方針: build cache, dependency cache
- matrix方針: OS x compiler x build-type
- 成功条件: 全matrixでbuild/test/sanitizer成功
- 失敗時調査: compiler差分, UB, flaky test, dependency mismatch
- 導入注意: 既存workflowとjob名衝突を回避

# C++ Profile

## 方針
C++ではUI証跡より、build再現性・compiler/platform差分・memory safetyを優先する。

## 対応ビルド
- CMake
- Make
- Meson

## 推奨品質ゲート
- configure
- build
- unit test
- clang-format
- clang-tidy
- sanitizer (ASan/UBSan/TSan)
- compiler matrix (gcc/clang)
- OS matrix (ubuntu/macos/windows)
- memory leak確認
- ABI/API compatibility
- release artifact検証

## セキュリティ注意点
依存ライブラリのサプライチェーン、unsafeなメモリ操作、未定義動作を重点監査。

## AI依頼時の注意
- ターゲットcompiler/標準規格を明示。
- 再現手順（configure/build/test）を必ず添付。
- sanitizer結果を添える。

## PR確認項目
ビルド再現性、compiler/OS差分、API互換、性能影響、メモリ安全性。

## CI例
`docs/templates/workflows/cpp-ci.md` を参照。

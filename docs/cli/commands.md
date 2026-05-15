# CLI Commands

## npx create-ai-native-dev
- 目的: 初期検出と導入開始
- 入力: 対象パス, 対話選択
- 生成物: manifest, docs, workflow template案
- 確認項目: 検出Profile, 既存ファイル競合
- 失敗時: 変更せず終了（dry-run可能）

## npx create-ai-native-dev init
- 目的: 初期セットアップ
- 入力: profile指定/auto detect
- 生成物: core + stack docs
- 確認項目: overwrite警告
- 失敗時: rollback plan提示

## npx create-ai-native-dev doctor
- 目的: 現状診断
- 入力: repo path
- 生成物: 診断レポート
- 確認項目: 欠落ドキュメント/CI
- 失敗時: 部分結果を出力

## npx create-ai-native-dev add profile
- 目的: stack profile追加
- 入力: profile id
- 生成物: stack docs/workflow sections
- 確認項目: 重複/競合
- 失敗時: apply前に中断

## npx create-ai-native-dev add mcp
- 目的: MCPガイドを追加
- 入力: provider選択
- 生成物: サンプル設定ドキュメント
- 確認項目: 自動有効化しないこと
- 失敗時: 設定例のみ出力

## npx create-ai-native-dev add figma
- 目的: UI証跡ガイド追加
- 入力: frontend profile有無
- 生成物: UI design section
- 確認項目: 既存PRテンプレ重複
- 失敗時: skip

## npx create-ai-native-dev upgrade
- 目的: テンプレート更新
- 入力: from/to version
- 生成物: update summary
- 確認項目: 破壊的変更
- 失敗時: backupから復旧可能

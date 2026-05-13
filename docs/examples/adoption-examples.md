# Adoption Examples

導入レベル別のサンプルです。実在実績ではなく、想定導入パターンとして利用してください。

## Level 1導入例
- 目的: 学習用Webアプリの初期開発
- 実施内容: `PROMPT.md`, `PROMPT.txt`, `docs/templates/` を導入
- 完了条件: 最初のIssue・PR・作業ログが作成済み

## Level 2導入例
- 目的: 3〜5名チームの運用標準化
- 実施内容: Level 1 + `.github/` + `docs/core/` + `docs/adr/`
- 完了条件: PRテンプレート運用、commit message日本語ルール合意

## Level 3導入例
- 目的: 商用公開前の運用品質整備
- 実施内容: Level 2 + commercial/security/release/incident/supportの運用導入
- 完了条件: リリース前チェックリストと自動チェック方針の確定

## AIに依頼するプロンプト例
```text
PROMPT.mdに従って、Level 2の導入を実施してください。
対象Repository: https://github.com/your-org/your-repo
目的: PR運用とAI依頼ルールの標準化
```

## 導入後のIssue例
- タイトル: `導入後運用: AI作業ログの定着`
- 完了条件: 1週間分のログ運用と振り返りを実施

## 導入後のPR例
- タイトル: `docs: AI運用ルールとテンプレートの導入`
- 本文: 背景、変更内容、影響範囲、テスト結果、残課題を記載

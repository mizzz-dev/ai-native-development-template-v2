# Adoption Guide

AI Native Development Template を自分のRepositoryに導入するための手順

## このガイドの目的

このガイドは、[README.md](../README.md) を読んだ次に読むことを想定した実践ガイドです。  
自分のRepositoryへテンプレートを導入するために、何をどこへ配置し、どこから始めるかを順番に説明します。  
非エンジニア・AI初心者・学生でも使えるように、専門用語をできるだけ減らして構成しています。  
最初から全部導入する必要はありません。まずは小さく導入し、必要に応じて拡張してください。

## 導入前に確認すること

- [ ] 個人開発か、チーム開発か
- [ ] 学習用か、商用予定か
- [ ] 既存Repositoryへ入れるか、新規Repositoryで始めるか
- [ ] AIにどこまで作業させるか
- [ ] PR / Issue / commit message を日本語で統一するか
- [ ] GitHub Actionsなどの自動チェックを使うか

## 導入レベルの選び方

READMEの導入レベルと整合する形で、まずは以下の3段階から選びます。迷ったら Level 1 から始めて、必要時に Level 2 / Level 3 へ上げる運用がおすすめです。

## Level 1: 個人開発・学習向け

### 対象

- 学生
- 個人開発者
- AI初心者
- 小さなアプリを作りたい人

### コピーするもの

- `PROMPT.md`
- `PROMPT.txt`
- `docs/templates/`
- `docs/ai-prompts/`
- `docs/logs/`
- `docs/adr/`

### 説明

最初は最小限で問題ありません。Issue、作業ログ、AIプロンプトログだけでも、継続開発の再現性が大きく上がります。

## Level 2: チーム開発向け

### 対象

- 複数人開発
- AIと人間で分担する開発
- GitHub PR運用を整えたいチーム

### コピーするもの

- Level 1の内容
- `docs/core/`
- `.github/`
- `scripts/`

### 説明

Issue / PR / Discussion / commit message の日本語運用をチームで統一し、レビューと引き継ぎの品質を安定させます。

## Level 3: 商用・本番運用向け

### 対象

- 公開サービス
- 受託開発
- SaaS
- 顧客データを扱う可能性があるプロジェクト

### コピーするもの

- Level 2の内容
- `docs/core/commercial-readiness.md`
- `docs/core/security-rules.md`
- `docs/core/release-management-rules.md`
- `docs/core/incident-response.md`
- `docs/core/support-readiness.md`
- `.github/workflows/`
- `scripts/`

### 説明

セキュリティ、サポート、リリース、障害対応まで含めて運用します。公開前にチェック項目を明文化し、継続運用できる体制を作ります。

## コピーするファイル一覧

| 目的 | コピーするもの |
|---|---|
| AIに依頼したい | `PROMPT.md` / `PROMPT.txt` |
| IssueやPRを整えたい | `docs/templates/` / `.github/` |
| 作業ログを残したい | `docs/logs/` / `docs/templates/work-log-template.md` |
| AIプロンプトを残したい | `docs/ai-prompts/` / `docs/templates/ai-prompt-log-template.md` |
| 判断理由を残したい | `docs/adr/` / `docs/templates/adr-template.md` |
| チームルールを整えたい | `docs/core/` |
| 商用利用に備えたい | `docs/core/commercial-readiness.md` など |

## 既存Repositoryへ導入する手順

1. 現在のRepository構成を確認する
2. `docs/ai-protocol/` を作る
3. 必要なファイルをコピーする
4. README.mdに導線を追加する
5. Issue/PRテンプレートを導入する
6. 最初の作業ログを作る
7. 最初のAIプロンプトログを作る
8. 必要ならADR-0001を作る
9. PRを作ってレビューする

各手順で迷った場合は、最小構成（`PROMPT.md`、Issue、PR、作業ログ）を優先し、後から段階的に追加してください。

## 新規Repositoryへ導入する手順

1. 新規Repositoryを作る
2. このテンプレートの必要ファイルをコピーする
3. README.mdをプロジェクト用に書き換える
4. `docs/ai-protocol/README.md` を作る
5. 最初のIssueを作る
6. AIにPROMPT.mdを渡して初期整備を依頼する
7. PRで導入内容を確認する

新規作成時は、最初のREADMEに「このRepositoryでAIをどう使うか」を1段落で明記しておくと、以降の運用が安定します。

## AIに導入作業を依頼する方法

Codex / ChatGPT / Claude / Cursor には、以下をそのまま渡せます。

```text
以下のAI開発プロトコルを、このRepositoryへ導入してください。

参照:
- PROMPT.md
- docs/adoption-guide.md

対象Repository:
{{REPOSITORY_URL}}

導入レベル:
Level 1 / Level 2 / Level 3

必須:
- README.mdに導線を追加
- docs/ai-protocol/ を作成
- PR / Issue / commit message は日本語
- 作業ログを保存
- AIプロンプトログを保存
- 重要判断はADRへ保存
```

- `{{REPOSITORY_URL}}` は対象のRepository URLに置き換えてください。  
  例: `https://github.com/your-org/your-repo`
- 導入レベルは `Level 1` / `Level 2` / `Level 3` から1つ選び、実際に使うレベルだけ残してください。

## 導入後に最初に作るIssue

```markdown
# AI開発プロトコルの初期導入

## 背景
AIと人間が継続的に作業できるように、開発ルール・記録・PR/Issue運用を整備する。

## 目的
RepositoryにAI開発プロトコルを導入し、作業ログ・AIプロンプトログ・ADRの保存先を明確にする。

## 完了条件
- PROMPT.md が配置されている
- README.mdから導線がある
- docs/ai-protocol/ がある
- 作業ログ保存先がある
- AIプロンプトログ保存先がある
- PRテンプレートが日本語である
```

## 導入後の日常運用

以下の流れを基本にすると、AI作業の再現性と引き継ぎ性が上がります。

```text
Issue作成
↓
PROMPT.md + Issue URL をAIに渡す
↓
作業
↓
作業ログ保存
↓
AIプロンプトログ保存
↓
PR作成
↓
レビュー
↓
merge
↓
必要ならbranch削除
↓
handoff保存
```

## 導入時の注意点

- 最初から全部導入しない
- 既存READMEを壊さない
- 既存CIを急に厳しくしない
- GitHub Actionsは最初は警告ベースでもよい
- AIに秘密情報を渡さない
- 判断理由はRepositoryに残す
- READMEだけでなくadoption-guideにも導線を置く

## よくある失敗

- PROMPT.mdだけコピーして運用ログを残さない
- READMEから導線がなく誰も使わない
- AIプロンプトログを残さず再現できない
- IssueなしでAIに作業させる
- PRが日本語で説明されていない
- 最初から商用レベル全部を導入して重くなる
- 既存プロジェクトの運用を壊す

## 導入チェックリスト

- [ ] README.mdからPROMPT.mdへリンクしている
- [ ] README.mdからdocs/adoption-guide.mdへリンクしている
- [ ] PROMPT.mdの使い方が書かれている
- [ ] docs/templates/の使い方が書かれている
- [ ] 作業ログ保存先がある
- [ ] AIプロンプトログ保存先がある
- [ ] ADR保存先がある
- [ ] PR/Issueテンプレートが日本語である
- [ ] 最初のIssueが作成されている

## 次に読むファイル

- [README.md](../README.md): 全体像
- [PROMPT.md](../PROMPT.md): AIに渡す基本プロンプト
- [PROMPT.txt](../PROMPT.txt): コピペしやすいテキスト版
- [docs/templates/](./templates/): 実務で使う雛形
- [docs/core/](./core/): 詳細な運用ルール

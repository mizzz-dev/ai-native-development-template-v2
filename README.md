# AI Native Development Template

AIと一緒に安全・継続的に開発するためのRepositoryテンプレート

このRepositoryは、Codex・ChatGPT・Claude・CursorなどのAIに開発を依頼するときに、作業ルール、記録方法、PR/Issue運用、品質チェックを整えるためのテンプレートです。

導入手順を詳しく知りたい場合は、まず [docs/adoption-guide.md](docs/adoption-guide.md) を読んでください。
AIにそのまま渡す基本プロンプトは [PROMPT.md](PROMPT.md) です。コピペしやすいテキスト版は [PROMPT.txt](PROMPT.txt) です。

## 目次
- [これは何？](#これは何)
- [なぜ必要？](#なぜ必要)
- [誰が使える？](#誰が使える)
- [こんな人におすすめ](#こんな人におすすめ)
- [特徴](#特徴)
- [これを使うと何が良くなる？](#これを使うと何が良くなる)
- [どのファイルから読めばいい？](#どのファイルから読めばいい)
- [導入レベル](#導入レベル)
- [まずはこの使い方でOK](#まずはこの使い方でok)
- [AIに渡すファイルの選び方](#aiに渡すファイルの選び方)
- [AIに依頼するときの例](#aiに依頼するときの例)
- [主なファイルと役割](#主なファイルと役割)
- [基本ワークフロー](#基本ワークフロー)
- [よくある使い方](#よくある使い方)
- [商用利用を見据えた使い方](#商用利用を見据えた使い方)
- [GitHub日本語運用ポリシー](#github日本語運用ポリシー)
- [用語集](#用語集)
- [注意点](#注意点)
- [次にやること](#次にやること)
- [ライセンス](#ライセンス)

## これは何？

AIにコードを書いてもらうだけでは、あとから「なぜこの実装にしたのか」「どこまで終わったのか」が分からなくなりがちです。

このテンプレートは、AIと開発するときの**ルール集**です。作業ログや判断理由をRepositoryに残す仕組み、Issue/PR/Discussionを使った進め方、AIへの依頼文テンプレートをまとめています。個人開発でもチーム開発でも使えます。将来的に商用利用を目指すときの準備にも対応しています。

## なぜ必要？

AIチャットだけに情報を残すと、会話が流れて内容が追えなくなることがあります。別のAIやメンバーに引き継ぐときも、背景が伝わりにくくなります。

このRepositoryは、難しく言うと **Executable Organizational Intelligence** を目指しています。簡単に言うと、開発ルールや判断をRepositoryに残し、AIや人が同じ文脈で作業を続けられる状態を作る考え方です。

- Repository = 記録とルールを実行できる知識ベース
- AI = Replaceable Execution Layer（入れ替え可能な実行担当）
- Human = Strategic Decision Layer（最終判断を行う担当）

## 誰が使える？

- AIを使った開発を始めたい人
- 個人開発を進めたい学生
- GitHubのIssue/PR運用に慣れていない人
- 非エンジニアで、AIに開発を依頼したい人
- 小規模チームで開発ルールを整えたい人
- 将来的に商用サービスへ育てたい人

### エンジニアでなくても使える？

はい。使えます。

コードが書けなくても、以下の作業を進められます。

- AIへの依頼文を整理する
- Issueで「何を作りたいか」を整理する
- PRで「何が変更されたか」を確認する
- 作業ログで「どこまで進んだか」を残す
- AI promptログで「AIに何を頼んだか」を残す

## こんな人におすすめ

- AIで個人開発を進めたい人
- Codexに作業を依頼したい人
- ChatGPTやClaudeにコードレビューを頼みたい人
- GitHubのIssueやPR運用を整えたい人
- 学生でチーム開発の練習をしたい人
- 非エンジニアだがAIを使ってプロダクトを作りたい人
- 将来的に商用サービスとして育てたい人
- AIに任せっぱなしではなく、安全に管理したい人

## 特徴

### 1. AIに渡すプロンプトを標準化できる
`PROMPT.md` と `PROMPT.txt` を使って、毎回の依頼の型をそろえられます。依頼の書き方が安定するので、AIの出力品質のブレを減らせます。

### 2. 作業ログをRepositoryに残せる
作業内容をテンプレートに記録すると、進捗をあとで見返せます。会話が消えても、Repositoryに履歴が残ります。

### 3. PR・Issue・Discussionを日本語で運用できる
GitHub上のコミュニケーションを日本語で統一できます。レビュー時に認識ずれが起きにくくなります。

### 4. AIに依頼した内容を記録できる
`docs/ai-prompts/` に依頼文を残せます。あとで「どの指示でこの変更が出たか」を追跡しやすくなります。

### 5. 判断理由をADRとして残せる
ADRは「重要な技術判断メモ」です。なぜその技術を選んだかを残せるため、将来の見直しがしやすくなります。

### 6. 商用利用を見据えた品質チェックができる
品質ゲートやセキュリティ観点を段階的に導入できます。本番公開前に必要な確認漏れを減らせます。

### 7. 複数のAIエージェントで引き継ぎしやすい
1つのAIに依存せず、別のAIへ作業を引き継ぎやすくなります。記録があるため、背景説明の手間を減らせます。

### 8. 初心者でも段階的に導入できる
最初は最小セットだけ使い、慣れてきたら運用を増やせます。いきなり全部導入しなくて大丈夫です。

## これを使うと何が良くなる？

### AIへの依頼がブレにくくなる
依頼フォーマットが決まるため、毎回ゼロから説明しなくて済みます。

### 作業の途中で迷子になりにくい
Issue・作業ログ・PRを残すので、今どこまで終わったか分かります。

### 他のAIや人に引き継ぎやすい
チャット履歴ではなくRepositoryに情報があるため、担当変更に強くなります。

### PRやIssueが読みやすくなる
書き方が統一されるので、先生・レビュアー・チームメンバーに説明しやすくなります。

### 商用利用に必要な観点を忘れにくい
セキュリティ、運用、監査、サポート準備などを段階的に確認できます。

### 会話が消えてもRepositoryに記録が残る
AIチャットだけに依存しないので、履歴消失リスクに備えられます。

## どのファイルから読めばいい？

初めて使う場合は、次の順番で読むのがおすすめです。

| 順番 | ファイル | 目的 |
|---|---|---|
| 1 | `README.md` | 全体像を理解する |
| 2 | `docs/adoption-guide.md` | 自分のRepositoryへ導入する手順を確認する |
| 3 | `PROMPT.md` | AIに渡す基本ルールを確認する |
| 4 | `docs/templates/` | Issue、PR、作業ログの雛形を使う |
| 5 | `docs/core/` | 運用ルールを詳しく確認する |

- `README.md` は入口です。
- `docs/adoption-guide.md` は導入手順です。
- `PROMPT.md` はAIに渡す指示書です。
- `PROMPT.txt` はコピペしやすいテキスト版です。
- `docs/templates/` は実際の運用で使う雛形です。

## 導入レベル

導入手順を詳しく知りたい場合は、[docs/adoption-guide.md](docs/adoption-guide.md) を読んでください。

### Level 1: 個人開発・学習向け
**向いている人:** はじめてAI開発をする人、学生、個人開発者。

**使うもの:**
- `PROMPT.md`
- `README.md`
- Issueテンプレート
- PRテンプレート
- 作業ログテンプレート

**最初にすること:** 1つIssueを作り、AIに `PROMPT.md` とIssue内容を渡して小さなタスクを実行します。

### Level 2: チーム開発向け
**向いている人:** 複数人で開発するチーム、複数AIを併用するプロジェクト。

**使うもの:**
- `docs/core/`
- `docs/templates/`
- `docs/ai-prompts/`
- `docs/adr/`
- GitHub templates

**最初にすること:** テンプレートを使ってIssue/PR/ADRの運用ルールを決め、全員で同じ書式を使います。

### Level 3: 商用・本番運用向け
**向いている人:** 外部公開サービス、受託案件、継続運用が必要なプロダクト。

**使うもの:**
- commercial readiness
- security rules
- release governance
- incident response
- support readiness
- policy as code

**最初にすること:** 公開前チェックリストを作り、品質ゲートと運用ルールをGitHub Actionsなどで自動化します。

## まずはこの使い方でOK

導入手順の詳細は [docs/adoption-guide.md](docs/adoption-guide.md) を参照しつつ、まずは次の7ステップで進めればOKです。

### Step 1: 全体像を読む
まず `README.md` を読みます。
このテンプレートが何を解決するか、どのファイルが何の役割かを把握します。

### Step 2: 導入手順を見る
次に `docs/adoption-guide.md` を読み、自分のRepositoryへどの範囲を導入するか決めます。
迷ったら Level 1 から始め、必要に応じて段階的に拡張します。

### Step 3: AIに渡すプロンプトを確認する
`PROMPT.md` または `PROMPT.txt` を開きます。
AIへ依頼するときの必須ルール（日本語運用、ログ保存、ADR記録）を確認します。

### Step 4: Issueを作る
作りたいもの、直したいもの、相談したいことをIssueにします。
Issueがあると、AIと人間の作業範囲や完了条件を合わせやすくなります。

### Step 5: AIに依頼する
`PROMPT.md` とIssue URLを一緒にAIへ渡します。
必要に応じて `docs/adoption-guide.md` も渡すと、導入作業の精度が上がります。

### Step 6: 作業ログを残す
作業が進んだら `docs/templates/work-log-template.md` を使って記録します。
「何をしたか」「次に何をするか」を残すことで、あとから再開しやすくなります。

### Step 7: PRを作る
変更内容をPRでまとめ、レビューしやすい状態にします。
PR本文は日本語で記録し、必要なら判断理由をADRにリンクします。

## AIに渡すファイルの選び方

全部のファイルを毎回AIに渡す必要はありません。目的に合わせて必要最小限を渡すと、依頼の精度が上がります。

### 迷ったらこれだけ渡す
- `PROMPT.md`
- 対象IssueのURL
- 作業内容

### 導入作業を頼む場合
- `PROMPT.md`
- `docs/adoption-guide.md`
- `README.md`

### コードレビューを頼む場合
- `PROMPT.md`
- 対象PRのURL
- `docs/core/ai-agent-rules.md`
- `docs/core/decision-traceability-rules.md`

### 商用利用を見据える場合
- `PROMPT.md`
- `docs/core/commercial-readiness.md`
- `docs/core/security-rules.md`
- `docs/core/release-management-rules.md`

## AIに依頼するときの例

以下をCodexやChatGPTに貼り付けます。

AIにそのまま渡す基本プロンプトは [PROMPT.md](PROMPT.md) です。コピペしやすいテキスト版は [PROMPT.txt](PROMPT.txt) です。

```text
このRepositoryの開発ルールに従って作業してください。

参照:
- docs/ai-protocol/PROMPT.md

対象Issue:
{{ISSUE_URL}}

作業内容:
{{TASK_DESCRIPTION}}

必ず守ること:
- PR本文は日本語
- commit messageは日本語
- 作業ログを残す
- AIに依頼したプロンプトを記録する
- 重要な判断はADRに残す
```

- `{{ISSUE_URL}}` は対象Issueのリンクに置き換えます（例: `https://github.com/your-org/your-repo/issues/12`）。
- `{{TASK_DESCRIPTION}}` はAIに実行してほしい作業内容に置き換えます（例: `ログイン画面のバリデーションエラー表示を改善`）。

## 主なファイルと役割

| ファイル / ディレクトリ | 役割 |
|---|---|
| `PROMPT.md` | AIに渡す基本ルール |
| `PROMPT.txt` | コピペしやすいテキスト版 |
| `docs/core/` | 共通の開発ルール |
| `docs/templates/` | Issue、PR、作業ログなどの雛形 |
| `docs/ai-prompts/` | AIに渡したプロンプトの保存場所 |
| `docs/adr/` | 重要な判断を記録する場所 |
| `.github/` | GitHub上のIssue/PRテンプレートや設定 |
| `scripts/` | チェック用スクリプト |

導入手順の詳細は [docs/adoption-guide.md](docs/adoption-guide.md) を参照してください。

## 基本ワークフロー

Issue → Discussion → RFC/PRD → ADR → 実装PR → リリースノート → インシデント/RCA

- RFC/PRDは「実装前の提案書」です。
- ADRは「重要な判断理由の記録」です。
- RCAは「問題の根本原因の分析」です。

## よくある使い方

### 個人開発で使う
まず `PROMPT.md` と `docs/templates/` を使い、Issueと作業ログを残しながら進めます。

### 学生のチーム開発で使う
`docs/templates/` と `.github/` を使って、Issue/PRの書式をそろえます。レビュー練習にも使えます。

### AIにコードを書いてもらう時に使う
`PROMPT.md` と `docs/ai-prompts/` を使います。依頼内容と出力結果を対応付けて残します。

### AIにレビューしてもらう時に使う
PRリンクと変更方針をAIに渡し、コメントを記録します。必要なら `docs/adr/` に判断を残します。

### 商用サービスを作る時に使う
`docs/core/` と `scripts/`、GitHub Actionsを使って品質ゲートを強化します。

### 別のAIに作業を引き継ぐ時に使う
`docs/ai-prompts/`、Issue、PR、作業ログを渡します。handoff（引き継ぎメモ）を作るとさらにスムーズです。

## 商用利用を見据えた使い方

このテンプレートは、次の4層を組み合わせて運用できます。

- Core: 全体で共通のルール
- Language Overlay: 言語別のルール（TypeScript/Pythonなど）
- Project Overlay: プロダクト種別のルール（Web/API/SaaSなど）
- Commercial Layer: 商用運用向けの監査・法務・品質ルール

商用導入では、Policy as Code（ポリシーをコード化して自動チェックする考え方）が重要です。ルールを人の記憶に頼らず、CIやGitHub Actionsで継続的に確認します。

## GitHub日本語運用ポリシー

本テンプレートでは、以下を日本語で統一する方針です。

- PR本文
- Issue本文
- Discussion
- commit message
- レビューコメント
- リリースノート
- ADR

## 用語集

- **Repository**: プロジェクトのファイルや履歴をまとめて管理する場所です。
- **Issue**: 「やること」「課題」「相談」を1件ずつ管理するチケットです。
- **PR / Pull Request**: 変更内容を共有し、レビューを依頼する仕組みです。
- **commit**: 変更を小さな単位で履歴として保存する操作です。
- **branch**: 変更作業を分けるための作業ラインです。
- **README**: プロジェクトの説明書です。最初に読む入口です。
- **docs**: 仕様書や運用ルールなどの文書置き場です。
- **ADR**: 重要な設計判断と理由を残す記録です。
- **AI prompt**: AIに渡す依頼文のことです。
- **作業ログ**: その日に何をしたかを残すメモです。
- **handoff**: 別の人やAIに作業を引き継ぐための説明です。
- **CI**: 変更のたびにテストやチェックを自動実行する仕組みです。
- **GitHub Actions**: GitHub上でCIを実行できる自動化機能です。
- **commercial readiness**: 商用公開に必要な品質・運用・サポート準備のことです。
- **policy as code**: ルールを文章だけでなくコード化し、自動チェックする方法です。

## 注意点

- AIの出力をそのまま信用しない
- 重要な情報をAIチャットだけに残さない
- 個人情報や秘密情報をAIに渡さない
- 実装前にIssueで目的を整理する
- 分からない言葉が出たら用語集を見る
- 最初から全部使おうとしなくてよい

## 次にやること

1. [docs/adoption-guide.md](docs/adoption-guide.md) を開き、導入レベル（Level 1〜3）を決める。
2. [PROMPT.md](PROMPT.md) または [PROMPT.txt](PROMPT.txt) を確認し、AIへの依頼文を準備する。
3. 最初のIssueを作成し、`PROMPT.md` + Issue URL + 作業内容をAIに渡して小さく開始する。


## ライセンス

MIT

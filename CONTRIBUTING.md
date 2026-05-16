# Contributing Guide

本プロジェクトへのコントリビュートありがとうございます。OSS利用者と貢献者の体験向上を重視します。

## Local setup
- Node.js 18+ と npm を利用
- 依存関係: `npm install`

## Build / Test
- Build: `npm run build:create-ai-native-dev`
- Test: `npm test`
- Docs validation: `bash scripts/validate-docs.sh`
- Secret scan: `bash scripts/check-secrets.sh`

## PRルール
- 変更理由、影響範囲、テスト結果を明記
- 生成物に secret / token / credential を含めない
- セキュリティ脆弱性は公開Issueに書かず `SECURITY.md` の導線に従う

## Branch / Commit
- 推奨ブランチ: `feat/*`, `fix/*`, `docs/*`, `chore/*`
- 推奨コミット: Conventional Commits (`feat:`, `fix:`, `docs:`)

## Issueの選び方
- first issue は docs, fixtures, test の小さな改善から始める
- 大きな仕様変更は Issue で合意後に着手

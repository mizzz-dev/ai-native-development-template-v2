# governance-check.yml template
PR向けに `npm run build:create-ai-native-dev` と `node packages/create-ai-native-dev/dist/cli.js dashboard --json` と `node packages/create-ai-native-dev/dist/cli.js enforce policy --dry-run` を実行し、secret scan/docs validation/manual approval gate を組み合わせるテンプレート。

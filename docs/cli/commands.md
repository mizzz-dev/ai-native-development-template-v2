# CLI Commands
- create-ai-native-dev init [--dry-run] [--profile generic|react|nextjs|cpp]
- create-ai-native-dev doctor

## 新規コマンド
- `create-ai-native-dev list profiles`
- `create-ai-native-dev doctor --assurance`


## Tool Commands (MVP)
- `create-ai-native-dev list tools [--category <name>]`
- `create-ai-native-dev add tool <name> --dry-run`
- `create-ai-native-dev doctor --tools`

- `create-ai-native-dev add workflow <react|nextjs|cpp|python|go|security|sbom> --dry-run`
- `create-ai-native-dev add profile <react|aws|postgres|playwright|opentelemetry> --dry-run`
- `create-ai-native-dev doctor --release`
- `create-ai-native-dev doctor --rollback`
- `create-ai-native-dev doctor --governance`

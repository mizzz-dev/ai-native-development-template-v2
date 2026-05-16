# Tool Risk Classification

評価観点: data sensitivity / secret exposure / SaaS dependency / MCP compatibility / write risk / production impact / auditability / offline compatibility / lock-in / cost risk

## Risk Level
- Low
- Medium
- High
- Restricted

## ルール
- High / Restricted は人間承認必須
- Restricted は高保証・機密環境で原則禁止または代替必須
- MCP write操作は原則人間承認必須
- 本番環境操作はAI/MCPに任せない
- secretやtokenをCLI・Issue・PRに貼らない

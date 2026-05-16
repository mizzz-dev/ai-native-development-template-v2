# MCP Integration
MCPは明示有効化のみ。権限は最小化し、操作ログを残す。

## High Assurance MCP制約
read-onlyを基本とし、write操作は人間承認と操作ログを必須とする。


## Tool Permission Matrix
MCPの運用テンプレートは `docs/templates/mcp-tool-permission-matrix-template.md` を使用する。
write操作は人間承認必須。production操作は禁止。

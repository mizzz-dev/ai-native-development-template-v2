# Policy as Code

policy as codeは「保証」ではなく、検証可能性と監査可能性を高める仕組み。

- high assuranceではhuman approval必須
- MCP write操作は原則禁止または承認必須
- 本番操作をAI/MCPに委任しない
- secret/tokenをpolicyへ直書きしない

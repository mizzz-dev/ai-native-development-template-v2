# Tool Selection Matrix

| Profile | 推奨 | 任意 | 避けるべき | MCP | 外部SaaS |
|---|---|---|---|---|---|
| Solo Developer | GitHub, Notion, Playwright | Sentry | 多重SaaS監視 | Read中心 | 条件付き可 |
| Startup SaaS | GitHub, Linear, Datadog, Sentry | Figma | 監査不能ツール | Read中心+承認Write | 可 |
| Product Team | GitHub, Jira/Linear, Confluence, OTel | Langfuse | 無承認Write連携 | 承認制 | 可 |
| Enterprise | GitHub Enterprise, Entra ID, SIEM | 内部IDP | 監査ログ欠如SaaS | 厳格承認 | 制限付き |
| High Assurance | self-host中心, GitHub+CodeQL, Trivy | 内部Wiki | Restricted SaaS | Read中心 | 原則不可 |
| Offline/Air-gapped | Jenkins, GitLab self-host, MkDocs | 内部MCP | 外部API依存 | ローカルのみ | 不可 |

詳細は `docs/tools/profiles/` を参照。

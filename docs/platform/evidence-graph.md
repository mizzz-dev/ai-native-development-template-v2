# Evidence Graph
フロー: prompt summary -> AI generated change -> review -> approval -> release -> rollback。
追跡対象: PR, issue, workflow, AI review, MCP operation, release, rollback。
機密保護: prompt全文・secret・tokenは保存しない。
high assurance: reviewer/approver/evidence linkを必須。

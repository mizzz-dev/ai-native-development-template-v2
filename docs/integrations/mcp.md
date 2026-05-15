# MCP Integration Policy

## 利用目的
Linear/Notion/GitHubの更新・参照を安全に補助する。

## 利用可能
- Linear MCP
- Notion MCP
- GitHub MCP

## 利用禁止
- secret読取
- 本番DB直接操作
- AI単独のIssue close / production deploy / release作成

## チェックリスト
- 導入前: 権限、接続先、禁止操作、監査ログ先を定義
- 利用後: 操作内容、理由、結果、実行者をNotionまたは作業ログに記録

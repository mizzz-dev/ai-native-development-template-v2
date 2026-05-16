```yaml
id: sample-policy
version: 1
rules:
  - key: human_approval
    required: true
  - key: secret_in_policy
    required: false
    action: deny
notes:
  - policyは保証ではなく検証可能性を高める
  - 導入先に応じて項目を具体化する
```

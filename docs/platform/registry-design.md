# Registry Design

registryはstack/tool/workflow/policyをCLIから参照し、plugin化しやすい拡張構造を提供する。

## structure
- registry/stacks/
- registry/tools/
- registry/workflows/
- registry/policies/

## entry fields
- id
- name
- category
- description
- risk level
- high assurance compatibility
- offline compatibility
- generated files
- required evidence
- prohibited operations

#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

fail() {
  echo "[validate-docs] ERROR: $1" >&2
  exit 1
}

# 1) README must link to key documents that exist.
required_links=(
  "docs/adoption-guide.md"
  "docs/core/development-protocol.md"
  "docs/core/quality-gates.md"
  "docs/core/evidence-policy.md"
  "docs/integrations/linear.md"
  "docs/integrations/notion.md"
  "docs/integrations/mcp.md"
  "PROMPT.md"
)

for link in "${required_links[@]}"; do
  if ! rg -q "${link}" README.md; then
    fail "README.md missing link reference: ${link}"
  fi
  if [[ ! -f "$link" ]]; then
    fail "Linked file does not exist: ${link}"
  fi
done

# 2) Core directory structure check.
for dir in docs/core docs/integrations docs/stacks docs/templates; do
  [[ -d "$dir" ]] || fail "Missing required directory: $dir"
done

# 3) Basic markdown health check: no empty files in docs/ and top-level docs.
empty_files=$(find docs -type f -name '*.md' -size 0)
if [[ -n "${empty_files}" ]]; then
  echo "${empty_files}" >&2
  fail "Found empty markdown files"
fi


# 4) Relative markdown link check (local files only).
# Matches [text](path) where path does not start with http/mailto/#.
while IFS=: read -r file _; do
  while IFS= read -r target; do
    clean_target="${target%%#*}"
    clean_target="${clean_target%%\?*}"
    [[ -z "$clean_target" ]] && continue
    [[ "$clean_target" =~ ^https?:// ]] && continue
    [[ "$clean_target" =~ ^mailto: ]] && continue
    [[ "$clean_target" =~ ^# ]] && continue

    dir="$(dirname "$file")"
    if [[ ! -e "$dir/$clean_target" ]]; then
      fail "Broken relative link in $file -> $target"
    fi
  done < <(rg -o '\[[^]]+\]\(([^)]+)\)' "$file" -r '$1')
done < <(find . -type f -name '*.md' -not -path './.git/*' -print)

echo "[validate-docs] OK"

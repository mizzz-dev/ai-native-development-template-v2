#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

if command -v gitleaks >/dev/null 2>&1; then
  gitleaks detect --no-git --source . --redact --exit-code 1
  echo "[check-secrets] OK (gitleaks)"
  exit 0
fi

patterns=(
  'AKIA[0-9A-Z]{16}'
  'ASIA[0-9A-Z]{16}'
  'ghp_[A-Za-z0-9]{36}'
  'github_pat_[A-Za-z0-9_]{20,}'
  'xox[baprs]-[A-Za-z0-9-]{10,}'
  '-----BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY-----'
  '([Pp]assword|[Tt]oken|[Ss]ecret|API[_-]?KEY)\s*[:=]\s*['"'"'" ]?[A-Za-z0-9_\-]{12,}'
)

for pat in "${patterns[@]}"; do
  if rg -n -I -P --glob '!.git/**' --glob '!node_modules/**' -- "$pat" . >/tmp/secret_matches.txt; then
    echo "[check-secrets] Potential secret detected by pattern: $pat" >&2
    cat /tmp/secret_matches.txt >&2
    exit 1
  fi
done

echo "[check-secrets] OK (heuristic scan)"

#!/usr/bin/env bash
set -euo pipefail
MODE=${1:-strict}
MSG=${2:-$(git log -1 --pretty=%s)}
if [[ "$MSG" =~ ^Merge\  ]] || [[ "$MSG" =~ ^Revert\  ]] || [[ "$MSG" =~ bot ]]; then
  echo "除外対象コミットです"; exit 0
fi
SUMMARY="$MSG"
if [[ "$MSG" == *":"* ]]; then SUMMARY="${MSG#*: }"; fi
if python - <<'PYC' "$SUMMARY"
import re,sys
s=sys.argv[1]
raise SystemExit(0 if re.search(r'[ぁ-んァ-ン一-龯]', s) else 1)
PYC
then
  echo "日本語要約を検出しました"; exit 0
fi
if [[ "$MODE" == "dry-run" ]]; then echo "警告: 日本語要約がありません"; exit 0; fi
echo "エラー: commit message の要約に日本語を含めてください"; exit 1

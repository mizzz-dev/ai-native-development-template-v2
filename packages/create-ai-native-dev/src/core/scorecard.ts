import fs from 'node:fs';

type Item = { name: string; path: string; score: number };
export function evaluateScorecard(cwd: string) {
  const items: Item[] = [
    { name: 'README', path: 'README.md', score: 0 },
    { name: 'PROMPT', path: 'PROMPT.md', score: 0 },
    { name: 'PR Template', path: '.github/PULL_REQUEST_TEMPLATE.md', score: 0 },
    { name: 'CODEOWNERS', path: '.github/CODEOWNERS', score: 0 },
    { name: 'docs/core', path: 'docs/core', score: 0 },
    { name: 'evidence policy', path: 'docs/core/evidence-policy.md', score: 0 },
    { name: 'quality gates', path: 'docs/core/quality-gates.md', score: 0 },
    { name: 'security policy', path: 'docs/core/security-policy.md', score: 0 },
    { name: 'GitHub Actions', path: '.github/workflows', score: 0 },
    { name: 'secret scan', path: 'scripts/check-secrets.sh', score: 0 },
    { name: 'Linear/Notion/MCP/Figma docs', path: 'docs/integrations', score: 0 },
    { name: 'Stack Profile docs', path: 'docs/tools/toolchain-profiles.md', score: 0 },
  ];
  for (const i of items) i.score = fs.existsSync(`${cwd}/${i.path}`) ? 2 : 0;
  const raw = items.reduce((a, b) => a + b.score, 0);
  const max = items.length * 3;
  const total = Math.round((raw / max) * 100);
  const maturity = total < 40 ? 'Not Ready' : total < 60 ? 'Basic' : total < 80 ? 'Team Ready' : 'High Quality';
  return { items, total, maturity };
}

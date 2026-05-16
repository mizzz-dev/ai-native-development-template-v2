import fs from 'node:fs';
import path from 'node:path';

type Level = 0 | 1 | 2 | 3;
export type ScoreItem = { name: string; score: Level; note: string };

const exists = (cwd: string, rel: string) => fs.existsSync(path.join(cwd, rel));
const countFiles = (cwd: string, rel: string) => {
  const p = path.join(cwd, rel);
  if (!fs.existsSync(p)) return 0;
  const st = fs.statSync(p);
  if (st.isFile()) return 1;
  if (!st.isDirectory()) return 0;
  return fs.readdirSync(p).length;
};

function scoreReadme(cwd: string): ScoreItem {
  if (!exists(cwd, 'README.md')) return { name: 'README', score: 0, note: 'README.md がありません' };
  const body = fs.readFileSync(path.join(cwd, 'README.md'), 'utf-8');
  if (body.length < 200) return { name: 'README', score: 1, note: 'READMEが短く導入情報が不足' };
  if (body.includes('docs/')) return { name: 'README', score: 3, note: 'READMEから詳細docsへ誘導あり' };
  return { name: 'README', score: 2, note: 'READMEはあるがdocs導線が弱い' };
}

function scorePresence(cwd: string, name: string, rel: string): ScoreItem {
  if (!exists(cwd, rel)) return { name, score: 0, note: `${rel} がありません` };
  const lines = fs.statSync(path.join(cwd, rel)).isFile()
    ? fs.readFileSync(path.join(cwd, rel), 'utf-8').split('\n').filter((l: string) => l.trim()).length
    : countFiles(cwd, rel);
  if (lines <= 2) return { name, score: 1, note: `${rel} は存在するが内容が最小限` };
  if (lines <= 8) return { name, score: 2, note: `${rel} は実務利用可能な最小構成` };
  return { name, score: 3, note: `${rel} は高品質な内容/構成` };
}

export function evaluateScorecard(cwd: string) {
  const items: ScoreItem[] = [
    scoreReadme(cwd),
    scorePresence(cwd, 'PROMPT', 'PROMPT.md'),
    scorePresence(cwd, 'PR Template', '.github/PULL_REQUEST_TEMPLATE.md'),
    scorePresence(cwd, 'CODEOWNERS', '.github/CODEOWNERS'),
    scorePresence(cwd, 'docs/core', 'docs/core'),
    scorePresence(cwd, 'evidence policy', 'docs/core/evidence-policy.md'),
    scorePresence(cwd, 'quality gates', 'docs/core/quality-gates.md'),
    scorePresence(cwd, 'security policy', 'docs/core/security-policy.md'),
    scorePresence(cwd, 'GitHub Actions', '.github/workflows'),
    scorePresence(cwd, 'secret scan', 'scripts/check-secrets.sh'),
    scorePresence(cwd, 'Linear/Notion/MCP/Figma docs', 'docs/integrations'),
    scorePresence(cwd, 'Stack Profile docs', 'docs/tools/toolchain-profiles.md'),
    scorePresence(cwd, 'tool integration catalog', 'docs/tools/tool-integration-catalog.md'),
    scorePresence(cwd, 'tool selection matrix', 'docs/tools/tool-selection-matrix.md'),
    scorePresence(cwd, 'tool risk classification', 'docs/tools/tool-risk-classification.md'),
  ];
  const raw = items.reduce((acc, item) => acc + item.score, 0);
  const max = items.length * 3;
  const total = Math.round((raw / max) * 100);
  const maturity = total <= 39 ? 'Not Ready' : total <= 59 ? 'Basic' : total <= 79 ? 'Team Ready' : 'High Quality';
  return { items, total, maturity };
}


export function evaluateAssuranceScorecard(cwd: string) {
  const checks: Array<[string,string]> = [
    ['identity and access', 'docs/assurance/zero-trust-development.md'],
    ['branch protection', 'docs/core/branch-lifecycle-rules.md'],
    ['change control', 'docs/assurance/change-control-policy.md'],
    ['CI/CD security', 'docs/assurance/secure-sdlc-policy.md'],
    ['secret management', 'docs/security/permissions-and-secrets.md'],
    ['dependency security', 'docs/assurance/supply-chain-security.md'],
    ['SBOM / provenance', 'docs/assurance/supply-chain-security.md'],
    ['artifact signing', 'docs/assurance/supply-chain-security.md'],
    ['audit logging', 'docs/assurance/audit-evidence-matrix.md'],
    ['incident response', 'docs/assurance/incident-response-readiness.md'],
    ['rollback readiness', 'docs/runbooks/rollback.md'],
    ['data classification', 'docs/assurance/data-classification-policy.md'],
    ['AI/MCP governance', 'docs/assurance/high-assurance-profile.md'],
    ['release approval', 'docs/assurance/release-approval-policy.md'],
    ['observability', 'docs/catalog/observability-profiles.md'],
    ['backup / restore', 'docs/runbooks/disaster-recovery.md'],
  ];
  const items = checks.map(([n,r]) => scorePresence(cwd,n,r));
  const raw = items.reduce((a,i)=>a+i.score,0);
  const total = Math.round((raw / (items.length*3))*100);
  const maturity = total <= 39 ? 'Not Ready' : total <= 59 ? 'Basic' : total <= 79 ? 'Team Ready' : 'High Quality';
  return { items, total, maturity };
}

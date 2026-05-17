import fs from 'node:fs';
import path from 'node:path';
import { detectProject } from '../core/detectProject.js';
import { evaluateAssuranceScorecard, evaluateScorecard } from '../core/scorecard.js';

const checkList: Record<string, string[]> = {
  release: ['CI green policy','security scan policy','release note','changelog','version','rollback plan','migration plan','approval record','audit evidence','observability','incident contact','backup readiness','feature flag / kill switch'],
  rollback: ['rollback plan','backup / restore plan','migration rollback','feature flag','artifact retention','deployment history','release tagging','incident escalation'],
  governance: ['AI usage policy','MCP operation policy','prompt evidence','change control','release approval','CODEOWNERS','branch protection guidance','audit evidence','data classification','threat model','approved toolchain','golden path'],
};

export function doctorCommand(opts?: { assurance?: boolean; tools?: boolean; release?: boolean; rollback?: boolean; governance?: boolean }) {
  const cwd = process.cwd();
  const detection = detectProject(cwd);
  const score = opts?.assurance ? evaluateAssuranceScorecard(cwd) : evaluateScorecard(cwd);
  console.log('Detected stack:', detection.profile);
  console.log('Signals:', detection.signals.join(', ') || 'none');
  console.log(`Score: ${score.total}/100`);
  console.log('Maturity:', score.maturity);
  console.log('Category scores (0-3):');
  score.items.forEach((i) => console.log(`- ${i.name}: ${i.score} (${i.note})`));
  console.log('Recommendations:', score.items.filter((i) => i.score < 2).map((i) => i.name).join(', ') || 'No major gaps');

  if (opts?.tools) {
    const checks: Array<[string, string]> = [
      ['Tool catalog', 'docs/tools/tool-integration-catalog.md'],['Tool risk', 'docs/tools/tool-risk-classification.md'],['Tool matrix', 'docs/tools/tool-selection-matrix.md'],['MCP permission matrix template', 'docs/templates/mcp-tool-permission-matrix-template.md'],
    ];
    console.log('Tool doctor checks:');
    checks.forEach(([name, file]) => console.log(`- ${name}: ${fs.existsSync(path.join(cwd, file)) ? 'ok' : 'missing'} (${file})`));
  }

  if (opts?.release) { console.log('Release readiness checks:'); checkList.release.forEach((c)=>console.log(`- ${c}`)); }
  if (opts?.rollback) { console.log('Rollback readiness checks:'); checkList.rollback.forEach((c)=>console.log(`- ${c}`)); }
  if (opts?.governance) { console.log('Governance diagnostics checks:'); checkList.governance.forEach((c)=>console.log(`- ${c}`)); }
}

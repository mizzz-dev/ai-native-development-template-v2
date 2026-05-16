import fs from 'node:fs';
import path from 'node:path';
import { detectProject } from '../core/detectProject.js';
import { evaluateAssuranceScorecard, evaluateScorecard } from '../core/scorecard.js';

export function doctorCommand(opts?: { assurance?: boolean; tools?: boolean }) {
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
      ['Tool catalog', 'docs/tools/tool-integration-catalog.md'],
      ['Tool risk', 'docs/tools/tool-risk-classification.md'],
      ['Tool matrix', 'docs/tools/tool-selection-matrix.md'],
      ['MCP permission matrix template', 'docs/templates/mcp-tool-permission-matrix-template.md'],
    ];
    console.log('Tool doctor checks:');
    checks.forEach(([name, file]) => {
      const ok = fs.existsSync(path.join(cwd, file));
      console.log(`- ${name}: ${ok ? 'ok' : 'missing'} (${file})`);
    });
    console.log('- Warning rules: high-risk evidence, MCP write approval, secret handling, external SaaS approval');
  }
}

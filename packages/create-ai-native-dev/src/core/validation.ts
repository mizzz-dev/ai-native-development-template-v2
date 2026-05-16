import fs from 'node:fs';
import path from 'node:path';

type Status = 'PASS' | 'WARN' | 'FAIL';

type Check = {
  category: string;
  label: string;
  target: string;
  required: boolean;
  recommendation: string;
};

const checks: Check[] = [
  { category: 'core', label: 'README', target: 'README.md', required: true, recommendation: 'READMEを追加してください。' },
  { category: 'core', label: 'PROMPT', target: 'PROMPT.md', required: true, recommendation: 'PROMPT.mdを追加してください。' },
  { category: 'core', label: 'PR template', target: '.github/PULL_REQUEST_TEMPLATE.md', required: true, recommendation: 'PR templateを追加してください。' },
  { category: 'docs', label: 'docs/core', target: 'docs/core', required: true, recommendation: 'docs/core配下を整備してください。' },
  { category: 'policy', label: 'evidence policy', target: 'docs/core/evidence-policy.md', required: true, recommendation: 'evidence policy docsを追加してください。' },
  { category: 'policy', label: 'security policy', target: 'docs/core/security-policy.md', required: true, recommendation: 'security policy docsを追加してください。' },
  { category: 'quality', label: 'release readiness', target: 'docs/quality/release-readiness.md', required: false, recommendation: 'release readiness docsを追加してください。' },
  { category: 'quality', label: 'rollback readiness', target: 'docs/quality/rollback-readiness.md', required: false, recommendation: 'rollback readiness docsを追加してください。' },
  { category: 'governance', label: 'governance docs', target: 'docs/governance', required: false, recommendation: 'governance docsを追加してください。' },
  { category: 'security', label: 'MCP policy docs', target: 'docs/templates/policies/mcp-policy.yml.md', required: false, recommendation: 'MCP policy docsを追加してください。' },
  { category: 'workflow', label: 'workflow directory', target: '.github/workflows', required: false, recommendation: 'workflow directoryを追加してください。' },
  { category: 'assurance', label: 'high assurance docs', target: 'docs/assurance/high-assurance-profile.md', required: false, recommendation: 'high assurance docsを追加してください。' },
];

export function runValidation(): number {
  let hasFail = false;
  let hasWarn = false;
  checks.forEach((c) => {
    const found = fs.existsSync(path.join(process.cwd(), c.target));
    const status: Status = found ? 'PASS' : c.required ? 'FAIL' : 'WARN';
    if (status === 'FAIL') hasFail = true;
    if (status === 'WARN') hasWarn = true;
    const message = found ? `${c.label} exists` : `${c.label} missing`;
    console.log(`${status} | category=${c.category} | message=${message} | recommended action=${found ? 'none' : c.recommendation}`);
  });

  if (hasFail) return 1;
  if (hasWarn) return 2;
  return 0;
}

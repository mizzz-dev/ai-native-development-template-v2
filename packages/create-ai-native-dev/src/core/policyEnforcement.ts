import fs from 'node:fs';
import path from 'node:path';

type Rule = { category:string; label:string; target:string; required:boolean; fix:string };
const rules: Rule[] = [
  { category:'release policy', label:'release gate policy', target:'docs/templates/policies/release-gate-policy.yml.md', required:true, fix:'Add release gate policy template' },
  { category:'evidence policy', label:'evidence graph', target:'docs/platform/evidence-graph.md', required:true, fix:'Add evidence graph document' },
  { category:'MCP policy', label:'MCP policy', target:'docs/templates/policies/mcp-policy.yml.md', required:false, fix:'Add MCP policy template' },
  { category:'approval policy', label:'release approval policy', target:'docs/assurance/release-approval-policy.md', required:true, fix:'Add release approval policy' },
  { category:'AI usage policy', label:'AI provenance', target:'docs/platform/ai-provenance.md', required:true, fix:'Add AI provenance guidance' },
  { category:'dependency policy', label:'dependency policy', target:'docs/core/dependency-management.md', required:false, fix:'Add dependency policy' },
];

export function runPolicyEnforcement(cwd: string) {
  let hasFail = false;
  const violations = rules.map((r)=>{
    const ok = fs.existsSync(path.join(cwd,r.target));
    const severity = ok ? 'PASS' : r.required ? 'FAIL' : 'WARN';
    if (severity==='FAIL') hasFail = true;
    return { severity, category: r.category, message: ok ? `${r.label} exists` : `${r.label} is missing`, recommendedFix: ok ? 'none' : r.fix, target: r.target };
  });
  return { violations, exitCode: hasFail ? 1 : violations.some(v=>v.severity==='WARN') ? 2 : 0 };
}

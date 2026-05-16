import { buildGovernanceDashboard } from '../core/governanceDashboard.js';

export function dashboardCommand(json = false): number {
  const r = buildGovernanceDashboard(process.cwd());
  if (json) {
    console.log(JSON.stringify(r, null, 2));
    return 0;
  }
  console.log('AI-native Governance Dashboard');
  console.log('Overall:');
  console.log(`- Readiness Score: ${r.readinessScore} / 100`);
  console.log(`- Governance Score: ${r.governanceScore} / 100`);
  console.log(`- Level: ${r.level}`);
  console.log('Findings:');
  r.findings.forEach((f)=>console.log(`- ${f.severity}: ${f.message}`));
  console.log('Recommended actions:');
  (r.recommendedActions.length ? r.recommendedActions : ['none']).forEach((a)=>console.log(`- ${a}`));
  return 0;
}

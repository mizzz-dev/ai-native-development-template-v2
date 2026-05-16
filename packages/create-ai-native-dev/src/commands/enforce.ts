import { runPolicyEnforcement } from '../core/policyEnforcement.js';

export function enforcePolicyCommand(dryRun = false): number {
  const result = runPolicyEnforcement(process.cwd());
  console.log('AI-native Policy Enforcement');
  if (dryRun) console.log('[dry-run] local file check only. no mutation.');
  console.log('Violations:');
  result.violations.forEach((v)=>console.log(`- ${v.severity}: ${v.message}`));
  console.log('Recommended actions:');
  result.violations.filter((v)=>v.severity!=='PASS').forEach((v)=>console.log(`- ${v.recommendedFix}`));
  console.log('CI integration guidance: run this command in PR workflow and fail on exit code 1.');
  console.log('Exit code policy: 0=pass, 2=warning, 1=fail.');
  return result.exitCode === 2 ? 0 : result.exitCode;
}

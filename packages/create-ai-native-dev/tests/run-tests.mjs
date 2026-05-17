import assert from 'node:assert/strict';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');
const core = await import(path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/core/detectProject.js'));
const gen = await import(path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/core/generatePlan.js'));
const score = await import(path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/core/scorecard.js'));
const wf = await import(path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/core/workflowApply.js'));
const dash = await import(path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/core/governanceDashboard.js'));
const policy = await import(path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/core/policyEnforcement.js'));

const fixtures = path.join(repoRoot, 'fixtures');
assert.equal(core.detectProject(path.join(fixtures, 'react')).profile, 'react');
assert.equal(core.detectProject(path.join(fixtures, 'nextjs')).profile, 'nextjs');
assert.equal(core.detectProject(path.join(fixtures, 'cpp')).profile, 'cpp');
assert.equal(core.detectProject(path.join(fixtures, 'empty')).profile, 'generic');
assert.match(gen.generatePlan('generic')[0], /Profile: generic/);
assert.ok(score.evaluateScorecard(repoRoot).total >= 0);
assert.ok(wf.getWorkflowConfig('react'));
assert.ok(dash.buildGovernanceDashboard(repoRoot).governanceScore >= 0);
assert.ok([0,1,2].includes(policy.runPolicyEnforcement(repoRoot).exitCode));

const cli = path.resolve(repoRoot, 'packages/create-ai-native-dev/dist/cli.js');
const cmds = [
  'init --dry-run','doctor','doctor --assurance','doctor --tools','doctor --release','doctor --rollback','doctor --governance','list profiles','list tools','add workflow react --dry-run','add profile aws --dry-run','apply workflow react --dry-run','validate','dashboard','dashboard --json','enforce policy','enforce policy --dry-run'
];
for (const c of cmds) {
  execSync(`node ${cli} ${c}`, { cwd: repoRoot, stdio: 'pipe' });
}
console.log('All CLI/core tests passed');

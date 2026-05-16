import { describe, it, expect } from 'vitest';
import { detectProject } from '../src/core/detectProject.js';
import { generatePlan } from '../src/core/generatePlan.js';
import { evaluateScorecard } from '../src/core/scorecard.js';
import { getWorkflowConfig } from '../src/core/workflowApply.js';
import { buildGovernanceDashboard } from '../src/core/governanceDashboard.js';
import { runPolicyEnforcement } from '../src/core/policyEnforcement.js';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'fixtures');

describe('core', () => {
  it('detectProject works for fixtures', () => {
    expect(detectProject(path.join(root, 'react')).profile).toBe('react');
    expect(detectProject(path.join(root, 'nextjs')).profile).toBe('nextjs');
    expect(detectProject(path.join(root, 'cpp')).profile).toBe('cpp');
    expect(detectProject(path.join(root, 'empty')).profile).toBe('generic');
  });
  it('generatePlan returns profile plan', () => {
    expect(generatePlan('generic')[0]).toContain('Profile: generic');
  });
  it('scorecard runs', () => {
    const r = evaluateScorecard(path.resolve(process.cwd()));
    expect(r.total).toBeGreaterThanOrEqual(0);
  });
  it('workflow config exists', () => {
    expect(getWorkflowConfig('react')).toBeTruthy();
  });
  it('dashboard/policy run', () => {
    const d = buildGovernanceDashboard(path.resolve(process.cwd()));
    expect(d.governanceScore).toBeGreaterThanOrEqual(0);
    const p = runPolicyEnforcement(path.resolve(process.cwd()));
    expect([0,1,2]).toContain(p.exitCode);
  });
});

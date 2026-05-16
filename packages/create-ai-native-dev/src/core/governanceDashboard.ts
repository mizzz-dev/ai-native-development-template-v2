import fs from 'node:fs';
import path from 'node:path';
import { evaluateScorecard } from './scorecard.js';

type Sev = 'PASS'|'WARN';
export type Finding = { severity: Sev; category: string; message: string; recommendedAction: string };

const ex = (cwd:string, rel:string)=>fs.existsSync(path.join(cwd,rel));

export function buildGovernanceDashboard(cwd: string) {
  const score = evaluateScorecard(cwd);
  const findings: Finding[] = [];
  const add = (ok:boolean, category:string, passMsg:string, warnMsg:string, action:string)=> findings.push({severity:ok?'PASS':'WARN',category,message:ok?passMsg:warnMsg,recommendedAction:ok?'none':action});

  add(ex(cwd,'docs/quality/rollback-readiness.md'),'rollback','rollback docs exist','missing rollback docs','Add rollback readiness docs');
  add(ex(cwd,'docs/assurance/release-approval-policy.md'),'approval','approval policy exists','missing approval policy','Add release approval policy');
  add(ex(cwd,'docs/templates/policies/mcp-policy.yml.md'),'mcp','MCP policy exists','missing MCP policy','Add MCP policy template');
  add(ex(cwd,'.github/workflows'),'workflow','workflow coverage exists','workflow coverage is missing','Add workflow templates');
  add(ex(cwd,'docs/platform/evidence-graph.md'),'evidence','evidence graph docs exist','missing evidence docs','Add evidence graph docs');
  add(ex(cwd,'docs/assurance/threat-modeling-guide.md'),'threat-model','threat model guide exists','stale threat model may exist','Review and refresh threat model evidence');

  const missingEvidence = findings.filter(f=>f.category==='evidence'&&f.severity==='WARN').length;
  const governanceScore = Math.max(0, Math.min(100, score.total - (findings.filter(f=>f.severity==='WARN').length * 4)));
  const level = governanceScore <= 39 ? 'Not Ready' : governanceScore <= 59 ? 'Basic' : governanceScore <= 79 ? 'Team Ready' : 'High Quality';

  return {
    readinessScore: score.total,
    governanceScore,
    level,
    staleDocs: findings.some(f=>f.category==='threat-model'&&f.severity==='WARN'),
    missingEvidence,
    missingRollbackDocs: !ex(cwd,'docs/quality/rollback-readiness.md'),
    missingApprovalPolicy: !ex(cwd,'docs/assurance/release-approval-policy.md'),
    missingMcpPolicy: !ex(cwd,'docs/templates/policies/mcp-policy.yml.md'),
    workflowCoverage: ex(cwd,'.github/workflows'),
    policyDrift: findings.some(f=>f.severity==='WARN'),
    highRiskToolUsage: ex(cwd,'docs/tools/tool-risk-classification.md'),
    externalSaasUsage: ex(cwd,'docs/tools/tool-selection-matrix.md'),
    airGappedIncompatibility: false,
    findings,
    recommendedActions: findings.filter(f=>f.severity==='WARN').map(f=>f.recommendedAction),
  };
}

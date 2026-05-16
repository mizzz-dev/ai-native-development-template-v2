#!/usr/bin/env node
import { initCommand } from './commands/init.js';
import { doctorCommand } from './commands/doctor.js';
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const cmd = args[0];
const sub = args[1];
const get = (flag: string) => args.includes(flag);
const profile = (() => { const i = args.indexOf('--profile'); return i >= 0 ? args[i + 1] : undefined; })();
const category = (() => { const i = args.indexOf('--category'); return i >= 0 ? args[i + 1] : undefined; })();
const toolName = args[2];

const toolCatalog: Record<string, Array<{name:string;risk:string;ha:boolean;airgap:boolean}>> = {
  security: [{ name: 'semgrep', risk: 'Medium', ha: true, airgap: true }, { name: 'snyk', risk: 'High', ha: false, airgap: false }],
  design: [{ name: 'figma', risk: 'High', ha: false, airgap: false }],
  observability: [{ name: 'sentry', risk: 'High', ha: false, airgap: false }],
  project: [{ name: 'linear', risk: 'Medium', ha: false, airgap: false }, { name: 'github-issues', risk: 'Low', ha: true, airgap: true }],
};

const workflowCatalog: Record<string, {planned:string;tools:string;security:string}> = {
  react:{planned:'.github/workflows/react-quality.yml',tools:'eslint, tsc, jest/vitest, playwright, trivy, syft',security:'権限最小化・secret最小化・PR/merge時の実行トリガ確認'},
  nextjs:{planned:'.github/workflows/nextjs-quality.yml',tools:'eslint, tsc, jest, playwright, lighthouse-ci, syft',security:'preview deployment token分離・artifactの漏えい防止'},
  cpp:{planned:'.github/workflows/cpp-quality.yml',tools:'cmake, ctest, clang-tidy, sanitizer, syft',security:'compiler matrixの供給元固定・外部binary実行制限'},
  python:{planned:'.github/workflows/python-quality.yml',tools:'ruff, mypy, pytest, pip-audit, syft',security:'依存lock固定・private index token保護'},
  go:{planned:'.github/workflows/go-quality.yml',tools:'go test, go vet, golangci-lint, govulncheck, syft',security:'module proxy設定・sumdb検証・権限最小化'},
  security:{planned:'.github/workflows/security-scan.yml',tools:'gitleaks, semgrep, dependency scan, trivy, checkov',security:'誤検知抑制とhigh severity fail gate設定'},
  sbom:{planned:'.github/workflows/sbom-provenance.yml',tools:'syft, cosign, slsa generator',security:'署名鍵管理は手動承認・公開前ゲート必須'},
};

function listTools(cat?: string) { /* unchanged */
  const entries = cat ? { [cat]: toolCatalog[cat] ?? [] } : toolCatalog;
  console.log('Tool catalog:');
  Object.entries(entries).forEach(([k, tools]) => {
    if (!tools.length) return;
    console.log(`- ${k}`);
    tools.forEach((t) => console.log(`  - ${t.name} | risk=${t.risk} | high-assurance=${t.ha ? 'yes' : 'no'} | air-gapped=${t.airgap ? 'yes' : 'no'}`));
  });
}

function addToolDryRun(name?: string) {
  if (!name) return console.log('Usage: create-ai-native-dev add tool <name> --dry-run');
  if (!get('--dry-run')) return console.log('Only --dry-run is supported. No API connection and no token input.');
  console.log(`[dry-run] add tool: ${name}`);
  console.log('Planned outputs: docs/templates/tool-adoption-plan-template.md, docs/templates/tool-risk-assessment-template.md, docs/templates/tool-integration-evidence-template.md');
  console.log('No overwrite without confirmation. No secret/token handling.');
}

function addWorkflowDryRun(name?: string) {
  if (!name) return console.log('Usage: create-ai-native-dev add workflow <react|nextjs|cpp|python|go|security|sbom> --dry-run');
  if (!get('--dry-run')) return console.log('MVPは--dry-runのみ対応です。実ファイルは生成しません。');
  const wf = workflowCatalog[name];
  if (!wf) return console.log(`Unsupported workflow: ${name}`);
  const conflict = fs.existsSync(path.join(process.cwd(), wf.planned));
  console.log(`[dry-run] add workflow: ${name}`);
  console.log(`Planned file: ${wf.planned}`);
  console.log(`Required tools: ${wf.tools}`);
  console.log(`Security notes: ${wf.security}`);
  console.log(`Conflict check: ${conflict ? 'existing file detected (manual merge required)' : 'no conflict'}`);
  console.log('No deployment / no secret registration / no cloud IAM update.');
}

function addProfileDryRun(name?: string) {
  if (!name) return console.log('Usage: create-ai-native-dev add profile <react|aws|postgres|playwright|opentelemetry> --dry-run');
  if (!get('--dry-run')) return console.log('MVPは--dry-runのみ対応です。');
  console.log(`[dry-run] add profile: ${name}`);
  console.log(`Planned outputs: docs/templates/checklist/${name}-profile-checklist.md (preview only)`);
  console.log('External API接続・token入力・secret登録は行いません。');
}

if (cmd === 'init') initCommand({ profile: profile as any, dryRun: get('--dry-run') });
else if (cmd === 'doctor') doctorCommand({ assurance: get('--assurance'), tools: get('--tools'), release: get('--release'), rollback: get('--rollback'), governance: get('--governance') });
else if (cmd === 'list' && sub === 'profiles') {
  console.log('Profile catalog:');
  console.log('- language, frontend, backend, mobile, desktop, infra, database, cloud, deploy, test, security, observability, data-ai, embedded-iot');
  console.log('See docs/catalog/stack-catalog.md');
} else if (cmd === 'list' && sub === 'tools') listTools(category);
else if (cmd === 'add' && sub === 'tool') addToolDryRun(toolName);
else if (cmd === 'add' && sub === 'workflow') addWorkflowDryRun(toolName);
else if (cmd === 'add' && sub === 'profile') addProfileDryRun(toolName);
else console.log('Usage: create-ai-native-dev <init|doctor|list profiles|list tools|add tool|add workflow|add profile> [--dry-run] [--assurance] [--tools] [--release] [--rollback] [--governance] [--category <name>] [--profile generic|react|nextjs|cpp]');

#!/usr/bin/env node
import { initCommand } from './commands/init.js';
import { doctorCommand } from './commands/doctor.js';

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

function listTools(cat?: string) {
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

if (cmd === 'init') initCommand({ profile: profile as any, dryRun: get('--dry-run') });
else if (cmd === 'doctor') doctorCommand({ assurance: get('--assurance'), tools: get('--tools') });
else if (cmd === 'list' && sub === 'profiles') {
  console.log('Profile catalog:');
  console.log('- language, frontend, backend, mobile, desktop, infra, database, cloud, deploy, test, security, observability, data-ai, embedded-iot');
  console.log('See docs/catalog/stack-catalog.md');
} else if (cmd === 'list' && sub === 'tools') listTools(category);
else if (cmd === 'add' && sub === 'tool') addToolDryRun(toolName);
else console.log('Usage: create-ai-native-dev <init|doctor|list profiles|list tools|add tool> [--dry-run] [--assurance] [--tools] [--category <name>] [--profile generic|react|nextjs|cpp]');

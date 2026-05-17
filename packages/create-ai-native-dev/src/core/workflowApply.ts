import fs from 'node:fs';
import path from 'node:path';

export type WorkflowName = 'react' | 'nextjs' | 'security' | 'sbom';

type WorkflowConfig = { template: string; output: string; description: string };

const WORKFLOW_MAP: Record<WorkflowName, WorkflowConfig> = {
  react: { template: 'react-quality.yml', output: '.github/workflows/react-quality.yml', description: 'React quality workflow' },
  nextjs: { template: 'nextjs-quality.yml', output: '.github/workflows/nextjs-quality.yml', description: 'Next.js quality workflow' },
  security: { template: 'security-scan.yml', output: '.github/workflows/security-scan.yml', description: 'Security scan workflow' },
  sbom: { template: 'sbom-provenance.yml', output: '.github/workflows/sbom-provenance.yml', description: 'SBOM and provenance workflow' },
};

export function getWorkflowConfig(name: string): WorkflowConfig | undefined {
  return WORKFLOW_MAP[name as WorkflowName];
}

function getTemplatePath(fileName: string): string {
  return path.join(process.cwd(), 'packages/create-ai-native-dev/src/templates/workflows', fileName);
}

export function applyWorkflow(name: string, dryRun: boolean): number {
  const config = getWorkflowConfig(name);
  if (!config) {
    console.error(`Unsupported workflow: ${name}`);
    console.error('Supported: react, nextjs, security, sbom');
    return 1;
  }

  const templatePath = getTemplatePath(config.template);
  if (!fs.existsSync(templatePath)) {
    console.error(`Template not found: ${templatePath}`);
    return 1;
  }

  const outPath = path.join(process.cwd(), config.output);
  const exists = fs.existsSync(outPath);

  console.log(`Workflow apply target: ${name}`);
  console.log(`Manifest:`);
  console.log(`- template: ${templatePath}`);
  console.log(`- output: ${config.output}`);
  console.log(`- description: ${config.description}`);
  console.log(`Conflict check: ${exists ? 'CONFLICT(existing file detected, skip)' : 'OK(no conflict)'}`);
  console.log('High assurance warning: human approval and audit evidence are required before merge.');
  console.log('Evidence guidance: record run logs, review result, and policy checks in PR evidence section.');
  console.log('Rollback guidance: remove generated workflow file and restore previous CI behavior manually.');

  if (dryRun) {
    console.log('[dry-run] No file changes were applied.');
    return exists ? 2 : 0;
  }

  if (exists) {
    console.log('Skipped due to existing file. This MVP does not overwrite existing workflows.');
    return 2;
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const content = fs.readFileSync(templatePath, 'utf-8');
  fs.writeFileSync(outPath, content);
  console.log(`Applied: ${config.output}`);
  return 0;
}

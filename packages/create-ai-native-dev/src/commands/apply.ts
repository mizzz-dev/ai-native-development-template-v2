import { applyWorkflow } from '../core/workflowApply.js';

export function applyCommand(args: string[]): number {
  const target = args[0];
  const name = args[1];
  const dryRun = args.includes('--dry-run');

  if (target !== 'workflow' || !name) {
    console.log('Usage: create-ai-native-dev apply workflow <react|nextjs|security|sbom> [--dry-run]');
    return 1;
  }

  return applyWorkflow(name, dryRun);
}

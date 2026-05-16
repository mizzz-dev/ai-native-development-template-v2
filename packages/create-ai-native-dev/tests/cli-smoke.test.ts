import { describe, it, expect } from 'vitest';
import { execSync } from 'node:child_process';
import path from 'node:path';

const cli = path.resolve(process.cwd(), 'packages/create-ai-native-dev/dist/cli.js');
const run = (args:string) => execSync(`node ${cli} ${args}`, { encoding: 'utf-8' });

describe('cli smoke', () => {
  it('commands run', () => {
    const outputs = [
      run('init --dry-run'),
      run('doctor'),
      run('doctor --assurance'),
      run('doctor --tools'),
      run('doctor --release'),
      run('doctor --rollback'),
      run('doctor --governance'),
      run('list profiles'),
      run('list tools'),
      run('add workflow react --dry-run'),
      run('add profile aws --dry-run'),
      run('apply workflow react --dry-run'),
      run('validate'),
      run('dashboard'),
      run('dashboard --json'),
      run('enforce policy'),
      run('enforce policy --dry-run'),
    ].join('\n');
    expect(outputs.length).toBeGreaterThan(0);
  });
});

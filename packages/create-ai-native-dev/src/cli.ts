#!/usr/bin/env node
import { initCommand } from './commands/init.js';
import { doctorCommand } from './commands/doctor.js';

const args = process.argv.slice(2);
const cmd = args[0];
const get = (flag: string) => args.includes(flag);
const profile = (() => { const i = args.indexOf('--profile'); return i >= 0 ? args[i + 1] : undefined; })();

if (cmd === 'init') initCommand({ profile: profile as any, dryRun: get('--dry-run') });
else if (cmd === 'doctor') doctorCommand();
else console.log('Usage: create-ai-native-dev <init|doctor> [--dry-run] [--profile generic|react|nextjs|cpp]');

import fs from 'node:fs';
import path from 'node:path';
import { ProfileId } from './profile.js';

export type Detection = { profile: ProfileId; signals: string[] };

const exists = (p: string) => fs.existsSync(p);
export function detectProject(cwd: string): Detection {
  const s: string[] = [];
  const pkgPath = path.join(cwd, 'package.json');
  if (exists(pkgPath)) s.push('package.json');
  const pkg = exists(pkgPath) ? JSON.parse(fs.readFileSync(pkgPath, 'utf-8')) : {};
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  if (deps.react) s.push('react dependency');
  if (deps.next) s.push('next dependency');
  if (exists(path.join(cwd, 'vite.config.ts')) || exists(path.join(cwd, 'vite.config.js'))) s.push('vite.config.*');
  if (exists(path.join(cwd, 'next.config.js')) || exists(path.join(cwd, 'next.config.mjs')) || exists(path.join(cwd, 'next.config.ts'))) s.push('next.config.*');
  if (exists(path.join(cwd, 'tsconfig.json'))) s.push('tsconfig.json');
  if (exists(path.join(cwd, 'CMakeLists.txt'))) s.push('CMakeLists.txt');
  if (exists(path.join(cwd, 'Makefile'))) s.push('Makefile');
  if (exists(path.join(cwd, 'meson.build'))) s.push('meson.build');
  if (fs.readdirSync(cwd).some((f: string) => f.endsWith('.cpp'))) s.push('*.cpp');
  if (fs.readdirSync(cwd).some((f: string) => f.endsWith('.hpp'))) s.push('*.hpp');
  if (exists(path.join(cwd, '.github/workflows'))) s.push('.github/workflows');
  if (exists(path.join(cwd, '.github/PULL_REQUEST_TEMPLATE.md'))) s.push('.github/PULL_REQUEST_TEMPLATE.md');
  if (exists(path.join(cwd, 'PROMPT.md'))) s.push('PROMPT.md');
  if (exists(path.join(cwd, 'docs/core/evidence-policy.md'))) s.push('docs/core/evidence-policy.md');

  if (s.includes('next dependency') || s.includes('next.config.*')) return { profile: 'nextjs', signals: s };
  if (s.includes('react dependency') || s.includes('vite.config.*')) return { profile: 'react', signals: s };
  if (s.some((x) => ['CMakeLists.txt', 'Makefile', 'meson.build', '*.cpp', '*.hpp'].includes(x))) return { profile: 'cpp', signals: s };
  return { profile: 'generic', signals: s };
}

import fs from 'node:fs';

export type ManifestItem = { path: string; status: 'create' | 'skip-conflict' };

export function buildManifest(targets: string[]): ManifestItem[] {
  return targets.map((p) => ({ path: p, status: fs.existsSync(p) ? 'skip-conflict' : 'create' }));
}

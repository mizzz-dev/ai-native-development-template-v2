import { ProfileId } from './profile.js';

export function generatePlan(profile: ProfileId) {
  return [
    `Profile: ${profile}`,
    'README/PROMPT/PR templateを必要最小限で作成',
    'docs/coreにevidence/quality/securityを作成',
    '既存ファイルはskip',
  ];
}

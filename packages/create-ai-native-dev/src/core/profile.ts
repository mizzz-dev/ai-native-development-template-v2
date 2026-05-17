export type ProfileId = 'generic' | 'react' | 'nextjs' | 'cpp';

export type Profile = {
  id: ProfileId;
  name: string;
  detectionRules: string[];
  generatedDocs: string[];
  generatedWorkflows: string[];
  prTemplateSections: string[];
  qualityGates: string[];
  requiredTools: string[];
  recommendedTools: string[];
  unsupportedOperations: string[];
  securityNotes: string[];
};
export const PROFILE_CATEGORIES = ['language','frontend','backend','mobile','desktop','infra','database','cloud','deploy','test','security','observability','data-ai','embedded-iot'] as const;

export const TOOL_PROFILE_IDS = ['solo-developer','startup-saas','product-team','enterprise','high-assurance','offline-air-gapped'] as const;

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

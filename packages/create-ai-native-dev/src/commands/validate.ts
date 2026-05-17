import { runValidation } from '../core/validation.js';

export function validateCommand(): number {
  console.log('Running local validation (offline, no secret/API access)...');
  return runValidation();
}

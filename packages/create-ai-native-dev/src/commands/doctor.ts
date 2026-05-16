import { detectProject } from '../core/detectProject.js';
import { evaluateScorecard } from '../core/scorecard.js';

export function doctorCommand() {
  const cwd = process.cwd();
  const detection = detectProject(cwd);
  const score = evaluateScorecard(cwd);
  console.log('Detected stack:', detection.profile);
  console.log('Signals:', detection.signals.join(', ') || 'none');
  console.log(`Score: ${score.total}/100`);
  console.log('Maturity:', score.maturity);
  console.log('Category scores (0-3):');
  score.items.forEach((i) => console.log(`- ${i.name}: ${i.score} (${i.note})`));
  console.log('Recommendations:', score.items.filter((i) => i.score < 2).map((i) => i.name).join(', ') || 'No major gaps');
}

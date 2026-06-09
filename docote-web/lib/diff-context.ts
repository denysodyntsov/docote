import type { ChangeContext } from './change-context';

export interface DiffContext {
  changedFiles: string[];
  changeSummary: string;
  likelyDocAreas: string[];
}

export function buildMockDiffContext(context: ChangeContext): DiffContext {
  const changedFiles = inferChangedFiles(context);
  const likelyDocAreas = inferLikelyDocAreas(changedFiles, context);

  return {
    changedFiles,
    changeSummary: `Mock diff context generated for ${context.repository} (${context.scopeType}: ${context.scopeRef}).`,
    likelyDocAreas
  };
}

function inferChangedFiles(context: ChangeContext): string[] {
  const lower = `${context.jiraText} ${context.currentDocText} ${context.extraContext}`.toLowerCase();
  const files = ['README.md', 'docs/release-notes.md'];

  if (lower.includes('payment')) files.push('src/payments/review-flow.ts');
  if (lower.includes('validation')) files.push('src/validation/beneficiary-validator.ts');
  if (lower.includes('portal')) files.push('src/portal/client-view.tsx');

  return Array.from(new Set(files));
}

function inferLikelyDocAreas(changedFiles: string[], context: ChangeContext): string[] {
  const areas = ['Technical implementation notes', 'Release notes'];

  if (changedFiles.some((file) => file.includes('validation'))) {
    areas.push('Validation rules documentation');
  }
  if (changedFiles.some((file) => file.includes('review-flow'))) {
    areas.push('Operations / review workflow guide');
  }
  if ((context.currentDocText || '').toLowerCase().includes('old')) {
    areas.push('Outdated existing documentation sections');
  }

  return Array.from(new Set(areas));
}

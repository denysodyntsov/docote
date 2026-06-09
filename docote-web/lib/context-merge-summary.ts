import type { ChangeContext } from './change-context';

export function buildContextMergeSummary(context: ChangeContext) {
  const parts: string[] = [];

  if (context.jiraText) parts.push('Jira context merged');
  if (context.currentDocText) parts.push('Current documentation merged');
  if (context.extraContext) parts.push('Extra context merged');

  if (parts.length === 0) return 'No additional context merged';
  return parts.join(' · ');
}

export function evaluateAnalysisReadiness(input: {
  repository?: string;
  scopeRef?: string;
  jiraText?: string;
  currentDocText?: string;
}) {
  const missing: string[] = [];
  if (!(input.repository || '').trim()) missing.push('repository');
  if (!(input.scopeRef || '').trim()) missing.push('scope reference');

  const advisory: string[] = [];
  if (!(input.jiraText || '').trim()) advisory.push('No Jira context provided');
  if (!(input.currentDocText || '').trim()) advisory.push('No current documentation provided');

  return {
    ready: missing.length === 0,
    missing,
    advisory
  };
}

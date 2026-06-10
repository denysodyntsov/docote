export function buildSessionOverview(input: {
  repository?: string;
  selectedPr?: number | null;
  selectedBranch?: string | null;
  currentDocText?: string;
  jiraText?: string;
}) {
  return {
    repository: input.repository || 'not selected',
    pullRequest: input.selectedPr ? `#${input.selectedPr}` : 'none',
    branch: input.selectedBranch || 'none',
    hasCurrentDoc: !!(input.currentDocText || '').trim(),
    hasJiraContext: !!(input.jiraText || '').trim()
  };
}

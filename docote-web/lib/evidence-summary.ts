export function buildEvidenceSummary(input: {
  changedFileCount: number;
  hasJiraContext: boolean;
  hasCurrentDoc: boolean;
  hasExtraContext: boolean;
}) {
  const evidence = [
    `${input.changedFileCount} changed files`,
    input.hasJiraContext ? 'Jira context present' : 'No Jira context',
    input.hasCurrentDoc ? 'Current documentation present' : 'No current documentation',
    input.hasExtraContext ? 'Extra context present' : 'No extra context'
  ];

  return evidence;
}

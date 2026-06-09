export function buildExplainabilityNotes(input: {
  qualitySignals: { changedFileCount: number; highImpactCount: number; hasJiraContext: boolean; hasCurrentDoc: boolean };
}) {
  const notes: string[] = [];

  if (input.qualitySignals.changedFileCount > 0) {
    notes.push('Analysis used inferred changed-file information.');
  }
  if (input.qualitySignals.highImpactCount > 0) {
    notes.push('High-impact documentation areas influenced the resulting priority and recommendations.');
  }
  if (!input.qualitySignals.hasJiraContext) {
    notes.push('No Jira context was provided, so ticket-level intent may be underrepresented.');
  }
  if (!input.qualitySignals.hasCurrentDoc) {
    notes.push('No current documentation text was provided, so drift reasoning is less grounded than it could be.');
  }

  if (notes.length === 0) {
    notes.push('The analysis used the available context without notable explainability warnings.');
  }

  return notes;
}

export function buildAnalysisConfidence(input: {
  qualitySignals: { hasJiraContext: boolean; hasCurrentDoc: boolean; hasExtraContext: boolean; changedFileCount: number; highImpactCount: number };
}) {
  let score = 0;
  if (input.qualitySignals.hasJiraContext) score += 2;
  if (input.qualitySignals.hasCurrentDoc) score += 2;
  if (input.qualitySignals.hasExtraContext) score += 1;
  if (input.qualitySignals.changedFileCount > 0) score += 2;
  if (input.qualitySignals.highImpactCount > 0) score += 1;

  if (score >= 7) return { level: 'high', score };
  if (score >= 4) return { level: 'medium', score };
  return { level: 'low', score };
}

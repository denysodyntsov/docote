export function calculateDocPriorityScore(input: {
  documentImpact?: { severity: string }[];
  fileCoverage?: { kind: string }[];
}) {
  const impact = input.documentImpact || [];
  const files = input.fileCoverage || [];

  let score = 0;
  score += impact.filter((item) => item.severity === 'high').length * 3;
  score += impact.filter((item) => item.severity === 'medium').length * 2;
  score += files.filter((item) => item.kind === 'source').length;
  score += files.filter((item) => item.kind === 'config').length;

  return score;
}

export function priorityBand(score: number) {
  if (score >= 8) return 'critical';
  if (score >= 4) return 'important';
  return 'routine';
}

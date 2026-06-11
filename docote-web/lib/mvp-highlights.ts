export function buildMvpHighlights(input: {
  runOutcomeSummary?: { headline?: string };
  impactedDocTargets?: { name: string; priority: string }[];
  releaseReadiness?: { state: string };
  reviewLane?: { lane: string };
}) {
  const topTargets = (input.impactedDocTargets || []).slice(0, 3).map((item) => item.name);

  return [
    input.runOutcomeSummary?.headline || 'Run completed',
    `Top documentation targets: ${topTargets.join(', ') || 'none identified'}`,
    `Release readiness: ${input.releaseReadiness?.state || 'unknown'}`,
    `Review lane: ${input.reviewLane?.lane || 'unknown'}`
  ];
}

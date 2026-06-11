export function buildRunOutcomeSummary(input: {
  impactedDocTargets?: { name: string; priority: string }[];
  releaseReadiness?: { state: string };
  reviewLane?: { lane: string };
  docDriftSummary?: { level: string };
}) {
  const targetCount = (input.impactedDocTargets || []).length;
  const highPriorityCount = (input.impactedDocTargets || []).filter((item) => item.priority === 'high').length;

  return {
    headline: `${targetCount} documentation target${targetCount === 1 ? '' : 's'} identified`,
    subheadline: input.releaseReadiness?.state === 'hold'
      ? 'Release communication should pause pending documentation review.'
      : input.reviewLane?.lane === 'manual-review'
        ? 'Manual review is recommended before considering this run complete.'
        : 'The run produced actionable documentation follow-up guidance.',
    facts: [
      `${highPriorityCount} high-priority documentation target${highPriorityCount === 1 ? '' : 's'}`,
      `Review lane: ${input.reviewLane?.lane || 'unknown'}`,
      `Drift signal: ${input.docDriftSummary?.level || 'unknown'}`,
      `Release readiness: ${input.releaseReadiness?.state || 'unknown'}`
    ]
  };
}

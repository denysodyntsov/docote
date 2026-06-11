export function buildReleaseReadiness(input: {
  reviewLane?: { lane: string };
  riskSummary?: { level: string };
  nextActionsSummary?: string;
}) {
  if (input.reviewLane?.lane === 'manual-review' || input.riskSummary?.level === 'elevated') {
    return {
      state: 'hold',
      text: 'Release communication should pause until documentation review is explicitly completed.'
    };
  }

  if (input.reviewLane?.lane === 'assisted-review') {
    return {
      state: 'caution',
      text: 'Release communication can be prepared, but finalization should wait for validation of missing or weak context.'
    };
  }

  return {
    state: 'proceed',
    text: input.nextActionsSummary || 'Release communication appears ready to proceed through the normal path.'
  };
}

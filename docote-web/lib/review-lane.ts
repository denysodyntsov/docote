export function buildReviewLane(input: {
  riskSummary?: { level: string };
  docDriftSummary?: { level: string };
  analysisConfidence?: { level: string };
}) {
  if (input.riskSummary?.level === 'elevated' || input.docDriftSummary?.level === 'watch') {
    return {
      lane: 'manual-review',
      text: 'This run should go through explicit human documentation review before being treated as release-ready.'
    };
  }

  if (input.analysisConfidence?.level === 'low' || input.riskSummary?.level === 'uncertain') {
    return {
      lane: 'assisted-review',
      text: 'This run is suitable for assisted review, but outputs should be validated with additional context.'
    };
  }

  return {
    lane: 'standard-review',
    text: 'This run appears suitable for a normal documentation review path.'
  };
}

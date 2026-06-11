export function buildDocDriftSummary(input: {
  hasCurrentDoc: boolean;
  highImpactCount: number;
  docsLikeFiles: number;
}) {
  if (!input.hasCurrentDoc) {
    return {
      level: 'unknown',
      text: 'Current documentation was not provided, so drift against existing docs cannot be assessed directly.'
    };
  }

  if (input.highImpactCount > 0 || input.docsLikeFiles === 0) {
    return {
      level: 'watch',
      text: 'Potential documentation drift is worth reviewing because impactful changes were detected without clear docs-side change coverage.'
    };
  }

  return {
    level: 'aligned',
    text: 'Current documentation appears more likely to stay aligned with the detected change shape, though review is still recommended.'
  };
}

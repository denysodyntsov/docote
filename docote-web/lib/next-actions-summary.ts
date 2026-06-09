export function buildNextActionsSummary(input: {
  recommendations?: { priority: string }[];
  docPriority?: { band: string };
}) {
  const highRecommendations = (input.recommendations || []).filter((item) => item.priority === 'high').length;

  if (input.docPriority?.band === 'critical' || highRecommendations >= 2) {
    return 'Immediate documentation review is recommended before release communication is finalized.';
  }

  if (input.docPriority?.band === 'important' || highRecommendations === 1) {
    return 'Documentation review should be scheduled as part of the current delivery flow.';
  }

  return 'Documentation updates appear routine, but outputs should still be reviewed.';
}

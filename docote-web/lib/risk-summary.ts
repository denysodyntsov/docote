export function buildRiskSummary(input: {
  analysisConfidence?: { level: string };
  docPriority?: { band: string };
  runTags?: string[];
}) {
  const tags = new Set(input.runTags || []);

  if (input.docPriority?.band === 'critical' || tags.has('high-impact')) {
    return {
      level: 'elevated',
      text: 'Documentation and release risk appear elevated for this run and should be reviewed before external communication.'
    };
  }

  if (input.analysisConfidence?.level === 'low') {
    return {
      level: 'uncertain',
      text: 'Available context is limited, so conclusions from this run should be treated carefully and validated manually.'
    };
  }

  return {
    level: 'managed',
    text: 'Risk appears manageable for this run, though normal documentation review should still happen.'
  };
}

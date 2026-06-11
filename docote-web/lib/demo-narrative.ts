export function buildDemoNarrative(input: {
  repository?: string;
  scopeRef?: string;
  runOutcomeSummary?: { headline?: string; subheadline?: string };
  releaseReadiness?: { state?: string };
}) {
  return [
    `Repository: ${input.repository || 'unknown'}`,
    `Scope: ${input.scopeRef || 'unknown'}`,
    input.runOutcomeSummary?.headline || 'Run completed',
    input.runOutcomeSummary?.subheadline || 'Documentation follow-up guidance was generated.',
    `Release readiness: ${input.releaseReadiness?.state || 'unknown'}`
  ];
}

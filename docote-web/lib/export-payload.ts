export function buildExportPayload(input: {
  runMetadata?: { id?: string };
  runOutcomeSummary?: { headline?: string; subheadline?: string; facts?: string[] };
  impactedDocTargets?: { name: string; priority: string }[];
  deliverables?: { title: string; body: string; kind: string }[];
  releaseReadiness?: { state: string; text: string };
}) {
  return {
    exportedAt: new Date().toISOString(),
    runId: input.runMetadata?.id || 'unknown',
    outcome: input.runOutcomeSummary || null,
    releaseReadiness: input.releaseReadiness || null,
    impactedDocTargets: input.impactedDocTargets || [],
    deliverables: input.deliverables || []
  };
}

export interface AnalysisAuditItem {
  label: string;
  value: string;
}

export function buildAnalysisAudit(input: {
  runId: string;
  repository: string;
  scopeType: string;
  scopeRef: string;
  mode: string;
}) {
  return [
    { label: 'Run ID', value: input.runId },
    { label: 'Repository', value: input.repository },
    { label: 'Scope type', value: input.scopeType },
    { label: 'Scope reference', value: input.scopeRef },
    { label: 'Mode', value: input.mode }
  ] as AnalysisAuditItem[];
}

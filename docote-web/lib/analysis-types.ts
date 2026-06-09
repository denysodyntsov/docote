export interface AnalyzePayload {
  repository: string;
  scopeType: 'pull-request' | 'branch' | 'commit-range';
  scopeRef: string;
  jiraText?: string;
  currentDocText?: string;
  extraContext?: string;
}

export interface AnalyzeResponse {
  ok: boolean;
  result?: {
    technicalSummary: string;
    releaseSummary: string;
    documentationDraft: string;
    impactedAreas: string[];
  };
  meta?: {
    mode: string;
    analyzedAt: string;
  };
  error?: string;
}

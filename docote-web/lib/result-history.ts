import type { AnalyzeResponse } from './analysis-types';

export interface AnalysisHistoryItem {
  id: string;
  createdAt: string;
  repository: string;
  scopeType: string;
  scopeRef: string;
  mode: string;
  technicalSummary: string;
}

const historyStore: AnalysisHistoryItem[] = [];

export function storeAnalysisHistory(input: {
  repository: string;
  scopeType: string;
  scopeRef: string;
  response: AnalyzeResponse;
}) {
  historyStore.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    repository: input.repository,
    scopeType: input.scopeType,
    scopeRef: input.scopeRef,
    mode: input.response.meta?.mode || 'unknown',
    technicalSummary: input.response.result?.technicalSummary || ''
  });

  if (historyStore.length > 20) {
    historyStore.length = 20;
  }
}

export function getAnalysisHistory() {
  return historyStore;
}

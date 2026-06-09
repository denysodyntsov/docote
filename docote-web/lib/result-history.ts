import type { AnalyzeResponse } from './analysis-types';
import type { RunMetadata } from './run-metadata';

export interface AnalysisHistoryItem extends RunMetadata {
  technicalSummary: string;
}

const historyStore: AnalysisHistoryItem[] = [];

export function storeAnalysisHistory(input: {
  metadata: RunMetadata;
  response: AnalyzeResponse;
}) {
  historyStore.unshift({
    ...input.metadata,
    technicalSummary: input.response.result?.technicalSummary || ''
  });

  if (historyStore.length > 20) {
    historyStore.length = 20;
  }
}

export function getAnalysisHistory() {
  return historyStore;
}

export function getLatestAnalysisHistoryItem() {
  return historyStore[0] || null;
}

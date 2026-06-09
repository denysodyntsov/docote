interface DebugSnapshot {
  id: string;
  createdAt: string;
  contextSummary: string;
  changedFiles: string[];
  promptPreview: string;
  providerMode: string;
}

const debugHistory: DebugSnapshot[] = [];

export function storeDebugSnapshot(input: {
  contextSummary: string;
  changedFiles: string[];
  promptPreview: string;
  providerMode: string;
}) {
  debugHistory.unshift({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    contextSummary: input.contextSummary,
    changedFiles: input.changedFiles,
    promptPreview: input.promptPreview,
    providerMode: input.providerMode
  });

  if (debugHistory.length > 20) {
    debugHistory.length = 20;
  }
}

export function getDebugHistory() {
  return debugHistory;
}

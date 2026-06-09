export interface RunMetadata {
  id: string;
  createdAt: string;
  mode: string;
  repository: string;
  scopeType: string;
  scopeRef: string;
}

export function createRunMetadata(input: {
  mode: string;
  repository: string;
  scopeType: string;
  scopeRef: string;
}): RunMetadata {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    mode: input.mode,
    repository: input.repository,
    scopeType: input.scopeType,
    scopeRef: input.scopeRef
  };
}

export interface AnalysisStatus {
  step: string;
  description: string;
  completed: boolean;
}

export function buildAnalysisStatus() {
  return [
    { step: 'selection', description: 'Selection state prepared', completed: true },
    { step: 'context', description: 'Change context built', completed: true },
    { step: 'diff', description: 'Diff context inferred', completed: true },
    { step: 'provider', description: 'Provider prompt prepared', completed: true },
    { step: 'impact', description: 'Document impact calculated', completed: true }
  ] as AnalysisStatus[];
}

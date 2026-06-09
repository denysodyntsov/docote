import type { SelectionState } from './selection-state';

export interface ResolvedScope {
  repository: string;
  scopeType: string;
  scopeRef: string;
  source: 'pull-request' | 'branch' | 'commit-range';
}

export function resolveAnalysisScope(input: {
  state: SelectionState;
  selectedPr?: number | null;
  selectedBranch?: string | null;
  commitRangeLabel?: string | null;
}): ResolvedScope {
  if (input.state.scopeType === 'commit-range' && input.commitRangeLabel) {
    return {
      repository: input.state.repository,
      scopeType: 'commit-range',
      scopeRef: input.commitRangeLabel,
      source: 'commit-range'
    };
  }

  if (input.state.scopeType === 'branch' && input.selectedBranch) {
    return {
      repository: input.state.repository,
      scopeType: 'branch',
      scopeRef: input.selectedBranch,
      source: 'branch'
    };
  }

  return {
    repository: input.state.repository,
    scopeType: 'pull-request',
    scopeRef: input.selectedPr ? `#${input.selectedPr}` : input.state.scopeRef,
    source: 'pull-request'
  };
}

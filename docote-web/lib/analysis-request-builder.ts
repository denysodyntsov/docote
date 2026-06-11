import type { SelectionState } from './selection-state';
import { resolveAnalysisScope } from './analysis-scope-resolver';

export function buildAnalysisRequest(input: {
  state: SelectionState;
  selectedPr?: number | null;
  selectedBranch?: string | null;
  commitRangeLabel?: string | null;
}) {
  const resolved = resolveAnalysisScope({
    state: input.state,
    selectedPr: input.selectedPr,
    selectedBranch: input.selectedBranch,
    commitRangeLabel: input.commitRangeLabel
  });

  return {
    repository: resolved.repository,
    scopeType: resolved.scopeType,
    scopeRef: resolved.scopeRef,
    jiraText: input.state.jiraText,
    currentDocText: input.state.currentDocText,
    extraContext: input.state.extraContext
  };
}

import { defaultSelectionState } from '../lib/selection-state.ts';
import { resolveAnalysisScope } from '../lib/analysis-scope-resolver.ts';

console.log(resolveAnalysisScope({
  state: defaultSelectionState,
  selectedPr: 148,
  selectedBranch: 'feature/beneficiary-validation-refresh',
  commitRangeLabel: 'abc1234...def5678'
}));

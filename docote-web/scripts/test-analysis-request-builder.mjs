import { defaultSelectionState } from '../lib/selection-state.ts';
import { buildAnalysisRequest } from '../lib/analysis-request-builder.ts';

console.log(buildAnalysisRequest({
  state: defaultSelectionState,
  selectedPr: 148,
  selectedBranch: 'feature/beneficiary-validation-refresh',
  commitRangeLabel: 'abc1234...def5678'
}));

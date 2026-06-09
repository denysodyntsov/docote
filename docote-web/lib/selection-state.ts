import type { ChangeScopeType } from './types';

export interface SelectionState {
  repository: string;
  scopeType: ChangeScopeType;
  scopeRef: string;
  jiraText: string;
  currentDocText: string;
  extraContext: string;
}

export const defaultSelectionState: SelectionState = {
  repository: 'example-org/payments-platform',
  scopeType: 'pull-request',
  scopeRef: '#148',
  jiraText: 'Story: improve beneficiary validation and update payment review flow.',
  currentDocText: 'Current documentation mentions old validation rules and does not describe the review flow change.',
  extraContext: 'PR updates validation logic and review-state transitions.'
};

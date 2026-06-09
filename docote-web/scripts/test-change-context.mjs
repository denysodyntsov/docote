import { buildChangeContext } from '../lib/change-context.ts';

const payload = {
  repository: 'example-org/payments-platform',
  scopeType: 'pull-request',
  scopeRef: '#148',
  jiraText: 'Story: update beneficiary validation.',
  currentDocText: 'Old docs mention previous validation flow.',
  extraContext: 'PR changes review-state transitions.'
};

console.log(buildChangeContext(payload));

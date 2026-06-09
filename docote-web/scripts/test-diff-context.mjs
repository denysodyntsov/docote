import { buildChangeContext } from '../lib/change-context.ts';
import { buildMockDiffContext } from '../lib/diff-context.ts';

const context = buildChangeContext({
  repository: 'example-org/payments-platform',
  scopeType: 'pull-request',
  scopeRef: '#148',
  jiraText: 'Story: improve payment validation and review flow.',
  currentDocText: 'Old validation notes still exist in the docs.',
  extraContext: 'Validation logic and review transitions updated.'
});

console.log(buildMockDiffContext(context));

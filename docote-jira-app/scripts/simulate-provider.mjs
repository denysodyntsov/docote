import { trimPrompt } from '../src/prompt-guardrails.js';
import { validateProviderOutput } from '../src/provider-contract.js';

const fakePrompt = 'A'.repeat(18000);
const trimmed = trimPrompt(fakePrompt);
console.log('Trimmed prompt info:', trimmed);

const example = {
  technical_summary: 'Example technical summary.',
  documentation_draft: 'Example documentation draft.',
  release_summary: 'Example release summary.'
};

console.log('Validated output:', validateProviderOutput(example));

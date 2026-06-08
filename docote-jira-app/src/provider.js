import { validateProviderOutput } from './provider-contract.js';

export async function generateDocumentationFromPrompt(_prompt) {
  throw new Error(
    'Real provider integration not implemented yet. Next step: connect LLM provider and return validated JSON output.'
  );
}

export function normalizeProviderResult(result) {
  return validateProviderOutput(result);
}

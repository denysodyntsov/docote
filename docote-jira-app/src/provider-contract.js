export function validateProviderOutput(result) {
  if (!result || typeof result !== 'object') {
    throw new Error('Provider output is not an object.');
  }

  const required = ['technical_summary', 'documentation_draft', 'release_summary'];
  for (const key of required) {
    if (typeof result[key] !== 'string' || !result[key].trim()) {
      throw new Error(`Provider output missing valid field: ${key}`);
    }
  }

  return {
    technical_summary: result.technical_summary.trim(),
    documentation_draft: result.documentation_draft.trim(),
    release_summary: result.release_summary.trim()
  };
}

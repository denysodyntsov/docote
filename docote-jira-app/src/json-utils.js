export function extractJsonObject(text) {
  if (!text || typeof text !== 'string') {
    throw new Error('No text content to parse.');
  }

  try {
    return JSON.parse(text);
  } catch {
    // continue to best-effort extraction
  }

  const firstBrace = text.indexOf('{');
  const lastBrace = text.lastIndexOf('}');
  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    throw new Error('No JSON object found in provider response.');
  }

  const candidate = text.slice(firstBrace, lastBrace + 1);
  try {
    return JSON.parse(candidate);
  } catch {
    throw new Error('Unable to extract valid JSON object from provider response.');
  }
}

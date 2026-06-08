import { validateProviderOutput } from './provider-contract.js';
import { getDocoteConfig } from './config.js';

export async function generateDocumentationFromPrompt(prompt) {
  const cfg = getDocoteConfig();

  if (!cfg.apiKey) {
    throw new Error('DOCOTE_API_KEY is not configured.');
  }

  const response = await fetch(`${cfg.apiBaseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cfg.apiKey}`
    },
    body: JSON.stringify({
      model: cfg.model,
      temperature: cfg.temperature,
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content: 'You are DoCoTe, a documentation-first assistant. Return JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    })
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Provider request failed: ${response.status} ${text}`);
  }

  const json = await response.json();
  const content = json?.choices?.[0]?.message?.content;

  if (!content || typeof content !== 'string') {
    throw new Error('Provider response did not include message content.');
  }

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error('Provider returned invalid JSON content.');
  }

  return validateProviderOutput(parsed);
}

export function normalizeProviderResult(result) {
  return validateProviderOutput(result);
}

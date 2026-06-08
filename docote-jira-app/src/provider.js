import { validateProviderOutput } from './provider-contract.js';
import { getDocoteConfig } from './config.js';
import { extractJsonObject } from './json-utils.js';
import { withRetry } from './retry.js';

export async function generateDocumentationFromPrompt(prompt) {
  const cfg = getDocoteConfig();

  if (!cfg.apiKey) {
    throw new Error('DOCOTE_API_KEY is not configured.');
  }

  const json = await withRetry(async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), cfg.timeoutMs);

    try {
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
        }),
        signal: controller.signal
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Provider request failed: ${response.status} ${text}`);
      }

      return await response.json();
    } catch (error) {
      if (error?.name === 'AbortError') {
        throw new Error('Provider request timed out.');
      }
      throw error;
    } finally {
      clearTimeout(timer);
    }
  }, { retries: cfg.retries, delayMs: 400 });
  const content = json?.choices?.[0]?.message?.content;

  if (!content || typeof content !== 'string') {
    throw new Error('Provider response did not include message content.');
  }

  let parsed;
  try {
    parsed = extractJsonObject(content);
  } catch {
    throw new Error('Provider returned invalid JSON content.');
  }

  return validateProviderOutput(parsed);
}

export function normalizeProviderResult(result) {
  return validateProviderOutput(result);
}

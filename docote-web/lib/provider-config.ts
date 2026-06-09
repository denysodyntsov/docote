export function getProviderConfig() {
  return {
    mode: process.env.DOCOTE_WEB_PROVIDER_MODE || 'mock',
    apiKey: process.env.DOCOTE_WEB_API_KEY || '',
    model: process.env.DOCOTE_WEB_MODEL || 'gpt-4.1-mini',
    apiBaseUrl: process.env.DOCOTE_WEB_API_BASE_URL || 'https://api.openai.com/v1'
  };
}

export function isWebProviderConfigured() {
  const cfg = getProviderConfig();
  return cfg.mode === 'live' && !!cfg.apiKey;
}

export function getDocoteConfig() {
  return {
    providerMode: process.env.DOCOTE_PROVIDER_MODE || 'mock',
    model: process.env.DOCOTE_MODEL || 'gpt-4.1-mini',
    temperature: Number(process.env.DOCOTE_TEMPERATURE || '0.2'),
    apiBaseUrl: process.env.DOCOTE_API_BASE_URL || 'https://api.openai.com/v1',
    apiKey: process.env.DOCOTE_API_KEY || ''
  };
}

export function isRealProviderEnabled() {
  const cfg = getDocoteConfig();
  return cfg.providerMode === 'live' && !!cfg.apiKey;
}

export type AnalysisMode = 'mock-web' | 'mock-analysis-engine' | 'provider-ready';

export function classifyAnalysisMode(input: { providerMode?: string; debugProviderMode?: string }) {
  if (input.providerMode === 'live' || input.debugProviderMode === 'live') return 'provider-ready';
  if (input.debugProviderMode === 'mock-provider-ready') return 'mock-analysis-engine';
  return 'mock-web';
}

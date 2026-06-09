import type { AnalyzeResponse } from './analysis-types';

export interface AnalysisSummary {
  headline: string;
  riskLevel: 'low' | 'medium' | 'high';
  updatePriority: 'low' | 'medium' | 'high';
}

export function buildAnalysisSummary(response: AnalyzeResponse & { documentImpact?: { severity: string }[] }) {
  const impact = response.documentImpact || [];
  const highCount = impact.filter((item) => item.severity === 'high').length;
  const mediumCount = impact.filter((item) => item.severity === 'medium').length;

  const riskLevel = highCount > 0 ? 'high' : mediumCount > 0 ? 'medium' : 'low';
  const updatePriority = highCount > 1 ? 'high' : highCount === 1 || mediumCount > 1 ? 'medium' : 'low';

  return {
    headline: response.result?.releaseSummary || 'No release summary available.',
    riskLevel,
    updatePriority
  } as AnalysisSummary;
}

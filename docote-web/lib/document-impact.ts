import type { DiffContext } from './diff-context';

export interface DocumentImpactItem {
  area: string;
  reason: string;
  severity: 'low' | 'medium' | 'high';
}

export function buildDocumentImpact(diffContext: DiffContext): DocumentImpactItem[] {
  return diffContext.likelyDocAreas.map((area) => ({
    area,
    reason: inferReason(area, diffContext.changedFiles),
    severity: inferSeverity(area)
  }));
}

function inferReason(area: string, changedFiles: string[]) {
  if (area.toLowerCase().includes('validation')) {
    return `Files related to validation changed: ${changedFiles.filter((f) => f.includes('validation')).join(', ') || 'general validation changes'}`;
  }
  if (area.toLowerCase().includes('review workflow')) {
    return `Workflow-related files changed: ${changedFiles.filter((f) => f.includes('review')).join(', ') || 'workflow logic updated'}`;
  }
  return `Likely impacted by changed files: ${changedFiles.join(', ')}`;
}

function inferSeverity(area: string): 'low' | 'medium' | 'high' {
  const lower = area.toLowerCase();
  if (lower.includes('outdated') || lower.includes('validation') || lower.includes('workflow')) return 'high';
  if (lower.includes('release')) return 'medium';
  return 'low';
}

import type { AnalyzePayload, AnalyzeResponse } from './analysis-types';

export function runMockAnalysis(payload: AnalyzePayload): AnalyzeResponse {
  const scopeLabel = `${payload.scopeType}: ${payload.scopeRef}`;
  const repoLabel = payload.repository || 'unknown repository';
  const jiraLine = payload.jiraText ? ` Jira context was provided.` : '';
  const docLine = payload.currentDocText ? ` Existing documentation text was provided.` : '';

  return {
    ok: true,
    result: {
      technicalSummary: `DoCoTe mock analysis for ${repoLabel} (${scopeLabel}). This change likely affects implementation behaviour, release communication, and documentation accuracy.${jiraLine}${docLine}`,
      releaseSummary: `Mock release summary for ${repoLabel}. Teams should review release notes and operational guidance for the selected change scope (${scopeLabel}).`,
      documentationDraft: `## Documentation update draft\nRepository: ${repoLabel}\nScope: ${scopeLabel}\n\nThis draft indicates that documentation related to the selected code change should be reviewed and updated to reflect the latest behaviour.`,
      impactedAreas: [
        'Technical implementation notes',
        'Release communication',
        'Operational or support documentation'
      ]
    },
    meta: {
      mode: 'mock-analysis-engine',
      analyzedAt: new Date().toISOString()
    }
  };
}

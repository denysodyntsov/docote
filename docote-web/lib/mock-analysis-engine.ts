import type { AnalyzeResponse } from './analysis-types';
import type { ChangeContext } from './change-context';

export function runMockAnalysis(context: ChangeContext): AnalyzeResponse {
  const scopeLabel = `${context.scopeType}: ${context.scopeRef}`;
  const repoLabel = context.repository || 'unknown repository';
  const jiraLine = context.jiraText ? ` Jira context was provided.` : '';
  const docLine = context.currentDocText ? ` Existing documentation text was provided.` : '';

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

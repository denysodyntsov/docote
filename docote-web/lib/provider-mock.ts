import type { ChangeContext } from './change-context';
import type { DiffContext } from './diff-context';

export function buildProviderPrompt(context: ChangeContext, diffContext: DiffContext) {
  return `You are DoCoTe web.

Repository: ${context.repository}
Scope type: ${context.scopeType}
Scope ref: ${context.scopeRef}

Change summary: ${diffContext.changeSummary}
Changed files: ${diffContext.changedFiles.join(', ')}
Likely impacted doc areas: ${diffContext.likelyDocAreas.join(', ')}

Jira text:
${context.jiraText || 'None'}

Current documentation text:
${context.currentDocText || 'None'}

Extra context:
${context.extraContext || 'None'}

Generate:
1. technical summary
2. release summary
3. documentation draft
4. impacted areas list`;
}

export function previewProviderMode() {
  return {
    mode: 'mock-provider-ready'
  };
}

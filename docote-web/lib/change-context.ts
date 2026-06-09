import type { AnalyzePayload } from './analysis-types';

export interface ChangeContext {
  repository: string;
  scopeType: AnalyzePayload['scopeType'];
  scopeRef: string;
  jiraText: string;
  currentDocText: string;
  extraContext: string;
  summary: string;
}

export function buildChangeContext(payload: AnalyzePayload): ChangeContext {
  const repository = (payload.repository || '').trim();
  const scopeType = payload.scopeType;
  const scopeRef = (payload.scopeRef || '').trim();
  const jiraText = (payload.jiraText || '').trim();
  const currentDocText = (payload.currentDocText || '').trim();
  const extraContext = (payload.extraContext || '').trim();

  const summaryParts = [
    repository ? `Repository: ${repository}` : '',
    scopeType ? `Scope type: ${scopeType}` : '',
    scopeRef ? `Scope ref: ${scopeRef}` : '',
    jiraText ? 'Jira context attached' : 'No Jira context',
    currentDocText ? 'Current documentation attached' : 'No current documentation attached',
    extraContext ? 'Additional context attached' : 'No additional context'
  ].filter(Boolean);

  return {
    repository,
    scopeType,
    scopeRef,
    jiraText,
    currentDocText,
    extraContext,
    summary: summaryParts.join(' | ')
  };
}

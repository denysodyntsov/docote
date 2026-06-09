import type { ChangeContext } from './change-context';
import type { DiffContext } from './diff-context';

export interface ProviderRequestShape {
  repository: string;
  scopeType: string;
  scopeRef: string;
  changedFiles: string[];
  likelyDocAreas: string[];
  jiraText: string;
  currentDocText: string;
  extraContext: string;
}

export function buildProviderRequestShape(context: ChangeContext, diffContext: DiffContext): ProviderRequestShape {
  return {
    repository: context.repository,
    scopeType: context.scopeType,
    scopeRef: context.scopeRef,
    changedFiles: diffContext.changedFiles,
    likelyDocAreas: diffContext.likelyDocAreas,
    jiraText: context.jiraText,
    currentDocText: context.currentDocText,
    extraContext: context.extraContext
  };
}

export type ChangeScopeType = 'pull-request' | 'branch' | 'commit-range';

export interface RepositoryRef {
  owner: string;
  name: string;
  provider: 'github' | 'gitlab';
}

export interface ChangeScope {
  type: ChangeScopeType;
  repository: RepositoryRef;
  branch?: string;
  pullRequestNumber?: number;
  baseCommit?: string;
  headCommit?: string;
}

export interface GenerationRequest {
  scope: ChangeScope;
  jiraText?: string;
  currentDocText?: string;
  extraContext?: string;
}

export interface GenerationResult {
  technicalSummary: string;
  releaseSummary: string;
  documentationDraft: string;
  impactedAreas: string[];
}

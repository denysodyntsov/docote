import type { GitHubPullRequestSummary, GitHubRepository } from './github-types';

export interface SelectionOptions {
  repositories: GitHubRepository[];
  pullRequests: GitHubPullRequestSummary[];
  branchOptions: string[];
}

export function buildSelectionOptions(input: {
  repositories: GitHubRepository[];
  pullRequests: GitHubPullRequestSummary[];
}): SelectionOptions {
  const branchOptions = Array.from(
    new Set([
      ...input.repositories.map((repo) => repo.default_branch),
      ...input.pullRequests.map((pr) => pr.headRefName),
      ...input.pullRequests.map((pr) => pr.baseRefName)
    ].filter(Boolean))
  );

  return {
    repositories: input.repositories,
    pullRequests: input.pullRequests,
    branchOptions
  };
}

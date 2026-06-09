import type { GitHubPullRequestSummary } from './github-types';

let selectedPullRequest: GitHubPullRequestSummary | null = null;

export function setSelectedPullRequest(pr: GitHubPullRequestSummary | null) {
  selectedPullRequest = pr;
}

export function getSelectedPullRequest() {
  return selectedPullRequest;
}

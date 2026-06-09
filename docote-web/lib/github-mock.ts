import type { GitHubPullRequestSummary, GitHubRepository } from './github-types';

export const mockRepositories: GitHubRepository[] = [
  {
    id: 1,
    name: 'payments-platform',
    full_name: 'example-org/payments-platform',
    private: true,
    default_branch: 'main'
  },
  {
    id: 2,
    name: 'client-portal',
    full_name: 'example-org/client-portal',
    private: true,
    default_branch: 'main'
  }
];

export const mockPullRequests: GitHubPullRequestSummary[] = [
  {
    number: 148,
    title: 'Improve beneficiary validation and payment review flow',
    state: 'open',
    headRefName: 'feature/beneficiary-validation-refresh',
    baseRefName: 'main'
  },
  {
    number: 152,
    title: 'Update transaction status documentation references',
    state: 'open',
    headRefName: 'feature/docs-impact-refactor',
    baseRefName: 'main'
  }
];

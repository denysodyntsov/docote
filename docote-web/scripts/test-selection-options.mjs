import { buildSelectionOptions } from '../lib/branch-pr-selector.ts';
import { mockPullRequests, mockRepositories } from '../lib/github-mock.ts';

console.log(buildSelectionOptions({
  repositories: mockRepositories,
  pullRequests: mockPullRequests
}));

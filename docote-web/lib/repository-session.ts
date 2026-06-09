import type { GitHubRepository } from './github-types';

let selectedRepository: GitHubRepository | null = null;

export function setSelectedRepository(repo: GitHubRepository | null) {
  selectedRepository = repo;
}

export function getSelectedRepository() {
  return selectedRepository;
}

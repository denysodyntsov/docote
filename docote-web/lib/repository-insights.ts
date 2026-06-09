import type { GitHubRepository } from './github-types';

export interface RepositoryInsight {
  fullName: string;
  defaultBranch: string;
  private: boolean;
  category: 'platform' | 'client' | 'service';
}

export function buildRepositoryInsights(repositories: GitHubRepository[]): RepositoryInsight[] {
  return repositories.map((repo) => ({
    fullName: repo.full_name,
    defaultBranch: repo.default_branch,
    private: repo.private,
    category: inferCategory(repo.name)
  }));
}

function inferCategory(name: string): 'platform' | 'client' | 'service' {
  const lower = name.toLowerCase();
  if (lower.includes('portal') || lower.includes('client')) return 'client';
  if (lower.includes('platform')) return 'platform';
  return 'service';
}

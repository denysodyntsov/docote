import type { RepositoryInsight } from './repository-insights';

export interface RepoDocMapItem {
  repository: string;
  likelyDocs: string[];
}

export function buildRepoDocMap(insights: RepositoryInsight[]): RepoDocMapItem[] {
  return insights.map((item) => ({
    repository: item.fullName,
    likelyDocs: inferLikelyDocs(item.category)
  }));
}

function inferLikelyDocs(category: RepositoryInsight['category']) {
  if (category === 'platform') {
    return ['Architecture overview', 'Operations guide', 'Release notes'];
  }
  if (category === 'client') {
    return ['User-facing behaviour notes', 'Support guide', 'Release notes'];
  }
  return ['Service documentation', 'API notes', 'Release notes'];
}

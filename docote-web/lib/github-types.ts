export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  default_branch: string;
}

export interface GitHubPullRequestSummary {
  number: number;
  title: string;
  state: string;
  headRefName: string;
  baseRefName: string;
}

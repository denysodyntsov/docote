export function getGitHubConfig() {
  return {
    clientId: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    redirectUri: process.env.GITHUB_REDIRECT_URI || 'http://localhost:3000/api/auth/github/callback'
  };
}

export function isGitHubOAuthConfigured() {
  const cfg = getGitHubConfig();
  return !!cfg.clientId && !!cfg.clientSecret;
}

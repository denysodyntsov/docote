import { NextResponse } from 'next/server';
import { getGitHubConfig, isGitHubOAuthConfigured } from '../../../../../lib/github-config';

export async function GET() {
  if (!isGitHubOAuthConfigured()) {
    return NextResponse.json({
      ok: false,
      mode: 'mock-oauth',
      error: 'GitHub OAuth is not configured yet.'
    }, { status: 400 });
  }

  const cfg = getGitHubConfig();
  const params = new URLSearchParams({
    client_id: cfg.clientId,
    redirect_uri: cfg.redirectUri,
    scope: 'repo read:user'
  });

  return NextResponse.json({
    ok: true,
    authorizeUrl: `https://github.com/login/oauth/authorize?${params.toString()}`
  });
}

import { NextResponse } from 'next/server';
import { mockPullRequests } from '../../../../lib/github-mock';

export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: 'mock-github',
    pullRequests: mockPullRequests
  });
}

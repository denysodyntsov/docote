import { NextResponse } from 'next/server';
import { mockPullRequests } from '../../../../lib/github-mock';
import { setSelectedPullRequest } from '../../../../lib/pull-request-session';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const number = Number(body?.number);

  const pr = mockPullRequests.find((item) => item.number === number) || null;
  setSelectedPullRequest(pr);

  return NextResponse.json({
    ok: true,
    selectedPullRequest: pr
  });
}

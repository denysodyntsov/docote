import { NextResponse } from 'next/server';
import { mockRepositories } from '../../../../lib/github-mock';
import { setSelectedRepository } from '../../../../lib/repository-session';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const fullName = body?.fullName;

  const repo = mockRepositories.find((item) => item.full_name === fullName) || null;
  setSelectedRepository(repo);

  return NextResponse.json({
    ok: true,
    selectedRepository: repo
  });
}

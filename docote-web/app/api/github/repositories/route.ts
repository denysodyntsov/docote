import { NextResponse } from 'next/server';
import { mockRepositories } from '../../../../lib/github-mock';

export async function GET() {
  return NextResponse.json({
    ok: true,
    mode: 'mock-github',
    repositories: mockRepositories
  });
}

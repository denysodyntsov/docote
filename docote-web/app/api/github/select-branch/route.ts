import { NextResponse } from 'next/server';
import { setSelectedBranch } from '../../../../lib/branch-session';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const branch = (body?.branch || '').trim() || null;
  setSelectedBranch(branch);

  return NextResponse.json({
    ok: true,
    selectedBranch: branch
  });
}

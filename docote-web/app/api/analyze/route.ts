import { NextResponse } from 'next/server';
import { sampleRequest, sampleResult } from '../../../lib/mock-data';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  return NextResponse.json({
    ok: true,
    request: body || sampleRequest,
    result: sampleResult,
    meta: {
      mode: 'mock-web',
      analyzedAt: new Date().toISOString()
    }
  });
}

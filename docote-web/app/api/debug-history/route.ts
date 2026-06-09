import { NextResponse } from 'next/server';
import { getDebugHistory } from '../../../lib/debug-history';

export async function GET() {
  return NextResponse.json({
    ok: true,
    debugHistory: getDebugHistory()
  });
}

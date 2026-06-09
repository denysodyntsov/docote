import { NextResponse } from 'next/server';
import { getAnalysisHistory } from '../../../lib/result-history';

export async function GET() {
  return NextResponse.json({
    ok: true,
    history: getAnalysisHistory()
  });
}

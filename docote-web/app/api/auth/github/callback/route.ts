import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json({ ok: false, error: 'Missing OAuth code.' }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    mode: 'mock-oauth-callback',
    codePreview: code.slice(0, 6)
  });
}

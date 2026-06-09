import { NextResponse } from 'next/server';
import { getCurrentDocText, setCurrentDocText } from '../../../../lib/current-doc-session';

export async function GET() {
  return NextResponse.json({ ok: true, currentDocText: getCurrentDocText() });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const text = String(body?.currentDocText || '');
  setCurrentDocText(text);
  return NextResponse.json({ ok: true, currentDocText: text });
}

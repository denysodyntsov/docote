import { NextResponse } from 'next/server';
import { getJiraText, setJiraText } from '../../../../lib/jira-session';

export async function GET() {
  return NextResponse.json({ ok: true, jiraText: getJiraText() });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const text = String(body?.jiraText || '');
  setJiraText(text);
  return NextResponse.json({ ok: true, jiraText: text });
}

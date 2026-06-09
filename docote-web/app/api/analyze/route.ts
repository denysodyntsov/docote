import { NextResponse } from 'next/server';
import { sampleRequest } from '../../../lib/mock-data';
import { runMockAnalysis } from '../../../lib/mock-analysis-engine';
import type { AnalyzePayload } from '../../../lib/analysis-types';

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as AnalyzePayload | null;
  const payload = body || {
    repository: sampleRequest.scope.repository.full_name || `${sampleRequest.scope.repository.owner}/${sampleRequest.scope.repository.name}`,
    scopeType: sampleRequest.scope.type,
    scopeRef: sampleRequest.scope.pullRequestNumber ? `#${sampleRequest.scope.pullRequestNumber}` : sampleRequest.scope.branch || 'unknown',
    jiraText: sampleRequest.jiraText,
    currentDocText: sampleRequest.currentDocText,
    extraContext: sampleRequest.extraContext
  };

  return NextResponse.json(runMockAnalysis(payload));
}

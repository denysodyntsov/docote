import { NextResponse } from 'next/server';
import { sampleRequest } from '../../../lib/mock-data';
import { runMockAnalysis } from '../../../lib/mock-analysis-engine';
import type { AnalyzePayload } from '../../../lib/analysis-types';
import { buildChangeContext } from '../../../lib/change-context';
import { buildMockDiffContext } from '../../../lib/diff-context';
import { buildProviderPrompt, previewProviderMode } from '../../../lib/provider-mock';
import { storeAnalysisHistory } from '../../../lib/result-history';
import { buildDocumentImpact } from '../../../lib/document-impact';

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

  const context = buildChangeContext(payload);
  const diffContext = buildMockDiffContext(context);
  const analysis = runMockAnalysis(context);

  storeAnalysisHistory({
    repository: context.repository,
    scopeType: context.scopeType,
    scopeRef: context.scopeRef,
    response: analysis
  });

  return NextResponse.json({
    ...analysis,
    documentImpact: buildDocumentImpact(diffContext),
    debug: {
      contextSummary: context.summary,
      changedFiles: diffContext.changedFiles,
      promptPreview: buildProviderPrompt(context, diffContext).slice(0, 1600),
      provider: previewProviderMode()
    }
  });
}

import { NextResponse } from 'next/server';
import { sampleRequest } from '../../../lib/mock-data';
import { runMockAnalysis } from '../../../lib/mock-analysis-engine';
import type { AnalyzePayload } from '../../../lib/analysis-types';
import { buildChangeContext } from '../../../lib/change-context';
import { buildMockDiffContext } from '../../../lib/diff-context';
import { buildProviderPrompt, previewProviderMode } from '../../../lib/provider-mock';
import { getLatestAnalysisHistoryItem, storeAnalysisHistory } from '../../../lib/result-history';
import { buildDocumentImpact } from '../../../lib/document-impact';
import { createRunMetadata } from '../../../lib/run-metadata';
import { storeDebugSnapshot } from '../../../lib/debug-history';
import { buildAnalysisStatus } from '../../../lib/analysis-status';
import { buildOutputDiff } from '../../../lib/output-diff';
import { buildProviderRequestShape } from '../../../lib/provider-request-shape';

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
  const previousHistory = getLatestAnalysisHistoryItem();
  const analysis = runMockAnalysis(context);
  const runMetadata = createRunMetadata({
    mode: analysis.meta?.mode || 'unknown',
    repository: context.repository,
    scopeType: context.scopeType,
    scopeRef: context.scopeRef
  });

  storeAnalysisHistory({
    metadata: runMetadata,
    response: analysis
  });

  const providerRequest = buildProviderRequestShape(context, diffContext);
  const promptPreview = buildProviderPrompt(context, diffContext).slice(0, 1600);
  const provider = previewProviderMode();

  storeDebugSnapshot({
    contextSummary: context.summary,
    changedFiles: diffContext.changedFiles,
    promptPreview,
    providerMode: provider.mode
  });

  return NextResponse.json({
    ...analysis,
    runMetadata,
    documentImpact: buildDocumentImpact(diffContext),
    outputDiff: buildOutputDiff({
      previous: previousHistory ? { technicalSummary: previousHistory.technicalSummary } : null,
      current: {
        technicalSummary: analysis.result?.technicalSummary,
        releaseSummary: analysis.result?.releaseSummary,
        documentationDraft: analysis.result?.documentationDraft
      }
    }),
    analysisStatus: buildAnalysisStatus(),
    debug: {
      contextSummary: context.summary,
      changedFiles: diffContext.changedFiles,
      providerRequest,
      promptPreview,
      provider
    }
  });
}

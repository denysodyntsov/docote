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
import { buildContextMergeSummary } from '../../../lib/context-merge-summary';
import { buildFileCoverage } from '../../../lib/file-coverage';
import { buildRecommendations } from '../../../lib/recommendations';
import { calculateDocPriorityScore, priorityBand } from '../../../lib/doc-priority-score';
import { buildReleaseImpact } from '../../../lib/release-impact';
import { buildQualitySignals } from '../../../lib/quality-signals';
import { buildAnalysisConfidence } from '../../../lib/analysis-confidence';
import { buildNextActionsSummary } from '../../../lib/next-actions-summary';
import { buildExplainabilityNotes } from '../../../lib/explainability';
import { buildAnalysisAudit } from '../../../lib/analysis-audit';
import { buildRunTags } from '../../../lib/run-tags';
import { buildRiskSummary } from '../../../lib/risk-summary';
import { buildChangeFootprint } from '../../../lib/change-footprint';
import { buildDocDriftSummary } from '../../../lib/doc-drift-summary';
import { buildReviewLane } from '../../../lib/review-lane';
import { buildEvidenceSummary } from '../../../lib/evidence-summary';
import { buildReleaseReadiness } from '../../../lib/release-readiness';
import { buildImpactedDocTargets } from '../../../lib/impacted-doc-targets';
import { buildRunOutcomeSummary } from '../../../lib/run-outcome-summary';
import { buildDeliverables } from '../../../lib/deliverables';
import { buildMvpHighlights } from '../../../lib/mvp-highlights';

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
  const contextMergeSummary = buildContextMergeSummary(context);
  const fileCoverage = buildFileCoverage(diffContext);
  const documentImpact = buildDocumentImpact(diffContext);
  const changeFootprint = buildChangeFootprint({ changedFiles: diffContext.changedFiles });
  const qualitySignals = buildQualitySignals({
    jiraText: context.jiraText,
    currentDocText: context.currentDocText,
    extraContext: context.extraContext,
    changedFiles: diffContext.changedFiles,
    documentImpact
  });
  const recommendations = buildRecommendations({ fileCoverage, documentImpact });
  const analysisConfidence = buildAnalysisConfidence({ qualitySignals });
  const explainabilityNotes = buildExplainabilityNotes({ qualitySignals });
  const runTags = buildRunTags({
    scopeType: context.scopeType,
    hasJiraContext: qualitySignals.hasJiraContext,
    hasCurrentDoc: qualitySignals.hasCurrentDoc,
    highImpactCount: qualitySignals.highImpactCount
  });
  const docPriorityScore = calculateDocPriorityScore({ documentImpact, fileCoverage });
  const docPriorityBand = priorityBand(docPriorityScore);
  const nextActionsSummary = buildNextActionsSummary({
    recommendations,
    docPriority: { band: docPriorityBand }
  });
  const analysisAudit = buildAnalysisAudit({
    runId: runMetadata.id,
    repository: context.repository,
    scopeType: context.scopeType,
    scopeRef: context.scopeRef,
    mode: analysis.meta?.mode || 'unknown'
  });
  const releaseImpact = buildReleaseImpact({ documentImpact, fileCoverage });
  const riskSummary = buildRiskSummary({
    analysisConfidence,
    docPriority: { band: docPriorityBand },
    runTags
  });
  const docDriftSummary = buildDocDriftSummary({
    hasCurrentDoc: qualitySignals.hasCurrentDoc,
    highImpactCount: qualitySignals.highImpactCount,
    docsLikeFiles: changeFootprint.docsLikeFiles
  });
  const reviewLane = buildReviewLane({
    riskSummary,
    docDriftSummary,
    analysisConfidence
  });
  const evidenceSummary = buildEvidenceSummary({
    changedFileCount: qualitySignals.changedFileCount,
    hasJiraContext: qualitySignals.hasJiraContext,
    hasCurrentDoc: qualitySignals.hasCurrentDoc,
    hasExtraContext: qualitySignals.hasExtraContext
  });
  const impactedDocTargets = buildImpactedDocTargets({
    changedFiles: diffContext.changedFiles,
    scopeType: context.scopeType,
    highImpactCount: qualitySignals.highImpactCount
  });
  const releaseReadiness = buildReleaseReadiness({
    reviewLane,
    riskSummary,
    nextActionsSummary
  });
  const runOutcomeSummary = buildRunOutcomeSummary({
    impactedDocTargets,
    releaseReadiness,
    reviewLane,
    docDriftSummary
  });
  const deliverables = buildDeliverables({
    analysis,
    impactedDocTargets
  });
  const mvpHighlights = buildMvpHighlights({
    runOutcomeSummary,
    impactedDocTargets,
    releaseReadiness,
    reviewLane
  });
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
    fileCoverage,
    documentImpact,
    changeFootprint,
    recommendations,
    releaseImpact,
    qualitySignals,
    analysisConfidence,
    explainabilityNotes,
    runTags,
    analysisAudit,
    riskSummary,
    docDriftSummary,
    reviewLane,
    evidenceSummary,
    impactedDocTargets,
    releaseReadiness,
    runOutcomeSummary,
    mvpHighlights,
    deliverables,
    nextActionsSummary,
    contextMergeSummary,
    docPriority: {
      score: docPriorityScore,
      band: docPriorityBand
    },
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

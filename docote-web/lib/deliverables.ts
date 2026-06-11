export interface DeliverableItem {
  title: string;
  body: string;
  kind: 'docs-update' | 'release-note' | 'jira-comment';
}

export function buildDeliverables(input: {
  analysis: {
    result?: {
      documentationDraft?: string;
      releaseSummary?: string;
      technicalSummary?: string;
    };
  };
  impactedDocTargets?: { name: string }[];
}) {
  const deliverables: DeliverableItem[] = [];

  if (input.analysis.result?.documentationDraft) {
    deliverables.push({
      title: 'Documentation update draft',
      body: input.analysis.result.documentationDraft,
      kind: 'docs-update'
    });
  }

  if (input.analysis.result?.releaseSummary) {
    deliverables.push({
      title: 'Release note draft',
      body: input.analysis.result.releaseSummary,
      kind: 'release-note'
    });
  }

  deliverables.push({
    title: 'Jira/comment summary',
    body: `Impacted documentation targets: ${(input.impactedDocTargets || []).map((item) => item.name).join(', ') || 'none identified'}.
Technical summary: ${input.analysis.result?.technicalSummary || 'No technical summary available.'}`,
    kind: 'jira-comment'
  });

  return deliverables;
}

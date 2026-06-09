export interface OutputDiffItem {
  section: string;
  previous: string;
  current: string;
  changed: boolean;
}

export function buildOutputDiff(input: {
  previous?: {
    technicalSummary?: string;
    releaseSummary?: string;
    documentationDraft?: string;
  } | null;
  current: {
    technicalSummary?: string;
    releaseSummary?: string;
    documentationDraft?: string;
  };
}) {
  return [
    diffItem('technicalSummary', input.previous?.technicalSummary || '', input.current.technicalSummary || ''),
    diffItem('releaseSummary', input.previous?.releaseSummary || '', input.current.releaseSummary || ''),
    diffItem('documentationDraft', input.previous?.documentationDraft || '', input.current.documentationDraft || '')
  ];
}

function diffItem(section: string, previous: string, current: string): OutputDiffItem {
  return {
    section,
    previous,
    current,
    changed: previous !== current
  };
}

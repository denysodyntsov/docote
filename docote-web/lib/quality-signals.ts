export interface QualitySignals {
  hasJiraContext: boolean;
  hasCurrentDoc: boolean;
  hasExtraContext: boolean;
  changedFileCount: number;
  highImpactCount: number;
}

export function buildQualitySignals(input: {
  jiraText?: string;
  currentDocText?: string;
  extraContext?: string;
  changedFiles?: string[];
  documentImpact?: { severity: string }[];
}): QualitySignals {
  return {
    hasJiraContext: !!(input.jiraText || '').trim(),
    hasCurrentDoc: !!(input.currentDocText || '').trim(),
    hasExtraContext: !!(input.extraContext || '').trim(),
    changedFileCount: (input.changedFiles || []).length,
    highImpactCount: (input.documentImpact || []).filter((item) => item.severity === 'high').length
  };
}

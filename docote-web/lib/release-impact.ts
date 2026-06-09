export interface ReleaseImpactItem {
  area: string;
  note: string;
}

export function buildReleaseImpact(input: {
  fileCoverage?: { path: string; kind: string }[];
  documentImpact?: { area: string; severity: string }[];
}) {
  const items: ReleaseImpactItem[] = [];
  const fileCoverage = input.fileCoverage || [];
  const documentImpact = input.documentImpact || [];

  if (fileCoverage.some((item) => item.kind === 'config')) {
    items.push({
      area: 'Deployment / configuration notes',
      note: 'Configuration-related changes suggest release communication may need operational guidance updates.'
    });
  }

  if (documentImpact.some((item) => item.area.toLowerCase().includes('workflow'))) {
    items.push({
      area: 'Operational workflow changes',
      note: 'Workflow-related documentation appears impacted and may need explicit release notes.'
    });
  }

  if (items.length === 0) {
    items.push({
      area: 'General release communication',
      note: 'No major release-specific flags detected, but generated summaries should still be reviewed.'
    });
  }

  return items;
}

export interface RecommendationItem {
  title: string;
  action: string;
  priority: 'low' | 'medium' | 'high';
}

export function buildRecommendations(input: {
  fileCoverage?: { kind: string }[];
  documentImpact?: { area: string; severity: string }[];
}) {
  const recommendations: RecommendationItem[] = [];
  const fileCoverage = input.fileCoverage || [];
  const documentImpact = input.documentImpact || [];

  if (fileCoverage.some((item) => item.kind === 'source')) {
    recommendations.push({
      title: 'Review technical documentation',
      action: 'Check whether source-level behaviour changes require updates to implementation notes or support guidance.',
      priority: 'high'
    });
  }

  if (documentImpact.some((item) => item.severity === 'high')) {
    recommendations.push({
      title: 'Prioritize impacted documentation areas',
      action: 'Update high-severity documentation areas before release communication is finalized.',
      priority: 'high'
    });
  }

  if (fileCoverage.some((item) => item.kind === 'config')) {
    recommendations.push({
      title: 'Check configuration and deployment notes',
      action: 'Review whether operational or deployment documentation should change due to config-level updates.',
      priority: 'medium'
    });
  }

  if (recommendations.length === 0) {
    recommendations.push({
      title: 'Review generated outputs manually',
      action: 'No strong recommendation signals were detected, so manual review remains the safest next step.',
      priority: 'low'
    });
  }

  return recommendations;
}

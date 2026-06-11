export interface ImpactedDocTarget {
  name: string;
  reason: string;
  priority: 'high' | 'medium';
}

export function buildImpactedDocTargets(input: {
  changedFiles?: string[];
  scopeType?: string;
  highImpactCount?: number;
}) {
  const files = input.changedFiles || [];
  const targets: ImpactedDocTarget[] = [];

  const touchesApi = files.some((file) => /api|openapi|schema|controller|route/i.test(file));
  const touchesUi = files.some((file) => /ui|component|page|frontend|web/i.test(file));
  const touchesInfra = files.some((file) => /deploy|infra|ops|helm|terraform|docker/i.test(file));

  if (touchesApi) {
    targets.push({
      name: 'API documentation',
      reason: 'Changed files suggest API or interface-level behavior updates.',
      priority: 'high'
    });
  }

  if (touchesUi) {
    targets.push({
      name: 'User-facing documentation',
      reason: 'Changed files suggest product behavior or UI flow updates.',
      priority: 'medium'
    });
  }

  if (touchesInfra) {
    targets.push({
      name: 'Operations or deployment guide',
      reason: 'Changed files suggest environment, rollout, or operational changes.',
      priority: 'medium'
    });
  }

  targets.push({
    name: 'Release notes',
    reason: input.scopeType === 'pull-request' ? 'Pull request scope should usually be reflected in release communication.' : 'Detected changes should usually be reflected in release communication.',
    priority: input.highImpactCount && input.highImpactCount > 0 ? 'high' : 'medium'
  });

  return targets;
}

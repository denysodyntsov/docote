export function buildRunTags(input: {
  scopeType: string;
  hasJiraContext: boolean;
  hasCurrentDoc: boolean;
  highImpactCount: number;
}) {
  const tags: string[] = [input.scopeType];
  if (input.hasJiraContext) tags.push('jira');
  if (input.hasCurrentDoc) tags.push('current-doc');
  if (input.highImpactCount > 0) tags.push('high-impact');
  return tags;
}

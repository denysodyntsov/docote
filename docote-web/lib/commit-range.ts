export interface CommitRangeSelection {
  baseCommit: string;
  headCommit: string;
}

export function normalizeCommitRange(input: Partial<CommitRangeSelection>) {
  return {
    baseCommit: (input.baseCommit || '').trim(),
    headCommit: (input.headCommit || '').trim(),
    valid: !!(input.baseCommit && input.headCommit)
  };
}

export function formatCommitRangeLabel(input: Partial<CommitRangeSelection>) {
  const normalized = normalizeCommitRange(input);
  if (!normalized.valid) return 'Commit range not fully specified';
  return `${normalized.baseCommit}...${normalized.headCommit}`;
}

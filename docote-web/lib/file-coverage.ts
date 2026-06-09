import type { DiffContext } from './diff-context';

export interface FileCoverageItem {
  path: string;
  kind: 'docs' | 'source' | 'config';
}

export function buildFileCoverage(diffContext: DiffContext): FileCoverageItem[] {
  return diffContext.changedFiles.map((path) => ({
    path,
    kind: classifyFile(path)
  }));
}

function classifyFile(path: string): 'docs' | 'source' | 'config' {
  const lower = path.toLowerCase();
  if (lower.includes('readme') || lower.includes('docs/')) return 'docs';
  if (lower.endsWith('.json') || lower.endsWith('.yml') || lower.endsWith('.yaml')) return 'config';
  return 'source';
}

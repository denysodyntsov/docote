export interface ChangeFootprint {
  totalFiles: number;
  docsLikeFiles: number;
  codeLikeFiles: number;
  dominantKind: 'docs' | 'code' | 'mixed';
}

export function buildChangeFootprint(input: { changedFiles?: string[] }): ChangeFootprint {
  const files = input.changedFiles || [];
  const docsLikeFiles = files.filter((file) => /(^docs\/|\.md$|\.mdx$|README)/i.test(file)).length;
  const codeLikeFiles = Math.max(0, files.length - docsLikeFiles);

  let dominantKind: ChangeFootprint['dominantKind'] = 'mixed';
  if (docsLikeFiles > codeLikeFiles) dominantKind = 'docs';
  else if (codeLikeFiles > docsLikeFiles) dominantKind = 'code';

  return {
    totalFiles: files.length,
    docsLikeFiles,
    codeLikeFiles,
    dominantKind
  };
}

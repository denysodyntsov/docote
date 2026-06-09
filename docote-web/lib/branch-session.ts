let selectedBranch: string | null = null;

export function setSelectedBranch(branch: string | null) {
  selectedBranch = branch;
}

export function getSelectedBranch() {
  return selectedBranch;
}

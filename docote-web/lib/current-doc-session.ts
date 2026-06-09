let currentDocText: string = '';

export function setCurrentDocText(text: string) {
  currentDocText = text;
}

export function getCurrentDocText() {
  return currentDocText;
}

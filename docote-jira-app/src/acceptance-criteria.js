export function extractAcceptanceCriteriaSections(description) {
  if (!description || typeof description !== 'string') {
    return 'Not explicitly identified.';
  }

  const patterns = [
    'acceptance criteria',
    'acceptance criterias',
    'ac:',
    'definition of done',
    'done when',
    'success criteria'
  ];

  const lower = description.toLowerCase();
  for (const pattern of patterns) {
    const idx = lower.indexOf(pattern);
    if (idx !== -1) {
      return trimSection(description.slice(idx), 1800);
    }
  }

  const bulletLines = description
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*•]\s+/.test(line) || /^\d+[.)]\s+/.test(line));

  if (bulletLines.length >= 2) {
    return trimSection(bulletLines.join('\n'), 1800);
  }

  return 'Not explicitly identified.';
}

function trimSection(text, maxChars) {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + '\n\n[DoCoTe note: acceptance criteria section truncated]';
}

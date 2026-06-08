const MAX_DESCRIPTION_CHARS = 5000;
const MAX_COMMENT_COUNT = 6;
const MAX_COMMENT_CHARS = 600;

export function normalizeIssueForPrompt(issue) {
  const fields = issue?.fields || {};
  const description = normalizeText(fields.description, MAX_DESCRIPTION_CHARS);
  const comments = normalizeComments(fields.comment?.comments || []);

  return {
    key: issue?.key || '',
    summary: safeString(fields.summary),
    issueType: safeString(fields.issuetype?.name),
    status: safeString(fields.status?.name),
    priority: safeString(fields.priority?.name),
    description,
    comments
  };
}

function normalizeComments(comments) {
  return comments
    .slice(0, MAX_COMMENT_COUNT)
    .map((comment, index) => {
      const body = normalizeText(comment?.body, MAX_COMMENT_CHARS);
      return `Comment ${index + 1}: ${body}`;
    })
    .join('\n');
}

function normalizeText(value, maxChars) {
  const raw = safeString(value);
  if (!raw) return '';
  return raw.length > maxChars
    ? raw.slice(0, maxChars) + '\n\n[DoCoTe note: content truncated]'
    : raw;
}

function safeString(value) {
  if (!value) return '';
  if (typeof value === 'string') return value.trim();
  try {
    return JSON.stringify(value, null, 2).trim();
  } catch {
    return String(value).trim();
  }
}

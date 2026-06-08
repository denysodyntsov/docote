export function buildDocumentationPrompt({ issue, extraContext = '' }) {
  const fields = issue?.fields || {};
  const summary = fields.summary || '';
  const description = normalizeJiraField(fields.description);
  const issueType = fields.issuetype?.name || '';
  const comments = normalizeComments(fields.comment?.comments || []);
  const acceptanceCriteria = extractAcceptanceCriteria(description);

  return `You are DoCoTe, a documentation-first assistant for Jira-based software teams.

Your task is to generate three outputs from the Jira issue context below:
1. technical_summary
2. documentation_draft
3. release_summary

Rules:
- Be concrete, concise, and professional.
- Do not invent facts that are not supported by the issue context.
- If information is missing, state assumptions carefully.
- Treat output as a draft for human review.
- Focus on implementation understanding and release communication.

Issue type: ${issueType}
Summary: ${summary}

Description:
${description}

Acceptance criteria (best effort extraction):
${acceptanceCriteria}

Comments summary:
${comments}

Additional implementation context:
${extraContext || 'None provided'}

Return strict JSON with this shape:
{
  "technical_summary": "...",
  "documentation_draft": "...",
  "release_summary": "..."
}`;
}

function normalizeJiraField(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  try {
    return JSON.stringify(field, null, 2);
  } catch {
    return String(field);
  }
}

function normalizeComments(comments) {
  if (!comments.length) return 'No comments available.';
  return comments
    .slice(0, 10)
    .map((c, i) => `Comment ${i + 1}: ${normalizeJiraField(c.body)}`)
    .join('\n');
}

function extractAcceptanceCriteria(description) {
  if (!description) return 'Not explicitly identified.';
  const lower = description.toLowerCase();
  const marker = 'acceptance criteria';
  const idx = lower.indexOf(marker);
  if (idx === -1) return 'Not explicitly identified.';
  return description.slice(idx, idx + 1200);
}

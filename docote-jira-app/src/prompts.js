import { normalizeIssueForPrompt } from './issue-normalizer.js';
import { extractAcceptanceCriteriaSections } from './acceptance-criteria.js';

export function buildDocumentationPrompt({ issue, extraContext = '' }) {
  const normalized = normalizeIssueForPrompt(issue);
  const summary = normalized.summary || '';
  const description = normalized.description || '';
  const issueType = normalized.issueType || '';
  const comments = normalized.comments || 'No comments available.';
  const acceptanceCriteria = extractAcceptanceCriteriaSections(description);

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

Issue key: ${normalized.key}
Issue type: ${issueType}
Status: ${normalized.status}
Priority: ${normalized.priority}
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


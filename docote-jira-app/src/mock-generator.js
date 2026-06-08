export function mockGenerate(issue, extraContext = '') {
  const summary = issue?.fields?.summary || 'Untitled issue';
  const issueType = issue?.fields?.issuetype?.name || 'Issue';

  return {
    technical_summary:
      `${issueType}: ${summary}.\n\nThis is a mock technical summary generated from the available Jira issue context. It should explain what changed, why it changed, and which parts of the system may be affected. ${extraContext ? 'Additional implementation context was provided by the user.' : 'No additional implementation context was provided.'}`,
    documentation_draft:
      `Overview\n${summary}\n\nBusiness context\nThis draft was generated from Jira issue data and should be reviewed by the delivery team.\n\nImplementation notes\nDocument the main logic, impacted components, and any delivery constraints here.\n\nImpact\nSummarise user-facing or system-facing change impact.`,
    release_summary:
      `${summary} — draft release summary generated from Jira issue context. Include a short explanation of the change, expected impact, and any important release note for stakeholders.`
  };
}

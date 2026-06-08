import { normalizeIssueForPrompt } from '../src/issue-normalizer.js';

const issue = {
  key: 'DOC-1',
  fields: {
    summary: 'Example issue',
    issuetype: { name: 'Story' },
    status: { name: 'In Progress' },
    priority: { name: 'High' },
    description: 'A'.repeat(6000),
    comment: {
      comments: [
        { body: 'Short comment' },
        { body: 'B'.repeat(1000) }
      ]
    }
  }
};

console.log(normalizeIssueForPrompt(issue));

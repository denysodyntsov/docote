import Resolver from '@forge/resolver';
import api, { route, storage } from '@forge/api';
import { buildDocumentationPrompt } from './prompts.js';
import { mockGenerate } from './mock-generator.js';

const resolver = new Resolver();

resolver.define('getIssueContext', async ({ context }) => {
  const issueKey = context?.extension?.issue?.key;
  if (!issueKey) {
    return { ok: false, error: 'Issue key not found in context.' };
  }

  const response = await api.asApp().requestJira(route`/rest/api/3/issue/${issueKey}?expand=renderedFields`);
  const issue = await response.json();
  return { ok: true, issue };
});

resolver.define('generateDocumentation', async ({ payload, context }) => {
  const issueKey = context?.extension?.issue?.key;
  const extraContext = payload?.extraContext || '';

  if (!issueKey) {
    return { ok: false, error: 'Issue key not found in context.' };
  }

  const response = await api.asApp().requestJira(route`/rest/api/3/issue/${issueKey}?expand=renderedFields`);
  const issue = await response.json();

  const prompt = buildDocumentationPrompt({ issue, extraContext });

  // MVP mode: mock generation for now.
  const outputs = mockGenerate(issue, extraContext);

  await storage.set(`docote:last:${issueKey}`, {
    issueKey,
    extraContext,
    outputs,
    prompt,
    generatedAt: new Date().toISOString()
  });

  return {
    ok: true,
    issueKey,
    outputs,
    promptPreview: prompt.slice(0, 1200)
  };
});

resolver.define('getLastGeneration', async ({ context }) => {
  const issueKey = context?.extension?.issue?.key;
  if (!issueKey) {
    return { ok: false, error: 'Issue key not found in context.' };
  }

  const data = await storage.get(`docote:last:${issueKey}`);
  return { ok: true, data: data || null };
});

export const handler = resolver.getDefinitions();

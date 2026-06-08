# DoCoTe Provider Swap Plan

## Current mode
`src/index.js` uses mock output generation for predictable MVP development.

## Next mode
Swap to a real LLM provider behind a very small abstraction.

## Recommended abstraction
Create a file like:
- `src/provider.js`

With one function:
- `generateDocumentationFromPrompt(prompt)`

That function should:
1. send the prompt to the provider
2. request JSON-only output
3. validate result shape
4. return normalized object

## Why this matters
It keeps the resolver clean and makes future provider changes easier.

## Minimal expected response
```json
{
  "technical_summary": "...",
  "documentation_draft": "...",
  "release_summary": "..."
}
```

## Guardrails
- low temperature
- hard JSON constraint
- retry once on malformed response
- fail cleanly with a readable error to UI

## Recommended milestone after deploy
Once the Forge panel is visible in Jira, implement provider swap next.
That gives a better feedback loop than swapping provider before deployment.

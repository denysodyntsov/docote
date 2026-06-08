# Real Provider Integration Notes

## Current generation mode
The backend currently uses `mockGenerate()` for speed and predictable scaffolding.

## Next step
Replace this section in `src/index.js`:
- `const outputs = mockGenerate(issue, extraContext);`

with:
- LLM provider call
- structured JSON response parsing
- schema validation
- fallback response handling

## Recommended output schema
```json
{
  "technical_summary": "string",
  "documentation_draft": "string",
  "release_summary": "string"
}
```

## Important engineering constraints
- Never claim certainty if Jira input is weak
- Keep output clearly marked as draft content
- Avoid hallucinated implementation details
- Truncate oversized issue/comment payloads before sending to provider

## Suggested first provider behaviour
- low temperature
- strict system prompt
- explicit JSON-only response
- retry once on malformed output

## Good first test set
Use 5 to 10 real Jira issues with mixed quality:
- well-written story
- bug with sparse detail
- technical task
- issue with noisy comments
- issue with explicit acceptance criteria

This will quickly show whether prompt quality is strong enough for real usage.

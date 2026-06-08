# Provider Implementation TODO

## Purpose
This file turns the provider swap idea into a concrete implementation checklist.

## Immediate implementation plan

### 1. Extend `src/provider.js`
Implement:
- `generateDocumentationFromPrompt(prompt)`

Responsibilities:
- send prompt to model provider
- request JSON-only response
- parse response safely
- validate with `validateProviderOutput()`
- return normalized object

### 2. Update `src/index.js`
Replace:
- `mockGenerate(issue, extraContext)`

With:
- `generateDocumentationFromPrompt(prompt)`

Suggested fallback behaviour:
- if provider fails, optionally return mock mode only in local/dev environments
- otherwise return clean UI error message

### 3. Add provider configuration handling
Expected future inputs:
- API key
- model name
- optional temperature
- optional timeout

### 4. Add schema-safe parsing
If provider returns text around JSON, strip safely or fail explicitly.
Do not silently accept malformed output.

### 5. Add test cases
Test at minimum:
- valid JSON response
- invalid JSON response
- missing required field
- empty string field
- provider timeout/error

## First milestone
A single real Jira issue should successfully produce:
- technical summary
- documentation draft
- release summary

## Important behaviour principle
DoCoTe should prefer:
- partial honesty
- explicit assumptions

over:
- confident hallucinated detail

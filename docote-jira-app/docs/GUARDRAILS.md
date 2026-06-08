# DoCoTe Guardrails

## Why guardrails matter
Jira issues can be noisy, incomplete, and sometimes huge. Provider responses can also fail or come back malformed.

## Current guardrails added
- prompt trimming for oversized input
- mode tracking (`mock`, `live`, `mock-fallback`)
- provider-safe configuration model
- user-safe error message mapping

## Current prompt trimming behaviour
If a prompt becomes too large, DoCoTe:
- keeps the first part
- keeps the tail end
- inserts a marker explaining that content was trimmed

This is a simple first version and can be improved later.

## Recommended future guardrails
- comment count limits with summarisation
- description normalization for very verbose Jira fields
- provider timeout controls
- retry-once behaviour for malformed JSON
- optional issue-type-specific prompt reductions

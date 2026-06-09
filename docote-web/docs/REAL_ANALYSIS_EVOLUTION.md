# Real Analysis Evolution

## Current backend flow
The web-first DoCoTe backend now has:
1. incoming analysis payload
2. change-context builder
3. mock analysis engine
4. structured response to frontend

## Why this matters
This is a more realistic architecture than direct route-to-response logic.

## Evolution path
### Current
- payload -> change context -> mock analysis

### Next
- payload -> change context -> repo metadata/diff context -> generation orchestrator

### Later
- payload -> authenticated repo access -> changed files / PR metadata -> generation + history

## Architectural benefit
This makes it easier to replace each layer independently while preserving the web product flow.

# Change Context Builder

## Purpose
Before DoCoTe can perform real repository-backed analysis, it needs a stable internal shape for change context.

## Current role
The change-context builder converts incoming analysis payloads into one normalized object containing:
- repository
- scope type
- scope reference
- Jira text
- current documentation text
- extra context
- summary line for debugging and future logging

## Why this matters
This separates:
- request transport format
from
- internal analysis input shape

## Next step
Feed this context object into:
- mock analysis engine first
- generation orchestrator later
- real repository diff ingestion after integration work

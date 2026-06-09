# Web Backend Direction

## Current state
The web-first track now has:
- mocked GitHub repository endpoints
- mocked PR endpoints
- mocked analysis route
- reusable mock analysis engine

## Why this matters
The backend shape is becoming modular instead of page-bound.
That is important because real repository-backed analysis will require separate layers for:
- provider integrations
- change-context building
- generation orchestration
- persistence later

## Next backend step
Introduce a change-context builder that can eventually accept:
- repository metadata
- PR metadata
- changed files
- Jira text
- current documentation text

and output one structured analysis input object for generation.

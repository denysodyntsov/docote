# DoCoTe Jira App

First implementation scaffold for the DoCoTe Jira plugin.

## Goal
Generate three outputs from a Jira issue:
- technical implementation summary
- documentation draft
- release summary

## Current status
This is a scaffolded MVP structure using Atlassian Forge concepts.
It is designed to be the next step after the landing page and product definition.

## Planned first workflow
1. Open a Jira issue
2. Open the DoCoTe issue panel
3. Optionally paste PR / implementation context
4. Click generate
5. Receive three generated outputs

## Current implementation in this folder
- `manifest.yml` — Forge app manifest draft
- `src/index.js` — resolver/backend draft
- `src/prompts.js` — prompt builder
- `src/mock-generator.js` — mock generator for local-first dev
- `DOCOTE_IMPLEMENTATION_NEXT_STEPS.md` — practical build roadmap

## Notes
This scaffold is intentionally conservative:
- documentation-first
- no code-review feature yet
- no test generation yet
- no Confluence publishing yet
- no deep repo parsing yet

## Next likely tasks
- replace mock generation with real LLM provider call
- wire actual Forge UI
- test against real Jira sample issues
- add issue-type-aware templates

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

## Current implementation state
The project now includes:
- mock and live provider modes
- provider fallback behaviour
- prompt trimming
- Jira issue normalization
- frontend state badges for mode and trimming
- provider JSON extraction guardrails
- retry and timeout controls

## Most important next steps
- deploy the Forge app into a real Jira environment
- test first in mock mode inside Jira
- then switch to live provider mode
- validate outputs on real issues and refine prompt quality

## Supporting docs to read next
- `docs/REAL_TEST_READINESS.md`
- `docs/TEST_RUNBOOK.md`
- `docs/NEXT_REAL_WORLD_STEPS.md`
- `docs/CONFIGURATION.md`

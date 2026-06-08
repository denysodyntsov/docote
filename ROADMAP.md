# DoCoTe Roadmap

## Current position
DoCoTe currently has two parallel assets:
- a landing page for positioning and early access collection
- a Jira app scaffold for the documentation-first workflow

## Product direction
Documentation first.

Core value proposition:
Turn Jira issues and change context into:
- technical implementation summaries
- documentation drafts
- release-ready summaries

## Suggested development order

### Phase 1 — Internal demo
Goal: make the Jira app visible and testable inside a Jira issue.

Deliverables:
- Forge app structure finalised
- issue panel visible in Jira
- generate button wired to backend
- mock output visible in panel

### Phase 2 — Real generation
Goal: replace mock output with real LLM-backed generation.

Deliverables:
- provider integration abstraction
- JSON schema validation
- handling for malformed outputs
- prompt hardening using real Jira issues

### Phase 3 — Usability pass
Goal: make the workflow useful enough for repeated use.

Deliverables:
- issue-type-aware prompts
- better output formatting
- save/load last generation
- basic feedback capture

### Phase 4 — Early customer validation
Goal: test with real teams and collect usage feedback.

Deliverables:
- 5 to 10 real issue trials
- feedback on output usefulness
- identify strongest persona and strongest output type

### Phase 5 — Expansion
Potential later additions:
- Confluence export
- linked PR parsing
- team prompt templates
- test generation
- broader integrations

## What not to do too early
- full code review product
- multi-platform expansion
- enterprise-heavy governance features
- deep repo indexing across everything

## Current recommendation
Prioritise:
1. Forge deployment readiness
2. real provider integration
3. internal Jira demo

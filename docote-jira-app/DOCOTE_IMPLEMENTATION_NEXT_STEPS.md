# DoCoTe Implementation Next Steps

## What exists now
A first Forge-oriented scaffold for the Jira plugin exists.
It already defines:
- issue panel module
- Jira issue fetching
- prompt construction
- mock generation path
- storage of last generation per issue

## Recommended build order

### Step 1 — Add actual Forge frontend
Build a simple issue panel UI with:
- textarea for additional PR / implementation context
- button: Generate documentation
- output sections:
  - Technical summary
  - Documentation draft
  - Release summary
- copy buttons
- loading state

### Step 2 — Replace mock generator with real LLM call
Use a backend provider call with:
- prompt from `buildDocumentationPrompt`
- strict JSON response requirement
- output validation
- fallback handling if provider returns bad shape

### Step 3 — Improve input quality
Add:
- issue-type-aware formatting
- better acceptance criteria extraction
- optional linked PR parsing later
- basic comment summarisation

### Step 4 — Add user feedback loop
Collect:
- thumbs up / thumbs down
- notes on missing information
- which of three outputs is most valuable

### Step 5 — Add persistence and export
Potential additions:
- save named documentation versions
- copy-to-clipboard helpers
- later Confluence export

## Immediate engineering priorities
1. Create `static/main` frontend scaffold
2. Wire frontend to Forge resolver methods
3. Test on sample Jira issues
4. Decide LLM provider approach
5. Harden output schema

## Suggested success criteria for v1
- issue panel works in Jira
- can generate all 3 outputs from a real issue
- output is useful enough to edit, not rewrite from zero
- first 5 to 10 real issues validate the workflow

## Suggested initial non-technical validation
Before going too deep into implementation, test these outputs manually on real issues:
- one bug
- one story
- one task
- one ambiguous ticket

This will show quickly whether the documentation-first wedge is strong enough.

# DoCoTe Forge Wiring Plan

## Goal
Move the current UI from local mock mode to actual Forge issue panel execution.

## Current state
### Backend
Implemented resolver methods:
- `getIssueContext`
- `generateDocumentation`
- `getLastGeneration`

### Frontend
Two frontend modes now exist:
- `app.js` — local/mock scaffold
- `forge-app.js` — intended Forge bridge version using `@forge/bridge`

## Recommended migration path

### Step 1 — Keep both modes for now
This is useful because:
- local UI can be reviewed without Forge setup
- Forge UI can be wired once deployment environment is ready

### Step 2 — Decide frontend packaging approach
Two practical routes:

#### Route A — Custom UI build
Use a proper frontend bundler and package `forge-app.js` through a build step.

Pros:
- more realistic for a polished app
- easier long-term UI evolution

Cons:
- more setup now

#### Route B — Simpler MVP wiring
Keep HTML/CSS/JS extremely light and adapt to Forge custom UI with minimal tooling.

Pros:
- faster path to first internal demo

Cons:
- less scalable frontend structure

## Recommendation
For DoCoTe MVP, choose **Route B first**.

## Next engineering tasks
1. Add Forge-compatible frontend packaging
2. Include `@forge/bridge`
3. Switch issue panel resource to actual bundled frontend
4. Verify resolver calls in Jira issue context
5. Test on a real issue

## After successful wiring
Next step should be replacing mock generation in backend with a real provider call and schema validation.

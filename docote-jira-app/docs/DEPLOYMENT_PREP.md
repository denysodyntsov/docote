# DoCoTe Deployment Preparation

## Current reality
The project is now structurally ready for the next deployment step, but the Forge CLI is not installed on this machine yet.

## What is ready
- Forge manifest draft
- backend resolver scaffold
- frontend local scaffold
- frontend Forge-oriented scaffold
- prompt builder
- mock generation flow
- storage flow for last issue generation

## What is missing before first real deploy
1. Forge CLI installed
2. Atlassian app id placed into `manifest.yml`
3. Frontend packaging choice finalised
4. Forge environment authenticated
5. Real Jira test tenant available

## Recommended next install steps
On a machine where you want to deploy the app:

```bash
npm install -g @forge/cli
forge login
```

Then from the project folder:

```bash
forge lint
forge deploy
forge install
```

## Files to pay attention to
- `manifest.yml`
- `src/index.js`
- `src/prompts.js`
- `static/main/index.forge.html`
- `static/main/forge-app.js`

## Important note
The current UI is intentionally simple. That is good. It reduces moving parts while validating the core product workflow.

## Recommended next milestone
**Milestone: internal Jira demo**

Success criteria:
- app appears in Jira issue panel
- user can paste extra context
- generate action returns 3 outputs
- last result can be reloaded

After that, replace mock generation with a real provider call.

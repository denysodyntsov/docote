# DoCoTe Test Runbook

## 1. Prepare environment
- install Forge CLI
- authenticate with Forge
- set provider environment variables
- confirm app id in `manifest.yml`

## 2. Deploy app
Typical steps:
```bash
forge lint
forge deploy
forge install
```

## 3. Configure provider mode
For first real provider test:
```bash
export DOCOTE_PROVIDER_MODE=live
export DOCOTE_API_KEY=YOUR_KEY
export DOCOTE_MODEL=gpt-4.1-mini
export DOCOTE_TIMEOUT_MS=20000
export DOCOTE_RETRIES=1
```

## 4. Test on a real Jira issue
Use one issue with:
- meaningful description
- acceptance criteria
- at least one comment

## 5. Validate outputs
Check that DoCoTe returns:
- technical summary
- documentation draft
- release summary

## 6. Validate edge behaviour
Check:
- mode badge
- prompt trim badge
- fallback path when provider fails
- copy buttons

## 7. Capture findings
For each issue tested, note:
- issue type
- whether output was usable
- whether trimming happened
- whether fallback happened
- what was missing or hallucinated

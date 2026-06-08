# Real Test Readiness

## Goal
Reach the point where DoCoTe can be tested inside a real Jira environment with a real provider.

## What is already in place
- documentation-first product shape
- landing page and early access flow
- Jira app scaffold
- local and Forge-oriented frontend versions
- mock/live provider path
- provider fallback logic
- prompt trimming
- issue normalization
- JSON extraction
- retry and timeout controls

## Remaining blockers before real testing
1. Forge CLI installed
2. Forge login completed
3. real Atlassian app id in `manifest.yml`
4. app deployed to Jira test site
5. real provider API key configured
6. issue panel tested on actual Jira issues

## Recommended first real test setup
### Jira side
- test project with a few representative issues
- issue types: Story, Task, Bug
- at least one issue with:
  - long description
  - comments
  - acceptance criteria

### Provider side
- set `DOCOTE_PROVIDER_MODE=live`
- set `DOCOTE_API_KEY`
- keep retries low
- start with low temperature

## Minimum success criteria
- DoCoTe appears inside a Jira issue panel
- user can add extra context
- generation returns 3 outputs
- output can be copied
- fallback behaviour is visible if provider fails

## Stronger success criteria
- output is useful enough to edit, not rewrite
- long Jira issues do not break generation
- malformed provider output is handled cleanly
- demo works across Story, Task, and Bug

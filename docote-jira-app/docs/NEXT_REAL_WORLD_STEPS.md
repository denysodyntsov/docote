# Next Real World Steps

## Short version
The main remaining work is no longer product-definition work. It is execution work.

## Priority order
1. Deploy Forge app to a real Jira environment
2. Run first tests in mock mode inside Jira
3. Switch to live provider mode
4. Validate output quality on real issues
5. Refine prompt/output quality from evidence

## Expected first real-world findings
Likely issues to discover quickly:
- some Jira issues too vague for good output
- comments sometimes noisy or irrelevant
- acceptance criteria extraction may need refinement
- output sections may need issue-type-specific tuning

## What to improve after first real tests
- stronger issue-type templates
- better acceptance criteria detection
- optional PR summary integration
- better formatting for final documentation draft

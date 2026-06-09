# DoCoTe Web MVP

## Goal
Build the first web version of DoCoTe without deleting or replacing the preserved Jira-first work.

## MVP objective
For a connected repository and selected PR / commit range, generate:
- technical implementation summary
- release summary
- documentation update draft
- likely impacted documentation sections

## Inputs
### Required
- GitHub repository connection
- selected PR, branch, or commit range

### Optional
- pasted Jira ticket text
- pasted current documentation text
- manually entered additional context

## Outputs
1. Technical summary
2. Release summary
3. Documentation draft update
4. Impact overview:
   - likely changed areas
   - likely outdated docs
   - what should be reviewed

## Non-goals for MVP
- no full automatic Confluence sync
- no GitLab at first if GitHub already proves flow
- no enterprise permissions model at first
- no deep multi-repo knowledge graph
- no autonomous background update engine yet

## Why this MVP is strong
- easier to demo than plugin-first flow
- closer to actual documentation drift problem
- useful even before Jira/Confluence full integration
- preserves room for later Jira app integration

## First ideal demo
A user connects GitHub, chooses a PR, pastes a Jira story if needed, and receives:
- a technical summary
- a release summary
- a suggested documentation update
- a list of likely impacted documentation areas

# DoCoTe Web Build Plan

## Immediate direction
Create a separate web-first product track without deleting the preserved Jira-first work.

## First practical build stages
1. Basic web app scaffold
2. GitHub OAuth integration
3. Repository selection UI
4. PR / branch / commit-range selection UI
5. Generation request flow
6. Output display for:
   - technical summary
   - release summary
   - documentation draft
   - impacted docs view

## Reuse from existing DoCoTe work
The following logic can later be shared from the Jira-first work:
- provider abstraction
- prompt guardrails
- retry/timeout logic
- JSON extraction
- issue normalization ideas

## MVP success condition
A user can connect GitHub, choose a change scope, and receive useful draft outputs in the web UI.

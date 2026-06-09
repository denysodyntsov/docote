# DoCoTe Web API Plan

## First backend responsibilities
The web-first track will need a backend API that can:
- authenticate users
- store connected repositories
- accept change-scope selections
- build generation requests
- return structured outputs

## Suggested first endpoints
- `POST /api/connect/github` — OAuth callback / token exchange later
- `GET /api/repositories` — list connected repos
- `POST /api/analyze` — analyze a PR / branch / commit range
- `GET /api/analysis/:id` — load saved analysis later

## First practical simplification
For the very first working version, a mocked backend route is acceptable if it proves UI flow clearly.

## Key payload
Input should eventually include:
- repository
- scope type
- PR number / branch / commit range
- optional Jira text
- optional current documentation text
- optional extra context

Output should return:
- technical summary
- release summary
- documentation draft
- impacted documentation areas

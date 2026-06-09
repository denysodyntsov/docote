# DoCoTe Web Architecture v1

## Principle
Keep the existing Jira-first work intact.
Create a parallel web-first track that can later reuse generation logic and provider abstractions.

## Main components

### 1. Web frontend
Responsibilities:
- onboarding
- auth
- repository selection
- branch / PR / commit-range selection
- output display
- history view later

### 2. Backend API
Responsibilities:
- auth session handling
- GitHub integration
- repo metadata fetching
- commit / PR / diff ingestion
- prompt construction orchestration
- generation requests
- result persistence

### 3. Integration layer
Initial target:
- GitHub

Later:
- GitLab
- Jira
- Confluence
- document stores

### 4. Generation engine
Reuse ideas from existing DoCoTe work:
- prompt construction
- provider abstraction
- fallback logic
- output validation

### 5. Persistence
Initial needs:
- users
- connected repositories
- analysis requests
- generated outputs
- history of document-impact runs

## Recommended first stack direction
- Next.js web app
- API routes / backend service layer
- database (Postgres or SQLite for early local work)
- OAuth for GitHub
- existing DoCoTe generation logic adapted into shared modules later

## Suggested first internal flow
1. User signs in
2. Connects GitHub
3. Chooses repository
4. Chooses PR / branch / commit range
5. Backend fetches changed files / metadata
6. Generation engine creates outputs
7. Frontend shows summaries and suggested documentation impact

## Preserved Jira path
The Jira app remains separate for now and later becomes:
- supporting integration
- issue-surface workflow
- enterprise extension

# Analysis Request Builder

## Purpose
The web-first DoCoTe flow now has enough moving pieces that request construction should be centralized.

## Current step
Add a helper that converts:
- UI selection state
- active PR/branch/commit-range hints

into one normalized analysis request payload.

## Why this matters
It reduces duplicated request-building logic in frontend components and makes later testing easier.

## Next step
Use this helper directly in the web demo form and later in more advanced selection UIs.

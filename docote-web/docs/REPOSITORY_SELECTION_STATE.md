# Repository Selection State

## Purpose
The web-first DoCoTe track needs a concept of selected repository state, even before full auth/session support is implemented.

## Current step
Add a very lightweight in-memory repository selection store and a route to update it.

## Why this matters
This begins to separate:
- available repositories
- actively selected repository

## Current limitation
This is process-memory only and not user-safe.
It is only a prototype step.

## Next step
Later replace with user-scoped session persistence after auth is implemented.

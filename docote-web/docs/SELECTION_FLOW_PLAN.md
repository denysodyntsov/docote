# Selection Flow Plan

## Purpose
The web-first DoCoTe track needs a more explicit user selection flow before real repository-backed analysis can happen.

## Current step
Add a stable local selection state shape that can later be shared across:
- repository selector
- analysis form
- backend request payload

## Why this matters
It reduces UI drift and keeps the future transition to real repository state cleaner.

## Next likely improvements
- unify repository selector and demo form state
- add branch / PR / commit-range switching logic
- persist selection in URL or client state later

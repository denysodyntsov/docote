# Run Metadata Plan

## Purpose
As DoCoTe analysis becomes more structured, each run should carry lightweight metadata for debugging, history, and later persistence.

## Current step
Add a helper to generate consistent run metadata for analysis executions.

## Why this matters
This makes it easier to track:
- when a run happened
- what mode it used
- which repository and scope it targeted

## Next step
Use run metadata directly in the analysis route and expose it to the frontend/history model.

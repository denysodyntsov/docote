# Analysis History Plan

## Purpose
Even the early web-first DoCoTe prototype benefits from a lightweight history view.

## Current step
Add a simple in-memory history store so recent analyses can be surfaced back to the UI.

## Why this matters
This begins to model the real product direction where users should be able to:
- review previous runs
- compare changes over time
- understand how documentation suggestions evolved

## Current limitation
The current history is in-memory only and resets with process restarts.

## Next step
Later replace with real persistence and user-scoped history.

# Scope Resolution

## Purpose
The web-first DoCoTe prototype now has multiple possible analysis scope concepts:
- pull request
- branch
- commit range

## Current step
A scope resolver now normalizes draft UI state into one resolved analysis target.

## Why this matters
This avoids spreading branching logic everywhere in the UI and backend.

## Current behaviour
- commit range wins when scope type is `commit-range`
- branch wins when scope type is `branch`
- otherwise PR is used

## Benefit
This makes later integration with real repository metadata much cleaner.

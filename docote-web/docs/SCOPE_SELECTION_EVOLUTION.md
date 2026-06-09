# Scope Selection Evolution

## Purpose
The web-first DoCoTe track needs more realistic selection options for:
- repository
- pull request
- branch
- later commit range

## Current step
A helper now builds selection options from mocked repository and PR data.

## Why this matters
This creates a clean transition from:
- mocked data endpoints
into
- actual UI dropdown / selector logic

## Next step
Use this helper directly in the web form or repository selector so scope choices become more explicit in the active UI.

# Debug Output Plan

## Current step
The web analysis route now starts exposing structured debug information, including:
- change-context summary
- changed files
- prompt preview
- provider mode preview

## Why this matters
This makes the web-first track easier to inspect while the backend is still mocked.

## Long-term expectation
Debug output should later be:
- hidden from normal users
- kept for internal dev / diagnostics
- optionally logged for analysis troubleshooting

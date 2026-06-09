# GitHub OAuth Setup

## Purpose
This document defines the first GitHub OAuth/config skeleton for the web-first DoCoTe track.

## Current state
The current implementation does not complete the full OAuth token exchange.
It does provide:
- configuration helpers
- `/api/auth/github/start`
- `/api/auth/github/callback`
- a frontend card to validate whether OAuth is configured

## Required environment variables later
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GITHUB_REDIRECT_URI`

## Why this matters
This is the first structural step from mocked repository flow toward real GitHub integration.

## Next steps
1. add env example values for GitHub OAuth
2. implement token exchange in callback route
3. add secure session storage
4. fetch real repositories for authenticated user

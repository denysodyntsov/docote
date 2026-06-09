# GitHub Integration Plan

## Immediate goal
Move the web-first DoCoTe track from static repository placeholders toward a repo-backed flow.

## First safe step
Use mocked GitHub endpoints for:
- repositories
- pull requests

This lets the frontend evolve around realistic API shapes before OAuth is added.

## Later steps
1. GitHub OAuth
2. secure token storage
3. fetch real repositories
4. fetch PR metadata and changed files
5. transform change metadata into generation inputs

## Why this matters
The closer DoCoTe gets to repository-backed context, the closer it gets to its real product promise.

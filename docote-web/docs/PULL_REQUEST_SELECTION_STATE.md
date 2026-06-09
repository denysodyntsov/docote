# Pull Request Selection State

## Purpose
After repository selection, the web-first DoCoTe prototype also needs a concept of active pull request state.

## Current step
Add a lightweight in-memory pull request selection store and route.

## Why this matters
It helps the product flow move toward:
- selected repository
- selected change scope
- selected PR or branch
- analysis against active selection

## Current limitation
This is still process-memory only and not user-safe.

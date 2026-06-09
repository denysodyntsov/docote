# Web Analysis Engine Plan

## Purpose
Move the web-first DoCoTe track from route-level mocked responses toward a reusable analysis service shape.

## Current step
Introduce a dedicated mock analysis engine module so the API route is no longer hardcoded inline.

## Why this matters
This makes the later transition easier:
- mock engine now
- real GitHub-backed context builder later
- real provider-backed generation after that

## Intended evolution
1. mocked analysis engine
2. repo metadata + PR metadata ingestion
3. change context summarization
4. generation orchestration using shared DoCoTe logic
5. persistence / history later

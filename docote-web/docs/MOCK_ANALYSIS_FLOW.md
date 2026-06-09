# Mock Analysis Flow

## Purpose
Before real OAuth and repository access are added, the web-first DoCoTe track now has a mocked analysis route.

## What it does
- accepts a repository / scope style payload
- returns mock structured outputs
- allows the web UI to behave more like a real product

## Why this matters
This closes the gap between static concept UI and an interactive demo.

## Current limitations
- no real GitHub integration yet
- no real diff ingestion yet
- no persistence yet
- no auth yet

## Next step after this
- add GitHub OAuth plan and auth skeleton
- add repository selection state
- move from mock route toward actual analysis orchestration

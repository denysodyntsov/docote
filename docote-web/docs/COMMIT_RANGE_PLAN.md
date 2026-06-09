# Commit Range Plan

## Purpose
The web-first DoCoTe product should not depend only on pull requests.
A commit-range mode is important for:
- internal branches
- manual investigations
- post-merge analysis
- partial release analysis

## Current step
A first commit-range selection helper and UI concept were added.

## Why this matters
This broadens the future analysis scope beyond PR-only workflows.

## Next step
Later connect commit-range selection into:
- analysis payload
- change-context builder
- diff-context builder

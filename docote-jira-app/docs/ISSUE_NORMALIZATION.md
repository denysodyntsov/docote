# Issue Normalization

## Problem
Real Jira issues can contain:
- huge descriptions
- noisy comments
- deeply nested rich-text structures
- too much irrelevant content for one prompt

## Current solution
A first normalization layer now:
- extracts key summary fields
- truncates oversized description content
- limits comment count
- truncates each comment body
- produces a cleaner prompt input shape

## Why this matters
This reduces:
- prompt size growth
- noise sent to the model
- brittle behaviour on very large Jira payloads

## Current limitations
This is still basic normalization, not summarisation.
Future improvements may include:
- issue-type-aware extraction
- acceptance criteria detection before truncation
- richer structured field handling
- comment summarisation

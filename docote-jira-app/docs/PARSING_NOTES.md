# Parsing Notes

## Problem
Even when asked for JSON-only output, providers sometimes return:
- surrounding explanation text
- fenced code blocks
- extra formatting

## Current improvement
A small helper now attempts:
1. direct `JSON.parse()`
2. best-effort extraction of the first outer JSON object

## Why this matters
It reduces brittleness in early provider integration while still failing clearly if valid JSON cannot be recovered.

## Important limitation
This is still not a full parser for every malformed response. It is a pragmatic MVP safeguard.

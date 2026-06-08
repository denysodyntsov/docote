# Retry and Timeout Notes

## Why this matters
Live provider calls can fail for temporary reasons:
- timeout
- transient API failures
- malformed first response

## Current direction
DoCoTe now has a tiny retry utility so provider integration can retry once before giving up.

## Recommended behaviour
- keep retries low
- prefer clear failure over endless waiting
- preserve user trust by making fallback visible

## Suggested default
- 1 retry
- small delay
- clean error surfaced if still failing

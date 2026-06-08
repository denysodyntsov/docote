# Prompt Quality Notes

## Current improvement
DoCoTe now has a more deliberate acceptance-criteria extraction step.

## What it tries first
- explicit `Acceptance Criteria`
- `Definition of Done`
- `Done when`
- `Success Criteria`
- short `AC:` marker

## Fallback
If no explicit section is found, it tries to recover likely criteria from bullet or numbered lists.

## Why this matters
A large share of issue usefulness depends on how well DoCoTe can identify:
- expected behaviour
- done conditions
- output boundaries

This is a first practical improvement toward better real-world prompt quality.

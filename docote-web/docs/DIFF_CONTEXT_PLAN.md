# Diff Context Plan

## Purpose
DoCoTe’s web-first product needs a middle layer between repository selection and generation output.

## Current step
A mock diff-context builder now derives:
- changed files
- change summary
- likely impacted documentation areas

from the structured change context.

## Why this matters
This is a step toward the real future flow:
- repo selection
- PR or commit range
- changed files / metadata
- diff context
- generation output

## Next step
Use diff-context output directly inside the analysis engine so generated results reflect changed-file reasoning more clearly.

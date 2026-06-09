# Provider Request Shape

## Purpose
As DoCoTe’s web-first backend evolves, it helps to define a stable request shape that can later be sent to a real provider layer.

## Current step
Add a provider-request-shape model built from:
- change context
- diff context

## Why this matters
This separates:
- internal analysis context
from
- provider-facing request data

## Next step
Later use this shape directly inside a live provider client or orchestration layer.

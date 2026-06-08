# Next Code Steps

## What changed
The project now has a real provider-ready implementation path.

## Current mode
- default mode remains `mock`
- live provider path exists behind configuration

## Immediate next engineering step
Update `src/index.js` so generation chooses between:
- mock mode
- live provider mode

## After that
- test provider path with a known prompt
- add response-size guardrails
- add cleaner UI error handling for provider failures
- decide whether to store full prompt in Forge storage or only a preview

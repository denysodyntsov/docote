# Web Provider Plan

## Purpose
The web-first DoCoTe track now needs a bridge from context-building to actual generation.

## Current step
Add provider configuration and a provider-prompt builder for the web path.

## Why this matters
The Jira-first track already explored provider abstraction ideas.
The web-first track now starts shaping its own provider-ready layer so later these can be unified or shared.

## Current focus
- provider mode config
- prompt builder from change context + diff context
- later: actual live provider request path

## Next step
Use the provider prompt builder inside the web analysis route so outputs can expose a prompt preview for debugging and evolution.

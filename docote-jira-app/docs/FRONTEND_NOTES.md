# DoCoTe Frontend Notes

## What was added
A first UI scaffold was added under `static/main/`.

Files:
- `index.html`
- `styles.css`
- `app.js`

## Purpose
This is not yet a deployed Forge UI. It is a practical shape of the issue panel that the Forge app should expose.

It includes:
- extra context textarea
- generate button
- load previous result button
- three output sections
- copy-to-clipboard actions
- inline status messages

## Next step to make it real
Replace `mockInvoke()` in `app.js` with Forge bridge calls, for example:
- `invoke('generateDocumentation', { extraContext })`
- `invoke('getLastGeneration')`

Then package the UI through the actual Forge frontend workflow.

## Why this was worth doing first
It makes the product more tangible immediately and reduces ambiguity before investing in the full Forge setup.

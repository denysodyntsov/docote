# DoCoTe Configuration

## Current provider configuration
The provider path is now configurable through environment variables.

## Supported variables
- `DOCOTE_PROVIDER_MODE` — `mock` or `live`
- `DOCOTE_API_KEY` — provider API key
- `DOCOTE_API_BASE_URL` — defaults to `https://api.openai.com/v1`
- `DOCOTE_MODEL` — defaults to `gpt-4.1-mini`
- `DOCOTE_TEMPERATURE` — defaults to `0.2`
- `DOCOTE_TIMEOUT_MS` — defaults to `20000`
- `DOCOTE_RETRIES` — defaults to `1`

## Recommended initial setup
For safe development:
- `DOCOTE_PROVIDER_MODE=mock`

For live testing later:
- `DOCOTE_PROVIDER_MODE=live`
- set `DOCOTE_API_KEY`

## Behaviour
- if provider mode is `mock`, DoCoTe uses mock generation
- if provider mode is `live` but key is missing, DoCoTe should fail cleanly
- output still goes through schema validation

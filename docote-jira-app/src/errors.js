export function toUserSafeError(error, fallbackMessage = 'Unexpected error.') {
  const message = error?.message || fallbackMessage;

  if (message.includes('DOCOTE_API_KEY')) {
    return 'DoCoTe live provider is not configured yet.';
  }

  if (message.includes('invalid JSON')) {
    return 'The provider returned an invalid response format.';
  }

  if (message.includes('timed out')) {
    return 'The provider request timed out.';
  }

  if (message.includes('Provider request failed')) {
    return 'The provider request failed.';
  }

  return fallbackMessage;
}

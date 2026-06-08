const DEFAULT_MAX_PROMPT_CHARS = 14000;

export function trimPrompt(prompt, maxChars = DEFAULT_MAX_PROMPT_CHARS) {
  if (!prompt || typeof prompt !== 'string') {
    return { prompt: '', trimmed: false, originalLength: 0, finalLength: 0 };
  }

  if (prompt.length <= maxChars) {
    return {
      prompt,
      trimmed: false,
      originalLength: prompt.length,
      finalLength: prompt.length
    };
  }

  const head = prompt.slice(0, Math.floor(maxChars * 0.75));
  const tail = prompt.slice(-Math.floor(maxChars * 0.2));
  const marker = '\n\n[DoCoTe note: prompt content was trimmed for size.]\n\n';
  const finalPrompt = head + marker + tail;

  return {
    prompt: finalPrompt,
    trimmed: true,
    originalLength: prompt.length,
    finalLength: finalPrompt.length
  };
}

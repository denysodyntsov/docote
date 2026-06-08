const message = document.getElementById('message');
const technicalSummary = document.getElementById('technicalSummary');
const documentationDraft = document.getElementById('documentationDraft');
const releaseSummary = document.getElementById('releaseSummary');
const modeBadge = document.getElementById('modeBadge');
const trimBadge = document.getElementById('trimBadge');

function setMessage(text, type = '') {
  message.textContent = text;
  message.className = 'message';
  if (type) message.classList.add(type);
}

function setOutputs(outputs) {
  technicalSummary.textContent = outputs?.technical_summary || 'No output.';
  documentationDraft.textContent = outputs?.documentation_draft || 'No output.';
  releaseSummary.textContent = outputs?.release_summary || 'No output.';
}

function setMeta(result) {
  modeBadge.textContent = `Mode: ${result?.modeUsed || 'local mock'}`;

  const promptInfo = result?.promptInfo;
  if (!promptInfo) {
    trimBadge.textContent = 'Prompt: not evaluated';
    return;
  }

  trimBadge.textContent = promptInfo.trimmed
    ? `Prompt: trimmed (${promptInfo.originalLength} → ${promptInfo.finalLength})`
    : `Prompt: not trimmed (${promptInfo.finalLength})`;
}

async function mockInvoke(action, payload = {}) {
  // Placeholder for Forge bridge invoke().
  if (action === 'generateDocumentation') {
    return {
      ok: true,
      modeUsed: 'local-mock',
      promptInfo: {
        trimmed: false,
        originalLength: 420,
        finalLength: 420
      },
      outputs: {
        technical_summary: 'Mock technical summary from DoCoTe frontend scaffold. Replace with Forge invoke().',
        documentation_draft: 'Mock documentation draft from DoCoTe frontend scaffold. Replace with Forge invoke().',
        release_summary: 'Mock release summary from DoCoTe frontend scaffold. Replace with Forge invoke().'
      }
    };
  }
  if (action === 'getLastGeneration') {
    return {
      ok: true,
      data: {
        modeUsed: 'local-mock',
        promptInfo: {
          trimmed: false,
          originalLength: 420,
          finalLength: 420
        },
        outputs: {
          technical_summary: 'Previously generated technical summary placeholder.',
          documentation_draft: 'Previously generated documentation draft placeholder.',
          release_summary: 'Previously generated release summary placeholder.'
        }
      }
    };
  }
  return { ok: false, error: 'Unknown action' };
}

document.getElementById('generateBtn').addEventListener('click', async () => {
  const extraContext = document.getElementById('extraContext').value.trim();
  setMessage('Generating draft outputs...');
  const result = await mockInvoke('generateDocumentation', { extraContext });
  if (!result.ok) {
    setMessage(result.error || 'Generation failed.', 'error');
    return;
  }
  setOutputs(result.outputs);
  setMeta(result);
  setMessage('Draft outputs generated successfully.', 'success');
});

document.getElementById('loadLastBtn').addEventListener('click', async () => {
  setMessage('Loading last result...');
  const result = await mockInvoke('getLastGeneration');
  if (!result.ok || !result.data?.outputs) {
    setMessage('No previous output found.', 'error');
    return;
  }
  setOutputs(result.data.outputs);
  setMeta(result.data);
  setMessage('Loaded previous outputs.', 'success');
});

document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', async () => {
    const targetId = button.getAttribute('data-copy-target');
    const target = document.getElementById(targetId);
    if (!target) return;
    await navigator.clipboard.writeText(target.textContent);
    setMessage('Copied to clipboard.', 'success');
  });
});

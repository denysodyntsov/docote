import { invoke } from '@forge/bridge';

const message = document.getElementById('message');
const technicalSummary = document.getElementById('technicalSummary');
const documentationDraft = document.getElementById('documentationDraft');
const releaseSummary = document.getElementById('releaseSummary');
const extraContextInput = document.getElementById('extraContext');
const generateBtn = document.getElementById('generateBtn');
const loadLastBtn = document.getElementById('loadLastBtn');

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

async function runGenerate() {
  try {
    setMessage('Generating draft outputs...');
    generateBtn.disabled = true;
    const extraContext = extraContextInput.value.trim();
    const result = await invoke('generateDocumentation', { extraContext });
    if (!result?.ok) {
      throw new Error(result?.error || 'Generation failed.');
    }
    setOutputs(result.outputs);
    setMessage('Draft outputs generated successfully.', 'success');
  } catch (error) {
    setMessage(error.message || 'Generation failed.', 'error');
  } finally {
    generateBtn.disabled = false;
  }
}

async function runLoadLast() {
  try {
    setMessage('Loading last result...');
    loadLastBtn.disabled = true;
    const result = await invoke('getLastGeneration');
    if (!result?.ok || !result?.data?.outputs) {
      throw new Error('No previous output found.');
    }
    setOutputs(result.data.outputs);
    setMessage('Loaded previous outputs.', 'success');
  } catch (error) {
    setMessage(error.message || 'Unable to load previous output.', 'error');
  } finally {
    loadLastBtn.disabled = false;
  }
}

async function copyTarget(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  await navigator.clipboard.writeText(target.textContent);
  setMessage('Copied to clipboard.', 'success');
}

generateBtn.addEventListener('click', runGenerate);
loadLastBtn.addEventListener('click', runLoadLast);
document.querySelectorAll('.copy-btn').forEach((button) => {
  button.addEventListener('click', () => copyTarget(button.getAttribute('data-copy-target')));
});

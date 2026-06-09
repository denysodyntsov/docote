'use client';

import { useState } from 'react';
import { defaultSelectionState } from '../lib/selection-state';
import { SelectionSummary } from './selection-summary';
import { DocumentImpactList } from './document-impact-list';
import { buildAnalysisRequest } from '../lib/analysis-request-builder';
import { buildAnalysisSummary } from '../lib/analysis-summary';
import { AnalysisSummaryCard } from './analysis-summary-card';
import { AnalysisStatusList } from './analysis-status-list';

export function WebDemoForm() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const draftState = {
      repository: String(formData.get('repository') || ''),
      scopeType: String(formData.get('scopeType') || 'pull-request') as 'pull-request' | 'branch' | 'commit-range',
      scopeRef: String(formData.get('scopeRef') || ''),
      jiraText: String(formData.get('jiraText') || ''),
      currentDocText: String(formData.get('currentDocText') || ''),
      extraContext: String(formData.get('extraContext') || '')
    };

    const payload = buildAnalysisRequest({
      state: draftState,
      selectedPr: draftState.scopeType === 'pull-request' ? Number(String(draftState.scopeRef).replace('#', '')) || null : null,
      selectedBranch: draftState.scopeType === 'branch' ? draftState.scopeRef : null,
      commitRangeLabel: draftState.scopeType === 'commit-range' ? draftState.scopeRef : null
    });

    try {
      await fetch('/api/jira/context', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jiraText: payload.jiraText })
      });

      await fetch('/api/docs/current', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentDocText: payload.currentDocText })
      });

      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json();
      if (!json.ok) {
        throw new Error('Mock analysis failed.');
      }
      setResponse(json);
    } catch (err: any) {
      setError(err.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginTop: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Interactive demo flow</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 14 }}>
        <input name="repository" placeholder="example-org/payments-platform" defaultValue={defaultSelectionState.repository} style={inputStyle} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <select name="scopeType" defaultValue={defaultSelectionState.scopeType} style={inputStyle as any}>
            <option value="pull-request">Pull Request</option>
            <option value="branch">Branch</option>
            <option value="commit-range">Commit range</option>
          </select>
          <input name="scopeRef" placeholder="#148 or feature/branch" defaultValue={defaultSelectionState.scopeRef} style={inputStyle} />
        </div>
        <textarea name="jiraText" placeholder="Optional Jira story text" defaultValue={defaultSelectionState.jiraText} style={textareaStyle} />
        <textarea name="currentDocText" placeholder="Optional current documentation text" defaultValue={defaultSelectionState.currentDocText} style={textareaStyle} />
        <textarea name="extraContext" placeholder="Optional extra context" defaultValue={defaultSelectionState.extraContext} style={textareaStyle} />
        <button type="submit" disabled={loading} style={buttonStyle}>{loading ? 'Analyzing…' : 'Run mock analysis'}</button>
      </form>
      <SelectionSummary repository={defaultSelectionState.repository} scopeType={defaultSelectionState.scopeType} scopeRef={defaultSelectionState.scopeRef} />
      {error ? <p style={{ color: '#ff8c8c' }}>{error}</p> : null}
      {response ? (
        <>
        <AnalysisSummaryCard summary={buildAnalysisSummary(response)} />
        <div style={{ marginTop: 20, background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 18 }}>
          <div style={{ color: '#ffd27c', fontSize: 13, marginBottom: 10 }}>Mode: {response.meta?.mode} · {response.meta?.analyzedAt}</div>
          <h3 style={{ margin: '0 0 10px' }}>Technical summary</h3>
          <p style={textStyle}>{response.result?.technicalSummary}</p>
          <h3 style={{ margin: '18px 0 10px' }}>Release summary</h3>
          <p style={textStyle}>{response.result?.releaseSummary}</p>
          <h3 style={{ margin: '18px 0 10px' }}>Documentation draft</h3>
          <p style={textStyle}>{response.result?.documentationDraft}</p>
          <h3 style={{ margin: '18px 0 10px' }}>Impacted areas</h3>
          <ul style={{ margin: 0, paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.8 }}>
            {response.result?.impactedAreas?.map((item: string) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        </>
      ) : null}
      {response?.analysisStatus ? <AnalysisStatusList items={response.analysisStatus} /> : null}
      {response?.documentImpact ? <DocumentImpactList items={response.documentImpact} /> : null}
    </section>
  );
}

const inputStyle = {
  minHeight: 46,
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.03)',
  color: '#f2f4f8',
  padding: '0 14px',
  fontSize: 15
};

const textareaStyle = {
  ...inputStyle,
  minHeight: 110,
  padding: '14px'
};

const buttonStyle = {
  minHeight: 48,
  borderRadius: 12,
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #f2a51a, #ffbc43)',
  color: '#151515',
  fontWeight: 700,
  fontSize: 15
};

const textStyle = {
  margin: 0,
  color: '#aeb6c4',
  lineHeight: 1.8,
  whiteSpace: 'pre-wrap' as const
};

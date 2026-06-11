'use client';

import { buildExportPayload } from '../lib/export-payload';

export function ExportActionsCard({ response }: { response: any }) {
  function copyExport() {
    const payload = buildExportPayload({
      runMetadata: response?.runMetadata,
      runOutcomeSummary: response?.runOutcomeSummary,
      impactedDocTargets: response?.impactedDocTargets,
      deliverables: response?.deliverables,
      releaseReadiness: response?.releaseReadiness
    });

    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  }

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Export / share</h2>
      <p style={{ marginTop: 0, color: '#aeb6c4', lineHeight: 1.8 }}>
        Copy a structured export payload for sharing, downstream workflow use, or future integration.
      </p>
      <button type="button" onClick={copyExport} style={{ minHeight: 44, borderRadius: 12, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #f2a51a, #ffbc43)', color: '#151515', fontWeight: 700, fontSize: 14, padding: '0 16px' }}>
        Copy export payload
      </button>
    </section>
  );
}

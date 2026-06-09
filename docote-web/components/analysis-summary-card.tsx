export function AnalysisSummaryCard({ summary }: { summary: { headline: string; riskLevel: string; updatePriority: string } }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Analysis summary</h2>
      <p style={{ margin: '0 0 16px', color: '#aeb6c4', lineHeight: 1.8 }}>{summary.headline}</p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Badge label={`Risk: ${summary.riskLevel}`} />
        <Badge label={`Update priority: ${summary.updatePriority}`} />
      </div>
    </section>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span style={{ padding: '8px 12px', borderRadius: 999, background: 'rgba(242,165,26,0.12)', color: '#ffd27c', fontSize: 13, fontWeight: 700 }}>
      {label}
    </span>
  );
}

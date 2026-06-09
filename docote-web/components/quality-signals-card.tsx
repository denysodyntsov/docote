export function QualitySignalsCard({ signals }: { signals: { hasJiraContext: boolean; hasCurrentDoc: boolean; hasExtraContext: boolean; changedFileCount: number; highImpactCount: number } }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Quality signals</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
        <Signal label="Jira context" value={signals.hasJiraContext ? 'yes' : 'no'} />
        <Signal label="Current documentation" value={signals.hasCurrentDoc ? 'yes' : 'no'} />
        <Signal label="Extra context" value={signals.hasExtraContext ? 'yes' : 'no'} />
        <Signal label="Changed files" value={String(signals.changedFileCount)} />
        <Signal label="High impact items" value={String(signals.highImpactCount)} />
      </div>
    </section>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 14 }}>
      <div style={{ color: '#aeb6c4', fontSize: 13, marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 700 }}>{value}</div>
    </div>
  );
}

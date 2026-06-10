export function AnalysisAuditCard({ items }: { items: { label: string; value: string }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Analysis audit details</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((item) => (
          <div key={item.label} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 14 }}>
            <div style={{ color: '#aeb6c4', fontSize: 13, marginBottom: 6 }}>{item.label}</div>
            <div style={{ fontWeight: 700 }}>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DocumentImpactList({ items }: { items: { area: string; reason: string; severity: string }[] }) {
  return (
    <section style={{ marginTop: 28, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Document impact assessment</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.area} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <strong>{item.area}</strong>
              <span style={{ padding: '4px 10px', borderRadius: 999, background: severityColor(item.severity), color: '#111318', fontSize: 12, fontWeight: 700 }}>
                {item.severity}
              </span>
            </div>
            <p style={{ margin: '10px 0 0', color: '#aeb6c4', lineHeight: 1.7 }}>{item.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function severityColor(severity: string) {
  if (severity === 'high') return '#ff8c8c';
  if (severity === 'medium') return '#ffd27c';
  return '#9dd39d';
}

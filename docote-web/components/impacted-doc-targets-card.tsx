export function ImpactedDocTargetsCard({ items }: { items: { name: string; reason: string; priority: string }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Impacted documentation targets</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.name} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <strong>{item.name}</strong>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: item.priority === 'high' ? '#ff8c8c' : '#ffd27c', color: '#111318', fontSize: 12, fontWeight: 700 }}>
                {item.priority}
              </span>
            </div>
            <p style={{ margin: '10px 0 0', color: '#aeb6c4', lineHeight: 1.7 }}>{item.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

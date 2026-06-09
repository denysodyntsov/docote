export function RecommendationsList({ items }: { items: { title: string; action: string; priority: string }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Recommended next actions</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.title} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <strong>{item.title}</strong>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: item.priority === 'high' ? '#ff8c8c' : item.priority === 'medium' ? '#ffd27c' : '#9dd39d', color: '#111318', fontSize: 12, fontWeight: 700 }}>{item.priority}</span>
            </div>
            <p style={{ margin: '10px 0 0', color: '#aeb6c4', lineHeight: 1.7 }}>{item.action}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

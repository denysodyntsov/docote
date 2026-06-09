export function AnalysisStatusList({ items }: { items: { step: string; description: string; completed: boolean }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Analysis pipeline status</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((item) => (
          <article key={item.step} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 14, display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{item.step}</div>
              <div style={{ color: '#aeb6c4', fontSize: 14, marginTop: 4 }}>{item.description}</div>
            </div>
            <span style={{ padding: '6px 10px', borderRadius: 999, background: item.completed ? '#9dd39d' : '#ffd27c', color: '#111318', fontSize: 12, fontWeight: 700 }}>
              {item.completed ? 'done' : 'pending'}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FileCoverageList({ items }: { items: { path: string; kind: string }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Changed file coverage</h2>
      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((item) => (
          <article key={item.path} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 14, display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
            <div style={{ color: '#aeb6c4' }}>{item.path}</div>
            <span style={{ padding: '6px 10px', borderRadius: 999, background: 'rgba(242,165,26,0.12)', color: '#ffd27c', fontSize: 12, fontWeight: 700 }}>{item.kind}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ReleaseImpactList({ items }: { items: { area: string; note: string }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Release impact notes</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.area} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <strong>{item.area}</strong>
            <p style={{ margin: '10px 0 0', color: '#aeb6c4', lineHeight: 1.7 }}>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

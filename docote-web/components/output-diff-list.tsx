export function OutputDiffList({ items }: { items: { section: string; previous: string; current: string; changed: boolean }[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Output diff preview</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.section} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
              <strong>{item.section}</strong>
              <span style={{ padding: '6px 10px', borderRadius: 999, background: item.changed ? '#ffd27c' : '#9dd39d', color: '#111318', fontSize: 12, fontWeight: 700 }}>
                {item.changed ? 'changed' : 'same'}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

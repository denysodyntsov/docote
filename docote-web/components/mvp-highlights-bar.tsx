export function MvpHighlightsBar({ items }: { items: string[] }) {
  return (
    <section style={{ marginTop: 24, display: 'grid', gap: 10 }}>
      {items.map((item) => (
        <div key={item} style={{ background: 'rgba(242,165,26,0.08)', border: '1px solid rgba(242,165,26,0.2)', borderRadius: 14, padding: '12px 14px', color: '#f2f4f8', fontWeight: 600 }}>
          {item}
        </div>
      ))}
    </section>
  );
}

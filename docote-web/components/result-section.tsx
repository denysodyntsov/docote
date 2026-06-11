export function ResultSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 28 }}>
      <h2 style={{ margin: '0 0 14px', fontSize: 22, color: '#f2f4f8' }}>{title}</h2>
      <div style={{ display: 'grid', gap: 16 }}>{children}</div>
    </section>
  );
}

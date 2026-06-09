export function ContextMergeCard({ summary }: { summary: string }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Context merge summary</h2>
      <p style={{ margin: 0, color: '#aeb6c4', lineHeight: 1.8 }}>{summary}</p>
    </section>
  );
}

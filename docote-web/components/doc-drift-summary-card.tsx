export function DocDriftSummaryCard({ summary }: { summary: { level: string; text: string } }) {
  const color = summary.level === 'watch' ? '#ffd27c' : summary.level === 'unknown' ? '#aeb6c4' : '#9dd39d';

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Documentation drift summary</h2>
      <div style={{ display: 'inline-block', marginBottom: 12, padding: '8px 12px', borderRadius: 999, background: color, color: '#111318', fontWeight: 700, fontSize: 13 }}>
        {summary.level}
      </div>
      <p style={{ margin: 0, color: '#aeb6c4', lineHeight: 1.8 }}>{summary.text}</p>
    </section>
  );
}

export function DocPriorityScoreCard({ score, band }: { score: number; band: string }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Documentation priority score</h2>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 40, fontWeight: 800, color: '#ffd27c' }}>{score}</div>
        <span style={{ padding: '8px 12px', borderRadius: 999, background: band === 'critical' ? '#ff8c8c' : band === 'important' ? '#ffd27c' : '#9dd39d', color: '#111318', fontSize: 13, fontWeight: 700 }}>
          {band}
        </span>
      </div>
      <p style={{ color: '#aeb6c4', lineHeight: 1.7, marginBottom: 0 }}>
        A simple prototype score estimating how urgent documentation review/update may be for this change.
      </p>
    </section>
  );
}

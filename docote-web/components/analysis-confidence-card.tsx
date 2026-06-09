export function AnalysisConfidenceCard({ confidence }: { confidence: { level: string; score: number } }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Analysis confidence</h2>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 40, fontWeight: 800, color: '#ffd27c' }}>{confidence.score}</div>
        <span style={{ padding: '8px 12px', borderRadius: 999, background: confidence.level === 'high' ? '#9dd39d' : confidence.level === 'medium' ? '#ffd27c' : '#ff8c8c', color: '#111318', fontSize: 13, fontWeight: 700 }}>
          {confidence.level}
        </span>
      </div>
      <p style={{ color: '#aeb6c4', lineHeight: 1.7, marginBottom: 0 }}>
        A simple prototype confidence estimate based on the amount of useful context available to the analysis run.
      </p>
    </section>
  );
}

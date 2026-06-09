export function ReadinessCard({ readiness }: { readiness: { ready: boolean; missing: string[]; advisory: string[] } }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Analysis readiness</h2>
      <div style={{ color: readiness.ready ? '#9dd39d' : '#ff8c8c', fontWeight: 700, marginBottom: 12 }}>
        {readiness.ready ? 'Ready to analyze' : 'Not fully ready'}
      </div>
      {readiness.missing.length > 0 ? (
        <div style={{ color: '#aeb6c4', marginBottom: 10 }}>Missing: {readiness.missing.join(', ')}</div>
      ) : null}
      {readiness.advisory.length > 0 ? (
        <ul style={{ margin: 0, paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.8 }}>
          {readiness.advisory.map((item) => <li key={item}>{item}</li>)}
        </ul>
      ) : null}
    </section>
  );
}

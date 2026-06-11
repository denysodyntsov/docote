export function RunOutcomeSummaryCard({ summary }: { summary: { headline: string; subheadline: string; facts: string[] } }) {
  return (
    <section style={{ marginTop: 24, background: 'linear-gradient(135deg, rgba(242,165,26,0.14), rgba(255,255,255,0.04))', border: '1px solid rgba(242,165,26,0.22)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 30 }}>{summary.headline}</h2>
      <p style={{ marginTop: 0, color: '#d8deea', lineHeight: 1.8 }}>{summary.subheadline}</p>
      <ul style={{ margin: '14px 0 0', paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.8 }}>
        {summary.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
    </section>
  );
}

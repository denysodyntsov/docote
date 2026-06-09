const features = [
  {
    title: 'Code-aware summaries',
    text: 'Turn PRs and commit ranges into readable technical implementation summaries.'
  },
  {
    title: 'Release-ready output',
    text: 'Generate concise release summaries that can be reused by delivery and product teams.'
  },
  {
    title: 'Documentation impact view',
    text: 'Highlight which documentation areas are likely affected by a code change.'
  },
  {
    title: 'Preserved Jira track',
    text: 'Keep the earlier Jira-first app as a future integration surface, not wasted work.'
  }
];

export function FeatureGrid() {
  return (
    <section style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 }}>
      {features.map((feature) => (
        <article key={feature.title} style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 22 }}>
          <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 20 }}>{feature.title}</h3>
          <p style={{ margin: 0, color: '#aeb6c4', lineHeight: 1.7 }}>{feature.text}</p>
        </article>
      ))}
    </section>
  );
}

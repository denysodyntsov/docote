export function SessionOverviewCard({ overview }: { overview: { repository: string; pullRequest: string; branch: string; hasCurrentDoc: boolean; hasJiraContext: boolean } }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Session overview</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
        <Field label="Repository" value={overview.repository} />
        <Field label="Pull Request" value={overview.pullRequest} />
        <Field label="Branch" value={overview.branch} />
        <Field label="Current doc" value={overview.hasCurrentDoc ? 'present' : 'missing'} />
        <Field label="Jira context" value={overview.hasJiraContext ? 'present' : 'missing'} />
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 14 }}>
      <div style={{ color: '#aeb6c4', fontSize: 13, marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 700 }}>{value}</div>
    </div>
  );
}

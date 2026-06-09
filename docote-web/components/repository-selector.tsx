export function RepositorySelector() {
  return (
    <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginTop: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Repository and change scope</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
        <Field label="Provider" value="GitHub (initial target)" />
        <Field label="Repository" value="example-org/payments-platform" />
        <Field label="Scope type" value="Pull Request" />
        <Field label="Scope reference" value="#148" />
      </div>
      <p style={{ marginTop: 16, color: '#aeb6c4', lineHeight: 1.7 }}>
        This is a placeholder UI for the first web version. Next steps are real OAuth, repository selection,
        and PR / branch / commit-range selection.
      </p>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
      <div style={{ fontSize: 13, color: '#aeb6c4', marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

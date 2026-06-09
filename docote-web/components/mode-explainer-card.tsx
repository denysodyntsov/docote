export function ModeExplainerCard() {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Current prototype mode</h2>
      <p style={{ color: '#aeb6c4', lineHeight: 1.8, marginBottom: 0 }}>
        The current web-first DoCoTe prototype is still running in mocked analysis mode, but the backend structure is being shaped so it can later switch to a provider-backed and repo-backed flow with fewer architectural changes.
      </p>
    </section>
  );
}

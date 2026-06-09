'use client';

import { useEffect, useState } from 'react';

export function RepositorySelector() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [pullRequests, setPullRequests] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/github/repositories').then((r) => r.json()).then((data) => setRepositories(data.repositories || []));
    fetch('/api/github/pull-requests').then((r) => r.json()).then((data) => setPullRequests(data.pullRequests || []));
  }, []);

  const repo = repositories[0];
  const pr = pullRequests[0];

  return (
    <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginTop: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Repository and change scope</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
        <Field label="Provider" value="GitHub (initial target)" />
        <Field label="Repository" value={repo?.full_name || 'Loading…'} />
        <Field label="Scope type" value="Pull Request" />
        <Field label="Scope reference" value={pr ? `#${pr.number} — ${pr.title}` : 'Loading…'} />
      </div>
      <p style={{ marginTop: 16, color: '#aeb6c4', lineHeight: 1.7 }}>
        This flow now reads from mocked GitHub-style backend endpoints. Next steps are OAuth, real repository access,
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

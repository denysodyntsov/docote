'use client';

import { useEffect, useState } from 'react';
import { buildSelectionOptions } from '../lib/branch-pr-selector';

export function RepositorySelector() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [pullRequests, setPullRequests] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/github/repositories').then((r) => r.json()).then((data) => {
      const repos = data.repositories || [];
      setRepositories(repos);
      if (repos[0]?.full_name) setSelectedRepo(repos[0].full_name);
    });
    fetch('/api/github/pull-requests').then((r) => r.json()).then((data) => {
      const prs = data.pullRequests || [];
      setPullRequests(prs);
      if (prs[0]?.number) setSelectedPr(prs[0].number);
      if (prs[0]?.headRefName) setSelectedBranch(prs[0].headRefName);
    });
  }, []);

  async function selectRepository(fullName: string) {
    setSelectedRepo(fullName);
    await fetch('/api/github/select-repository', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName })
    });
  }

  async function selectPullRequest(number: number) {
    setSelectedPr(number);
    await fetch('/api/github/select-pull-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number })
    });
  }

  async function selectBranch(branch: string) {
    setSelectedBranch(branch);
    await fetch('/api/github/select-branch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ branch })
    });
  }

  const repo = repositories[0];
  const pr = pullRequests[0];
  const options = buildSelectionOptions({ repositories, pullRequests });
  const [selectedRepo, setSelectedRepo] = useState<string>('');
  const [selectedPr, setSelectedPr] = useState<number | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string>('');

  return (
    <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginTop: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Repository and change scope</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16 }}>
        <Field label="Provider" value="GitHub (initial target)" />
        <Field label="Repository" value={selectedRepo || repo?.full_name || 'Loading…'} />
        <Field label="Scope type" value="Pull Request" />
        <Field label="Scope reference" value={pr ? `#${pr.number} — ${pr.title}` : 'Loading…'} />
      </div>
      <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {repositories.map((item) => (
          <button
            key={item.full_name}
            onClick={() => selectRepository(item.full_name)}
            style={{
              padding: '8px 12px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.08)',
              background: selectedRepo === item.full_name ? 'rgba(242,165,26,0.14)' : 'rgba(255,255,255,0.04)',
              color: selectedRepo === item.full_name ? '#ffd27c' : '#f2f4f8',
              cursor: 'pointer'
            }}
          >
            {item.full_name}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {pullRequests.map((item) => (
          <button
            key={item.number}
            onClick={() => selectPullRequest(item.number)}
            style={{
              padding: '8px 12px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.08)',
              background: selectedPr === item.number ? 'rgba(242,165,26,0.14)' : 'rgba(255,255,255,0.04)',
              color: selectedPr === item.number ? '#ffd27c' : '#f2f4f8',
              cursor: 'pointer'
            }}
          >
            PR #{item.number}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: 14, borderRadius: 14, background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ color: '#aeb6c4', marginBottom: 8 }}>Available branch options</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {options.branchOptions.map((branch) => (
            <button
              key={branch}
              onClick={() => selectBranch(branch)}
              style={{
                padding: '6px 10px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.08)',
                background: selectedBranch === branch ? 'rgba(242,165,26,0.14)' : 'rgba(255,255,255,0.04)',
                color: selectedBranch === branch ? '#ffd27c' : '#f2f4f8',
                fontSize: 13,
                cursor: 'pointer'
              }}
            >
              {branch}
            </button>
          ))}
        </div>
      </div>
      <p style={{ marginTop: 16, color: '#aeb6c4', lineHeight: 1.7 }}>
        This flow now reads from mocked GitHub-style backend endpoints and derives branch/PR selection options. Next steps are OAuth,
        real repository access, and commit-range selection.
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

'use client';

import { useState } from 'react';
import { formatCommitRangeLabel } from '../lib/commit-range';

export function CommitRangeCard() {
  const [baseCommit, setBaseCommit] = useState('abc1234');
  const [headCommit, setHeadCommit] = useState('def5678');

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Commit range concept</h2>
      <p style={{ color: '#aeb6c4', lineHeight: 1.7 }}>
        Later, DoCoTe should support analysis not only from PRs and branches, but also from explicit commit ranges.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <input value={baseCommit} onChange={(e) => setBaseCommit(e.target.value)} placeholder="Base commit" style={inputStyle} />
        <input value={headCommit} onChange={(e) => setHeadCommit(e.target.value)} placeholder="Head commit" style={inputStyle} />
      </div>
      <div style={{ marginTop: 14, color: '#ffd27c' }}>
        Current label: {formatCommitRangeLabel({ baseCommit, headCommit })}
      </div>
    </section>
  );
}

const inputStyle = {
  minHeight: 46,
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.1)',
  background: 'rgba(255,255,255,0.03)',
  color: '#f2f4f8',
  padding: '0 14px',
  fontSize: 15
};

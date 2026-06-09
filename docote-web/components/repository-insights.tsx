'use client';

import { useEffect, useState } from 'react';
import { buildRepositoryInsights } from '../lib/repository-insights';

export function RepositoryInsights() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/github/repositories')
      .then((r) => r.json())
      .then((data) => setItems(buildRepositoryInsights(data.repositories || [])));
  }, []);

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Repository insights</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.fullName} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <div style={{ fontWeight: 700 }}>{item.fullName}</div>
            <div style={{ color: '#aeb6c4', marginTop: 6 }}>Default branch: {item.defaultBranch}</div>
            <div style={{ color: '#aeb6c4', marginTop: 4 }}>Category: {item.category}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

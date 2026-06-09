'use client';

import { useEffect, useState } from 'react';
import { buildRepositoryInsights } from '../lib/repository-insights';
import { buildRepoDocMap } from '../lib/repo-doc-map';

export function RepoDocMap() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/github/repositories')
      .then((r) => r.json())
      .then((data) => {
        const insights = buildRepositoryInsights(data.repositories || []);
        setItems(buildRepoDocMap(insights));
      });
  }, []);

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Repository-to-doc map</h2>
      <div style={{ display: 'grid', gap: 14 }}>
        {items.map((item) => (
          <article key={item.repository} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
            <strong>{item.repository}</strong>
            <ul style={{ margin: '10px 0 0', paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.8 }}>
              {item.likelyDocs.map((doc: string) => <li key={doc}>{doc}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

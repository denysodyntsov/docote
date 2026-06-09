'use client';

import { useEffect, useState } from 'react';

export function AnalysisHistory() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/analysis-history')
      .then((r) => r.json())
      .then((data) => setItems(data.history || []));
  }, []);

  return (
    <section style={{ marginTop: 28, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Recent analysis history</h2>
      {items.length === 0 ? (
        <p style={{ color: '#aeb6c4', marginBottom: 0 }}>No analyses recorded yet in this prototype session.</p>
      ) : (
        <div style={{ display: 'grid', gap: 14 }}>
          {items.map((item) => (
            <article key={item.id} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
              <div style={{ fontSize: 13, color: '#ffd27c', marginBottom: 8 }}>{item.createdAt} · {item.mode}</div>
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{item.repository}</div>
              <div style={{ color: '#aeb6c4', marginBottom: 8 }}>{item.scopeType}: {item.scopeRef}</div>
              <p style={{ margin: 0, color: '#aeb6c4', lineHeight: 1.7 }}>{item.technicalSummary}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

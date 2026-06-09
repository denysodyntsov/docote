'use client';

import { useEffect, useState } from 'react';

export function DebugHistory() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/debug-history')
      .then((r) => r.json())
      .then((data) => setItems(data.debugHistory || []));
  }, []);

  return (
    <section style={{ marginTop: 28, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Debug history</h2>
      {items.length === 0 ? (
        <p style={{ color: '#aeb6c4', marginBottom: 0 }}>No debug snapshots recorded yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: 14 }}>
          {items.map((item) => (
            <article key={item.id} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16 }}>
              <div style={{ color: '#ffd27c', fontSize: 13, marginBottom: 8 }}>{item.createdAt} · {item.providerMode}</div>
              <div style={{ color: '#aeb6c4', marginBottom: 8 }}>{item.contextSummary}</div>
              <div style={{ color: '#aeb6c4', fontSize: 14, lineHeight: 1.7 }}>Changed files: {item.changedFiles.join(', ')}</div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

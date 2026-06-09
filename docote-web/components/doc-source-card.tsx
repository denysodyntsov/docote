'use client';

import { useState } from 'react';
import { defaultDocSource, type DocSourceType } from '../lib/doc-source-types';

export function DocSourceCard() {
  const [source, setSource] = useState<DocSourceType>(defaultDocSource.type);

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Documentation source</h2>
      <p style={{ color: '#aeb6c4', lineHeight: 1.7 }}>
        The current prototype uses manual documentation text, but the product is designed to evolve toward richer doc sources.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {[
          { key: 'manual-text', label: 'Manual text' },
          { key: 'confluence', label: 'Confluence' },
          { key: 'word-doc', label: 'Word document' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setSource(item.key as DocSourceType)}
            style={{
              padding: '8px 12px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.08)',
              background: source === item.key ? 'rgba(242,165,26,0.14)' : 'rgba(255,255,255,0.04)',
              color: source === item.key ? '#ffd27c' : '#f2f4f8',
              cursor: 'pointer'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 14, color: '#aeb6c4' }}>Current source: {source}</div>
    </section>
  );
}

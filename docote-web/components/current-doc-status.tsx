'use client';

import { useEffect, useState } from 'react';

export function CurrentDocStatus() {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('/api/docs/current')
      .then((r) => r.json())
      .then((data) => setText(data.currentDocText || ''));
  }, []);

  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Current documentation context</h2>
      <p style={{ color: '#aeb6c4', lineHeight: 1.7 }}>
        Latest stored current-document text for this prototype session:
      </p>
      <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 16, color: '#aeb6c4', whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
        {text || 'No current documentation text stored yet.'}
      </div>
    </section>
  );
}

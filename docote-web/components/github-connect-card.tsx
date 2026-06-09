'use client';

import { useState } from 'react';

export function GitHubConnectCard() {
  const [message, setMessage] = useState('');

  async function handleConnect() {
    setMessage('Checking GitHub OAuth configuration…');
    try {
      const res = await fetch('/api/auth/github/start');
      const json = await res.json();
      if (!json.ok) {
        setMessage(json.error || 'GitHub OAuth not configured yet.');
        return;
      }
      setMessage(`Authorization URL prepared: ${json.authorizeUrl}`);
    } catch (error: any) {
      setMessage(error.message || 'Unable to initialize GitHub OAuth.');
    }
  }

  return (
    <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, marginTop: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>GitHub connection</h2>
      <p style={{ color: '#aeb6c4', lineHeight: 1.7 }}>
        This is the first OAuth/config skeleton for the web-first DoCoTe track. It does not yet complete a real login flow,
        but it defines the route structure and configuration checks needed for real repository access.
      </p>
      <button onClick={handleConnect} style={{ minHeight: 46, borderRadius: 12, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #f2a51a, #ffbc43)', color: '#151515', fontWeight: 700, padding: '0 16px' }}>
        Check GitHub connection setup
      </button>
      {message ? <p style={{ marginTop: 14, color: '#ffd27c', lineHeight: 1.7 }}>{message}</p> : null}
    </section>
  );
}

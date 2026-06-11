export function ResultShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 24, padding: 20, borderRadius: 24, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
      {children}
    </div>
  );
}

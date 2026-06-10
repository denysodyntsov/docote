export function ChangeFootprintCard({ footprint }: { footprint: { totalFiles: number; docsLikeFiles: number; codeLikeFiles: number; dominantKind: string } }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Change footprint</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
        <Metric label="Total files" value={String(footprint.totalFiles)} />
        <Metric label="Docs-like files" value={String(footprint.docsLikeFiles)} />
        <Metric label="Code-like files" value={String(footprint.codeLikeFiles)} />
        <Metric label="Dominant kind" value={footprint.dominantKind} />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 14, padding: 14 }}>
      <div style={{ color: '#aeb6c4', fontSize: 13, marginBottom: 6 }}>{label}</div>
      <div style={{ fontWeight: 700 }}>{value}</div>
    </div>
  );
}

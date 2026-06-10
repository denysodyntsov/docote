export function RunTagsCard({ tags }: { tags: string[] }) {
  return (
    <section style={{ marginTop: 24, background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Run tags</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {tags.map((tag) => (
          <span key={tag} style={{ padding: '8px 12px', borderRadius: 999, background: 'rgba(242,165,26,0.12)', color: '#ffd27c', fontSize: 13, fontWeight: 700 }}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}

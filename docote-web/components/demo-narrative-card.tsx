export function DemoNarrativeCard({ lines }: { lines: string[] }) {
  return (
    <section style={{ marginTop: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Demo narrative</h2>
      <ol style={{ margin: 0, paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.9 }}>
        {lines.map((line) => <li key={line}>{line}</li>)}
      </ol>
    </section>
  );
}

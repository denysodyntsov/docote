import { sampleResult } from '../lib/mock-data';

export function OutputPreview() {
  return (
    <section style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 18 }}>
      <Card title="Technical summary" text={sampleResult.technicalSummary} />
      <Card title="Release summary" text={sampleResult.releaseSummary} />
      <Card title="Documentation draft" text={sampleResult.documentationDraft} full />
      <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 22 }}>
        <h3 style={{ marginTop: 0, marginBottom: 12, fontSize: 20 }}>Likely impacted documentation areas</h3>
        <ul style={{ margin: 0, paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.8 }}>
          {sampleResult.impactedAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

function Card({ title, text, full = false }: { title: string; text: string; full?: boolean }) {
  return (
    <article style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 22, gridColumn: full ? '1 / -1' : undefined }}>
      <h3 style={{ marginTop: 0, marginBottom: 12, fontSize: 20 }}>{title}</h3>
      <p style={{ margin: 0, color: '#aeb6c4', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{text}</p>
    </article>
  );
}

export function DemoFlowCard() {
  const steps = [
    'Show repo and scope context',
    'Run the analysis flow',
    'Read the MVP highlights',
    'Review impacted documentation targets',
    'Check release readiness and review lane',
    'Open structured deliverables',
    'Use export/share for handoff'
  ];

  return (
    <section style={{ marginTop: 24, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>Suggested demo flow</h2>
      <ol style={{ margin: 0, paddingLeft: 20, color: '#aeb6c4', lineHeight: 1.9 }}>
        {steps.map((step) => <li key={step}>{step}</li>)}
      </ol>
    </section>
  );
}

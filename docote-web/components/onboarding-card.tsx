export function OnboardingCard() {
  return (
    <section style={{ background: '#1a1d24', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, boxShadow: '0 12px 30px rgba(0,0,0,0.2)', marginTop: 24 }}>
      <h2 style={{ marginTop: 0, fontSize: 28 }}>First user flow</h2>
      <ol style={{ color: '#aeb6c4', paddingLeft: 20, lineHeight: 1.9, fontSize: 17 }}>
        <li>Sign in to DoCoTe</li>
        <li>Connect GitHub</li>
        <li>Select repository and PR / branch / commit range</li>
        <li>Optionally add Jira ticket text or current documentation text</li>
        <li>Generate technical summary, release summary, and documentation update draft</li>
        <li>Review likely impacted documentation areas</li>
      </ol>
    </section>
  );
}

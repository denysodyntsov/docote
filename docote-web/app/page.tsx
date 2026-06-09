import { OnboardingCard } from '../components/onboarding-card';
import { FeatureGrid } from '../components/feature-grid';
import { RepositorySelector } from '../components/repository-selector';
import { OutputPreview } from '../components/output-preview';
import { WebDemoForm } from '../components/web-demo-form';
import { GitHubConnectCard } from '../components/github-connect-card';
import { AnalysisHistory } from '../components/analysis-history';
import { CommitRangeCard } from '../components/commit-range-card';
import { CurrentDocStatus } from '../components/current-doc-status';

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1160, margin: '0 auto', padding: '40px 24px 80px' }}>
      <section style={{ padding: '32px 0 24px' }}>
        <div style={{ display: 'inline-block', padding: '6px 10px', borderRadius: 999, border: '1px solid rgba(242,165,26,0.25)', color: '#ffd27c', background: 'rgba(242,165,26,0.08)', fontSize: 13, fontWeight: 600 }}>
          DoCoTe Web MVP
        </div>
        <h1 style={{ fontSize: '56px', lineHeight: 1.05, margin: '18px 0 16px', maxWidth: 820 }}>
          Connect code changes, tickets, and docs to keep delivery knowledge aligned.
        </h1>
        <p style={{ fontSize: 20, color: '#aeb6c4', maxWidth: 860, lineHeight: 1.7 }}>
          DoCoTe’s web-first version is designed to help software teams understand how pull requests, commits,
          and tickets should change technical documentation and release communication.
        </p>
      </section>

      <OnboardingCard />
      <GitHubConnectCard />
      <RepositorySelector />
      <CommitRangeCard />
      <WebDemoForm />
      <CurrentDocStatus />
      <OutputPreview />
      <AnalysisHistory />
      <FeatureGrid />
    </main>
  );
}

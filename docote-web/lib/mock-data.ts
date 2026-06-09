import type { GenerationRequest, GenerationResult } from './types';

export const sampleRequest: GenerationRequest = {
  scope: {
    type: 'pull-request',
    repository: {
      owner: 'example-org',
      name: 'payments-platform',
      provider: 'github'
    },
    pullRequestNumber: 148
  },
  jiraText: 'Story: improve beneficiary validation and update payment review flow.',
  currentDocText: 'Current documentation mentions old validation rules and does not describe the review flow change.',
  extraContext: 'PR updates validation logic and review-state transitions.'
};

export const sampleResult: GenerationResult = {
  technicalSummary:
    'This change updates beneficiary validation rules and modifies payment review-state handling. The implementation appears to tighten validation and align workflow transitions with the newer review process.',
  releaseSummary:
    'Updated beneficiary validation and payment review flow. Teams should verify documentation and operational guidance related to payment review handling.',
  documentationDraft:
    '## Beneficiary validation update\nThe validation rules were updated to support the revised payment review process.\n\n## Review workflow\nPayment review states now follow the newer transition logic and should be reflected in operational documentation.',
  impactedAreas: [
    'Payment validation documentation',
    'Operations / review workflow guidance',
    'Release notes for payment flow changes'
  ]
};

export const plans = [
  {
    name: 'Free',
    monthly: 0,
    annual: 0,
    note: 'For personal projects',
    cta: 'Start querying',
    features: [
      '2 database connections',
      '25 saved queries',
      '7-day query history',
      'AI assistant previews',
    ],
  },
  {
    name: 'Pro',
    monthly: 19,
    annual: 15,
    note: 'For independent builders',
    cta: 'Start with Pro',
    features: [
      'Unlimited connections',
      'Unlimited saved queries',
      '90-day query history',
      'Full AI assistant',
      'Private snapshots',
    ],
  },
  {
    name: 'Team',
    monthly: 15,
    annual: 12,
    note: 'Per seat, 3 seat minimum',
    cta: 'Start a team',
    featured: true,
    features: [
      'Everything in Pro',
      'Shared connections',
      'Live collaboration',
      'Role-based access',
      'Audit trail',
    ],
  },
  {
    name: 'Enterprise',
    note: 'For larger organizations',
    cta: 'Contact us',
    features: [
      'Everything in Team',
      'SAML SSO and SCIM',
      'Custom retention',
      'Priority support',
      'Self-hosting options',
    ],
  },
]

export type PricingPlan = (typeof plans)[number]

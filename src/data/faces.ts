export type CubeSlot = 'front' | 'right' | 'top' | 'left' | 'bottom' | 'back'

export type FaceId =
  | 'strategy'
  | 'systems'
  | 'technology'
  | 'insights'
  | 'sustainability'
  | 'communication'

export interface Face {
  id: FaceId
  num: string
  name: string
  slug: string
  path: string
  accent: string
  ink: string
  cubeBg: string
  slot: CubeSlot
  question: string
  line: string
  outcome: string
  headline: string
  purpose: string
  ctaLabel: string
  approachEyebrow: string
  capabilities: string[]
  note?: { label: string; text: string }
}

export const FACES: Face[] = [
  {
    id: 'strategy',
    num: '01',
    name: 'Strategy',
    slug: 'strategy',
    path: '/face/strategy',
    accent: '#2563A6',
    ink: '#1D4F85',
    cubeBg: '#1D4F85',
    slot: 'front',
    question: 'Where are we going — and how will we get there?',
    line: 'Plan with purpose.',
    outcome: 'Clear direction and actionable plans',
    headline: 'Give your mission direction.',
    purpose: 'Turn your mission into clear priorities and actionable plans.',
    ctaLabel: 'Talk to Us About Strategy',
    approachEyebrow: 'How we approach strategy',
    capabilities: [
      'Organisational strategy',
      'Strategic and annual planning',
      'Programme design',
      'Theory of Change',
      'Implementation planning',
      'Programme roadmaps',
      'Growth strategy',
      'Stakeholder mapping',
      'Strategic reviews',
      'Institutional planning',
      'Scale-readiness assessment',
    ],
  },
  {
    id: 'systems',
    num: '02',
    name: 'Systems',
    slug: 'systems',
    path: '/face/systems',
    accent: '#07847E',
    ink: '#056660',
    cubeBg: '#056660',
    slot: 'right',
    question: 'How should our organisation work?',
    line: 'Build systems that last.',
    outcome: 'Reliable, repeatable operations',
    headline: 'Build organisations that work better.',
    purpose: 'Build processes that reduce dependency and improve consistency.',
    ctaLabel: 'Talk to Us About Systems',
    approachEyebrow: 'How we approach systems',
    capabilities: [
      'Organisational diagnostics',
      'System-level gap analysis',
      'Process mapping',
      'SOP development',
      'Workflow design',
      'Internal review mechanisms',
      'Governance processes',
      'Documentation systems',
      'Role mapping',
      'Operational frameworks',
      'Process optimisation',
      'Institutional capacity assessment',
    ],
    note: {
      label: 'TRANS:',
      text: 'Person-dependent  →  Process-driven  →  System-enabled',
    },
  },
  {
    id: 'technology',
    num: '03',
    name: 'Technology',
    slug: 'technology',
    path: '/face/technology',
    accent: '#6557C7',
    ink: '#4E3FA6',
    cubeBg: '#4E3FA6',
    slot: 'top',
    question: 'How can we work smarter?',
    line: 'Work smarter with technology.',
    outcome: 'Useful digital enablement',
    headline: 'Make technology work for your mission.',
    purpose: 'Use simple technology to reduce effort and improve operations.',
    ctaLabel: 'Talk to Us About Technology',
    approachEyebrow: 'How we approach technology',
    capabilities: [
      'Digital maturity assessment',
      'Digital transformation roadmaps',
      'MIS design',
      'Dashboard development',
      'Workflow digitisation',
      'Process automation',
      'AI adoption',
      'Data-collection systems',
      'CRM / donor tools',
      'Collaboration tools',
      'Digital platforms',
      'Website ecosystem support',
      'Technology gap analysis',
    ],
    note: {
      label: 'PRINCIPLE',
      text: 'Technology should reduce work — not create more of it.',
    },
  },
  {
    id: 'insights',
    num: '04',
    name: 'Insights',
    slug: 'insights',
    path: '/face/insights',
    accent: '#E49B24',
    ink: '#8A5D14',
    cubeBg: '#8A5D14',
    slot: 'left',
    question: 'What is our work telling us?',
    line: 'Turn data into decisions.',
    outcome: 'Evidence-based decisions',
    headline: 'Turn data into better decisions.',
    purpose: 'Convert programme information into evidence and decisions.',
    ctaLabel: 'Talk to Us About Insights',
    approachEyebrow: 'How we approach insights',
    capabilities: [
      'MEL systems',
      'Internal and programme assessments',
      'Baseline / endline support',
      'Survey design',
      'Indicator development',
      'Data cleaning',
      'Qualitative and quantitative analysis',
      'Data visualisation',
      'Dashboards',
      'Programme reviews',
      'Impact measurement',
      'Research support',
      'Evidence synthesis',
      'Decision-support analysis',
    ],
    note: {
      label: 'VALUE CHAIN',
      text: 'Data  →  Analysis  →  Insight  →  Decision  →  Impact',
    },
  },
  {
    id: 'sustainability',
    num: '05',
    name: 'Sustainability',
    slug: 'sustainability',
    path: '/face/sustainability',
    accent: '#4B9560',
    ink: '#2F6B41',
    cubeBg: '#2F6B41',
    slot: 'bottom',
    question: 'How do we sustain and grow our work?',
    line: 'Build resources for the future.',
    outcome: 'Funding readiness and stronger resources',
    headline: 'Build the resources that keep impact moving.',
    purpose: 'Strengthen funding readiness, partnerships and resources.',
    ctaLabel: 'Talk to Us About Sustainability',
    approachEyebrow: 'How we approach sustainability',
    capabilities: [
      'Fundraising strategy',
      'Funding-readiness assessment',
      'Donor mapping',
      'Prospect and grant research',
      'Resource mobilisation',
      'Partnership identification',
      'Proposal development',
      'Concept notes',
      'Grant applications',
      'Donor pitches',
      'Funding pipeline',
      'CSR opportunity mapping',
    ],
    note: {
      label: 'BOUNDARY',
      text: 'Do not promise funding. Promise stronger funding readiness.',
    },
  },
  {
    id: 'communication',
    num: '06',
    name: 'Communication',
    slug: 'communication',
    path: '/face/communication',
    accent: '#D9665B',
    ink: '#A8382A',
    cubeBg: '#A8382A',
    slot: 'back',
    question: 'How do we document, present and communicate our work effectively?',
    line: 'Present your work with clarity.',
    outcome: 'Clear, credible stakeholder communication',
    headline: 'Document your work. Communicate it with clarity.',
    purpose: 'Create clear reports, proposals, presentations and stakeholder materials.',
    ctaLabel: 'Talk to Us About Communication',
    approachEyebrow: 'How we approach communication',
    capabilities: [
      'Annual, project, donor, assessment, research and management reports',
      'Presentations and pitch decks',
      'Proposals and concept notes',
      'Case studies and impact narratives',
      'Organisational profiles',
      'Programme documentation',
      'Knowledge products',
      'Policy and programme briefs',
      'Manuals and toolkits',
      'Website content',
      'Communication collateral',
      'Stakeholder communication materials',
    ],
    note: {
      label: 'VALUE CHAIN',
      text: 'Information  →  Documentation  →  Communication  →  Understanding  →  Action',
    },
  },
]

export function getFaceBySlug(slug: string): Face | undefined {
  return FACES.find((f) => f.slug === slug)
}

export const CASE_STUDIES = [
  {
    id: 1,
    faces: ['systems', 'technology', 'insights', 'communication'] as FaceId[],
    title: '[Placeholder: case study title 1 — name the organisational improvement]',
  },
  {
    id: 2,
    faces: ['strategy', 'sustainability'] as FaceId[],
    title: '[Placeholder: case study title 2 — name the organisational improvement]',
  },
  {
    id: 3,
    faces: ['systems', 'communication'] as FaceId[],
    title: '[Placeholder: case study title 3 — name the organisational improvement]',
  },
  {
    id: 4,
    faces: ['insights', 'sustainability'] as FaceId[],
    title: '[Placeholder: case study title 4 — name the organisational improvement]',
  },
  {
    id: 5,
    faces: ['strategy', 'systems', 'technology'] as FaceId[],
    title: '[Placeholder: case study title 5 — name the organisational improvement]',
  },
  {
    id: 6,
    faces: ['communication'] as FaceId[],
    title: '[Placeholder: case study title 6 — name the organisational improvement]',
  },
]

export const PROBLEMS = [
  {
    challenge: 'Big missions, limited specialist teams',
    response: 'Flexible access to multidisciplinary institutional capabilities.',
  },
  {
    challenge: 'Processes depend on individuals',
    response: 'Process mapping, SOPs, workflows and system strengthening.',
  },
  {
    challenge: 'Data is collected but underused',
    response: 'Assessment, analytics, dashboards and decision support.',
  },
  {
    challenge: 'Fundraising is reactive',
    response: 'Support in fundraising strategy and documents.',
  },
  {
    challenge: 'Reports and presentations consume programme time',
    response: 'Structured documentation and knowledge products.',
  },
  {
    challenge: 'Technology adds complexity',
    response: 'Simple, affordable tools aligned to actual workflows.',
  },
]

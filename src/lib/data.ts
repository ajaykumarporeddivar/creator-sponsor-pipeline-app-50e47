import type { DemoMetric, DemoRecord, NavItem, Deliverable, Campaign, Sponsor } from './types'

export const metrics: DemoMetric[] = [
  { id: 'revenue', label: 'Revenue', value: 48200, change: 12 },
  { id: 'users', label: 'Active users', value: 1284, change: 18 },
  { id: 'conversion', label: 'Conversion', value: 8, change: 4 },
  { id: 'health', label: 'Health score', value: 96, change: 2 },
]

export const records: DemoRecord[] = [
  { id: 'rec_1', name: 'Launch workflow', status: 'active', owner: 'Operations', value: 84, priority: 'high', notes: 'Primary MVP workflow is moving through review', createdAt: '2026-05-01' },
  { id: 'rec_2', name: 'Customer review', status: 'pending', owner: 'Success', value: 62, priority: 'medium', notes: 'Needs stakeholder response before approval', createdAt: '2026-05-03' },
  { id: 'rec_3', name: 'Revenue audit', status: 'complete', owner: 'Finance', value: 91, priority: 'high', notes: 'Upgrade path validated for paid tier', createdAt: '2026-05-05' },
  { id: 'rec_4', name: 'Growth experiment', status: 'active', owner: 'Marketing', value: 73, priority: 'medium', notes: 'Acquisition loop being measured', createdAt: '2026-05-07' },
  { id: 'rec_5', name: 'Roadmap unlock', status: 'pending', owner: 'Product', value: 78, priority: 'high', notes: 'Post-payment expansion workflow queued', createdAt: '2026-05-08' },
  { id: 'rec_6', name: 'Client intake', status: 'active', owner: 'Delivery', value: 69, priority: 'medium', notes: 'New intake records are being normalized', createdAt: '2026-05-09' },
  { id: 'rec_7', name: 'Approval queue', status: 'active', owner: 'Operations', value: 88, priority: 'high', notes: 'Three pending approvals require action', createdAt: '2026-05-10' },
  { id: 'rec_8', name: 'Export package', status: 'complete', owner: 'Success', value: 95, priority: 'low', notes: 'CSV handoff prepared for client reporting', createdAt: '2026-05-11' },
  { id: 'rec_9', name: 'Expansion review', status: 'pending', owner: 'Sales', value: 71, priority: 'medium', notes: 'Buyer is evaluating locked roadmap scope', createdAt: '2026-05-12' },
  { id: 'rec_10', name: 'SLA readiness', status: 'complete', owner: 'Enterprise', value: 93, priority: 'high', notes: 'Enterprise controls passed review', createdAt: '2026-05-13' },
]

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings', href: '/dashboard/settings' },
]

export const MOCK_SPONSORS: Sponsor[] = [
  {
    id: 'spon_1',
    name: 'Tech Innovators Inc.',
    industry: 'Technology',
    contactEmail: 'contact@techinnovators.com',
    logoUrl: '/logos/tech-innovators.png',
  },
  {
    id: 'spon_2',
    name: 'Green Earth Foods',
    industry: 'Food & Beverage',
    contactEmail: 'info@greenearthfoods.com',
  },
  {
    id: 'spon_3',
    name: 'Fashion Forward Co.',
    industry: 'Apparel',
    contactEmail: 'partners@fashionforward.com',
  },
];

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'camp_1',
    name: 'AI Product Launch',
    description: 'Promote new AI assistant across tech influencers.',
    status: 'active',
    budget: 50000,
    sponsorId: 'spon_1',
    startDate: '2024-07-01',
    endDate: '2024-08-31',
    deliverablesCount: 3,
  },
  {
    id: 'camp_2',
    name: 'Sustainable Living Drive',
    description: 'Campaign to raise awareness for eco-friendly products.',
    status: 'pending',
    budget: 25000,
    sponsorId: 'spon_2',
    startDate: '2024-09-15',
    endDate: '2024-10-30',
    deliverablesCount: 2,
  },
  {
    id: 'camp_3',
    name: 'Winter Collection Spotlight',
    description: 'Showcasing new winter fashion line by top creators.',
    status: 'completed',
    budget: 30000,
    sponsorId: 'spon_3',
    startDate: '2023-11-01',
    endDate: '2023-12-31',
    deliverablesCount: 4,
  },
];

export const MOCK_DELIVERABLES: Deliverable[] = [
  {
    id: 'del_1',
    name: 'AI Product Review Video',
    status: 'approved',
    campaignId: 'camp_1',
    creatorId: 'creator_A',
    deadline: '2024-07-20',
    submissionLink: 'https://youtube.com/video1',
    notes: 'High-quality unboxing and feature demo.',
    createdAt: '2024-07-05',
  },
  {
    id: 'del_2',
    name: 'AI Product Blog Post',
    status: 'pending_review',
    campaignId: 'camp_1',
    creatorId: 'creator_B',
    deadline: '2024-07-25',
    notes: 'Focus on productivity features.',
    createdAt: '2024-07-10',
  },
  {
    id: 'del_3',
    name: 'Eco-Product Instagram Reels',
    status: 'draft',
    campaignId: 'camp_2',
    creatorId: 'creator_C',
    deadline: '2024-09-20',
    notes: 'Requires approval of script and visuals.',
    createdAt: '2024-09-01',
  },
  {
    id: 'del_4',
    name: 'Winter Lookbook Photos',
    status: 'completed',
    campaignId: 'camp_3',
    creatorId: 'creator_D',
    deadline: '2023-11-15',
    submissionLink: 'https://drive.google.com/photos',
    createdAt: '2023-11-05',
  },
];

export const STATS: DemoMetric[] = [
  { id: 'total_campaigns', label: 'Total Campaigns', value: MOCK_CAMPAIGNS.length, change: 0 },
  { id: 'active_campaigns', label: 'Active Campaigns', value: MOCK_CAMPAIGNS.filter(c => c.status === 'active').length, change: 1 },
  { id: 'total_deliverables', label: 'Total Deliverables', value: MOCK_DELIVERABLES.length, change: 2 },
  { id: 'pending_deliverables', label: 'Pending Review', value: MOCK_DELIVERABLES.filter(d => d.status === 'pending_review').length, change: 1 },
];
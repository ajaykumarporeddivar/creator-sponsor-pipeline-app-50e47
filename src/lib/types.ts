export interface DemoMetric {
  id: string
  label: string
  value: number
  change: number
}

export interface DemoRecord {
  id: string
  name: string
  status: 'active' | 'pending' | 'complete'
  owner: string
  value: number
  priority: 'low' | 'medium' | 'high'
  notes: string
  createdAt: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Deliverable {
  id: string
  name: string
  status: 'draft' | 'pending_review' | 'approved' | 'rejected' | 'completed'
  campaignId: string
  creatorId: string
  deadline: string // ISO date string
  submissionLink?: string
  notes?: string
  createdAt: string
}

export interface Campaign {
  id: string
  name: string
  description: string
  status: 'draft' | 'active' | 'completed' | 'paused'
  budget: number
  sponsorId: string
  startDate: string // ISO date string
  endDate: string // ISO date string
  deliverablesCount: number
}

export interface Sponsor {
  id: string
  name: string
  industry: string
  contactEmail: string
  logoUrl?: string
}
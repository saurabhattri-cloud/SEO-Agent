export interface HealingTask {
  id: string;
  tier: 'safe' | 'moderate' | 'high';
  title: string;
  description: string;
  url: string;
  impact: string;
  status: 'pending' | 'applied' | 'validating' | 'approved' | 'rolled_back';
  suggestedAt: string;
  beforeSnippet?: string;
  afterSnippet?: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  actorType: 'ai' | 'governance' | 'user' | 'system';
  action: string;
  target: string;
  hash: string;
  status: string;
}

export interface ModuleInfo {
  number: number;
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stats: { label: string; value: string; trend?: string }[];
  features: string[];
  mockData?: Record<string, any>;
}

export interface AssistantQuery {
  id: string;
  question: string;
  answer: string;
  evidence: { label: string; tag: string; type: 'gsc' | 'ga4' | 'crawl' | 'action' }[];
  suggestedAction?: string;
}


export interface LogEntry {
  id: string;
  timestamp: Date;
  level: 'info' | 'warn' | 'error' | 'success';
  message: string;
}

export interface MetricData {
  name: string;
  v8: number;
  blink: number;
  latency: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
  groundingLinks?: Array<{ title: string; uri: string }>;
}

export interface AppConfig {
  jethroAiEndpoint: string;
  blinkNgV8Endpoint: string;
  authCredentials: {
    apiKey: string;
    clientId: string;
  };
  mergeSettings: {
    strategy: 'high-velocity' | 'safe' | 'balanced';
    autoLockdown: boolean;
    concurrencyLimit: number;
  };
}

export interface DeploymentStatus {
  serviceName: string;
  region: string;
  status: 'deploying' | 'healthy' | 'failed';
  traffic: number;
  cpu: number;
  memory: string;
  url: string;
}

export interface AccessStatus {
  layer: string;
  authentication: string;
  status: 'GRANTED' | 'ACTIVE' | 'SECURE';
}

export interface ProjectItem {
  name: string;
  description: string;
  lastModified: string;
}

export interface MediaRelease {
  title: string;
  date: string;
  content: string;
  tagline: string;
}

export interface KeyRegistryEntry {
  alias: string;
  truncated: string;
  full?: string;
  role: string;
  state: 'ACTIVE' | 'ROTATED' | 'REVOKED';
}

export interface RepairStep {
  id: string;
  label: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  timestamp?: string;
}

export interface GerritChange {
  id: string;
  project: string;
  branch: string;
  subject: string;
  status: 'NEW' | 'MERGED' | 'ABANDONED';
  created: string;
  updated: string;
  _number: number;
  owner: { name: string };
}

export interface FirebaseStatus {
  service: string;
  status: 'online' | 'syncing' | 'offline';
  usage: string;
  runtime: string;
}

export interface VSCodeLaunchConfig {
  version: string;
  configurations: Array<{
    name: string;
    type: string;
    request: string;
    program?: string;
    args?: string[];
    env?: Record<string, string>;
  }>;
}

export enum TaskType {
  MERGE = 'MERGE',
  REFRACTOR = 'REFRACTOR',
  ANALYZE = 'ANALYZE',
  GENERATE = 'GENERATE'
}

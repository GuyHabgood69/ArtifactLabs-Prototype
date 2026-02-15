
export interface StrategyResponse {
  architecture: string;
  techStack: string[];
  roadmap: string[];
  riskFactor: string;
}

export enum ServiceType {
  ARCHITECTURE = 'System Architecture',
  ENGINEERING = 'Product Engineering',
  LEADERSHIP = 'Tech Leadership',
  AI = 'AI Integration'
}

export interface TestCase {
  id: string;
  name: string;
  description: string;
  category: TestCategory;
  status: TestStatus;
  input?: string;
  expectedOutput?: string;
  actualOutput?: string;
  error?: string;
  duration?: number;
  timestamp?: Date;
}

export type TestCategory = 
  | 'balance'
  | 'transfer'
  | 'memory'
  | 'security'
  | 'personality'
  | 'advanced';

export type TestStatus = 
  | 'pending'
  | 'running'
  | 'success'
  | 'error';

export interface TestSuite {
  id: string;
  name: string;
  description: string;
  category: TestCategory;
  tests: TestCase[];
  icon: string;
  color: string;
}

export interface AgentConfig {
  privateKey: string;
  rpcUrl: string;
  model: string;
  openAiApiKey?: string;
  anthropicApiKey?: string;
  personalityPrompt?: string;
}

export interface TestResult {
  testId: string;
  status: TestStatus;
  output?: string;
  error?: string;
  duration: number;
  timestamp: Date;
}

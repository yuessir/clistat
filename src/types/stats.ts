export interface ApiKeyUsageTotal {
  tokens: number;
  inputTokens: number;
  outputTokens: number;
  cacheCreateTokens: number;
  cacheReadTokens: number;
  allTokens: number;
  requests: number;
  cost: number;
  formattedCost: string;
}

export interface ApiKeyUsage {
  total: ApiKeyUsageTotal;
}

export interface ApiKeyLimits {
  tokenLimit: number;
  concurrencyLimit: number;
  rateLimitWindow: number;
  rateLimitRequests: number;
  rateLimitCost: number;
  dailyCostLimit: number;
  totalCostLimit: number;
  weeklyOpusCostLimit: number;
  weeklyResetDay: number;
  weeklyResetHour: number;
  currentWindowRequests: number;
  currentWindowTokens: number;
  currentWindowCost: number;
  currentDailyCost: number;
  currentTotalCost: number;
  weeklyOpusCost: number;
  windowStartTime: string | null;
  windowEndTime: string | null;
  windowRemainingSeconds: number | null;
}

export interface ApiKeyAccounts {
  claudeAccountId: string | null;
  geminiAccountId: string | null;
  openaiAccountId: string | null;
  details: any | null;
}

export interface ApiKeyRestrictions {
  enableModelRestriction: boolean;
  restrictedModels: string[];
  enableClientRestriction: boolean;
  allowedClients: string[];
}

export interface ApiStatsData {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: string;
  expiresAt: string;
  expirationMode: string;
  isActivated: boolean;
  activationDays: number;
  activatedAt: string;
  permissions: string;
  usage: ApiKeyUsage;
  limits: ApiKeyLimits;
  accounts: ApiKeyAccounts;
  restrictions: ApiKeyRestrictions;
  serviceRates?: Record<string, any>;
}

export interface QueryStatsResponse {
  success: boolean;
  data?: ApiStatsData;
  error?: string;
  message?: string;
  apiId?: string;
}


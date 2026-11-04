export type Language = "zh-TW" | "zh-CN" | "en";

export interface Translations {
  siteTitle: string;
  siteSubtitle: string;
  tagline: string;
  inputPlaceholder: string;
  queryButton: string;
  querying: string;
  clearButton: string;
  rememberKey: string;
  invalidKeyPrefix: string;
  apiKeyHelp: string;
  privacyNotice: string;

  // Dashboard headers
  overviewTab: string;
  detailsTab: string;
  refreshButton: string;
  lastUpdated: string;

  // Metrics
  totalSpent: string;
  totalLimit: string;
  remainingBudget: string;
  budgetUsage: string;
  totalTokens: string;
  totalRequests: string;
  avgCostPerReq: string;
  keyStatus: string;
  activeStatus: string;
  inactiveStatus: string;

  // Token Breakdown
  tokenBreakdownTitle: string;
  tokenBreakdownSubtitle: string;
  inputTokens: string;
  outputTokens: string;
  cacheCreateTokens: string;
  cacheReadTokens: string;
  cacheReadDesc: string;
  cacheSavingsNote: string;

  // Limits & Thresholds
  limitsTitle: string;
  dailyCostLimit: string;
  currentDailyCost: string;
  concurrencyLimit: string;
  rateLimitWindow: string;
  rateLimitRequests: string;
  rateLimitCost: string;
  weeklyOpusLimit: string;
  weeklyResetDay: string;
  unlimited: string;

  // Account & Bindings
  accountInfoTitle: string;
  keyName: string;
  apiId: string;
  createdAt: string;
  activatedAt: string;
  expiresAt: string;
  expirationMode: string;
  claudeAccount: string;
  openaiAccount: string;
  geminiAccount: string;
  notBound: string;

  // Restrictions
  restrictionsTitle: string;
  modelRestrictionActive: string;
  modelRestrictionDisabled: string;
  clientRestrictionActive: string;
  clientRestrictionDisabled: string;
  restrictedModelsTitle: string;
  allowedClientsTitle: string;
  allClientsAllowed: string;

  // Errors & Alerts
  errorTitle: string;
  keyNotFound: string;
  networkError: string;
  copiedSuccess: string;
}

export const translations: Record<Language, Translations> = {
  "zh-TW": {
    siteTitle: "API 使用量與額度統計儀表板",
    siteSubtitle: "Claude & Codex · 金鑰使用量與餘額即時監控",
    tagline: "輸入 cr_ 開頭的 API Key 即刻查詢額度、Token 明細與快取節省數據",
    inputPlaceholder: "請輸入以 cr_ 起頭的 API Key (例如：cr_2a8b9c...)",
    queryButton: "查詢統計",
    querying: "查詢中...",
    clearButton: "清除",
    rememberKey: "在瀏覽器中記住 Key (本地安全儲存)",
    invalidKeyPrefix: "API Key 格式不正確，必須以 'cr_' 開頭",
    apiKeyHelp: "金鑰僅由您的裝置直接調用專用網關，網站絕不儲存或記錄您的金鑰。",
    privacyNotice: "安全保證：端到端加密連線，無資料庫、無追蹤日誌。",

    overviewTab: "概覽儀表板",
    detailsTab: "限制與配額",
    refreshButton: "重新整理",
    lastUpdated: "最後更新時間",

    totalSpent: "已消耗金額",
    totalLimit: "總額度限額",
    remainingBudget: "剩餘額度",
    budgetUsage: "額度使用率",
    totalTokens: "Token 總用量",
    totalRequests: "API 請求次數",
    avgCostPerReq: "平均每次請求費用",
    keyStatus: "金鑰狀態",
    activeStatus: "已啟用 (Active)",
    inactiveStatus: "已停用 (Inactive)",

    tokenBreakdownTitle: "Token 結構分佈與快取分析",
    tokenBreakdownSubtitle: "深入掌握輸入、輸出與 Prompt Cache 快取節省效能",
    inputTokens: "輸入 (Input)",
    outputTokens: "輸出 (Output)",
    cacheCreateTokens: "快取建立 (Cache Write)",
    cacheReadTokens: "快取命中 (Cache Read)",
    cacheReadDesc: "高效率 Prompt Cache 命中，大幅節省 90% 的輸入 Token 成本",
    cacheSavingsNote: "快取讀取佔比愈高，代表長對話與代碼上下文複用效率愈佳！",

    limitsTitle: "額度與頻率限制 (Limits)",
    dailyCostLimit: "單日消費上限",
    currentDailyCost: "今日已消費",
    concurrencyLimit: "並發請求限制",
    rateLimitWindow: "限流時間視窗",
    rateLimitRequests: "視窗請求上限",
    rateLimitCost: "視窗金額上限",
    weeklyOpusLimit: "每週 Opus 限額",
    weeklyResetDay: "週重設日",
    unlimited: "無限制 (0)",

    accountInfoTitle: "金鑰與網關關聯",
    keyName: "名稱",
    apiId: "API ID (識別碼)",
    createdAt: "建立時間",
    activatedAt: "啟用時間",
    expiresAt: "到期時間",
    expirationMode: "過期模式",
    claudeAccount: "Claude 服務群組",
    openaiAccount: "OpenAI 服務群組",
    geminiAccount: "Gemini 服務群組",
    notBound: "未綁定",

    restrictionsTitle: "模型與客戶端存取限制",
    modelRestrictionActive: "模型限制：已開啟",
    modelRestrictionDisabled: "模型限制：未限制",
    clientRestrictionActive: "客戶端限制：已開啟",
    clientRestrictionDisabled: "客戶端限制：未限制 (所有客戶端皆可連接)",
    restrictedModelsTitle: "受限模型清單 (Restricted Models)",
    allowedClientsTitle: "允許之客戶端 (Allowed Clients)",
    allClientsAllowed: "未指定客戶端限制，支援所有相容工具 (Cursor, Claude Code, Cline 等)",

    errorTitle: "查詢失敗",
    keyNotFound: "找不到此 API Key 或金鑰無效，請確認後重試。",
    networkError: "網路連線異常或服務網關暫時無法連線，請稍後再試。",
    copiedSuccess: "已成功複製到剪貼簿！",
  },
  "zh-CN": {
    siteTitle: "API 使用量与额度统计仪表板",
    siteSubtitle: "Claude & Codex · 密钥使用量与余额实时监控",
    tagline: "输入 cr_ 开头的 API Key 即刻查询额度、Token 明细与缓存节省数据",
    inputPlaceholder: "请输入以 cr_ 起头的 API Key (例如：cr_2a8b9c...)",
    queryButton: "查询统计",
    querying: "查询中...",
    clearButton: "清除",
    rememberKey: "在浏览器中记住 Key (本地安全存储)",
    invalidKeyPrefix: "API Key 格式不正确，必须以 'cr_' 开头",
    apiKeyHelp: "密钥仅由您的设备直接调用专用网关，网站绝不存储或记录您的密钥。",
    privacyNotice: "安全保证：端到端加密连接，无数据库、无追踪日志。",

    overviewTab: "概览仪表板",
    detailsTab: "限制与配额",
    refreshButton: "刷新",
    lastUpdated: "最后更新时间",

    totalSpent: "已消耗金额",
    totalLimit: "总额度限额",
    remainingBudget: "剩余额度",
    budgetUsage: "额度使用率",
    totalTokens: "Token 总用量",
    totalRequests: "API 请求次数",
    avgCostPerReq: "平均每次请求费用",
    keyStatus: "密钥状态",
    activeStatus: "已启用 (Active)",
    inactiveStatus: "已停用 (Inactive)",

    tokenBreakdownTitle: "Token 结构分布与缓存分析",
    tokenBreakdownSubtitle: "深入掌握输入、输出与 Prompt Cache 缓存节省效能",
    inputTokens: "输入 (Input)",
    outputTokens: "输出 (Output)",
    cacheCreateTokens: "缓存创建 (Cache Write)",
    cacheReadTokens: "缓存命中 (Cache Read)",
    cacheReadDesc: "高效率 Prompt Cache 命中，大幅节省 90% 的输入 Token 成本",
    cacheSavingsNote: "缓存读取占比越高，代表长对话与代码上下文复用效率更佳！",

    limitsTitle: "额度与频率限制 (Limits)",
    dailyCostLimit: "单日消费上限",
    currentDailyCost: "今日已消费",
    concurrencyLimit: "并发请求限制",
    rateLimitWindow: "限流时间窗口",
    rateLimitRequests: "窗口请求上限",
    rateLimitCost: "窗口金额上限",
    weeklyOpusLimit: "每周 Opus 限额",
    weeklyResetDay: "周重置日",
    unlimited: "无限制 (0)",

    accountInfoTitle: "密钥与网关关联",
    keyName: "名称",
    apiId: "API ID (标识符)",
    createdAt: "创建时间",
    activatedAt: "激活时间",
    expiresAt: "到期时间",
    expirationMode: "过期模式",
    claudeAccount: "Claude 服务群组",
    openaiAccount: "OpenAI 服务群组",
    geminiAccount: "Gemini 服务群组",
    notBound: "未绑定",

    restrictionsTitle: "模型与客户端访问限制",
    modelRestrictionActive: "模型限制：已开启",
    modelRestrictionDisabled: "模型限制：未限制",
    clientRestrictionActive: "客户端限制：已开启",
    clientRestrictionDisabled: "客户端限制：未限制 (所有客户端均可连接)",
    restrictedModelsTitle: "受限模型清单 (Restricted Models)",
    allowedClientsTitle: "允许之客户端 (Allowed Clients)",
    allClientsAllowed: "未指定客户端限制，支持所有兼容工具 (Cursor, Claude Code, Cline 等)",

    errorTitle: "查询失败",
    keyNotFound: "找不到此 API Key 或密钥无效，请确认后重试。",
    networkError: "网络连接异常或服务网关暂时无法连接，请稍后再试。",
    copiedSuccess: "已成功复制到剪贴板！",
  },
  en: {
    siteTitle: "API Usage & Balance Dashboard",
    siteSubtitle: "Claude & Codex · Real-time Key Monitor",
    tagline: "Enter your cr_ API key to view balance, token breakdown and cache efficiency",
    inputPlaceholder: "Enter your API key starting with cr_ (e.g. cr_2a8b9c...)",
    queryButton: "Query Stats",
    querying: "Querying...",
    clearButton: "Clear",
    rememberKey: "Remember key in browser (Local storage)",
    invalidKeyPrefix: "Invalid key format, must start with 'cr_'",
    apiKeyHelp: "Your key is forwarded securely to the gateway. It is never stored or logged.",
    privacyNotice: "Privacy Guaranteed: Zero database, zero tracking, direct gateway communication.",

    overviewTab: "Overview Dashboard",
    detailsTab: "Limits & Quotas",
    refreshButton: "Refresh",
    lastUpdated: "Last Updated",

    totalSpent: "Total Spent",
    totalLimit: "Total Budget Limit",
    remainingBudget: "Remaining Balance",
    budgetUsage: "Budget Usage",
    totalTokens: "Total Tokens",
    totalRequests: "Total Requests",
    avgCostPerReq: "Avg Cost / Request",
    keyStatus: "Key Status",
    activeStatus: "Active",
    inactiveStatus: "Inactive",

    tokenBreakdownTitle: "Token Breakdown & Cache Efficiency",
    tokenBreakdownSubtitle: "Analyze input, output, and Prompt Cache cost savings",
    inputTokens: "Input",
    outputTokens: "Output",
    cacheCreateTokens: "Cache Write",
    cacheReadTokens: "Cache Read (Hit)",
    cacheReadDesc: "Prompt Cache hits save up to 90% input token cost",
    cacheSavingsNote: "Higher cache read ratio indicates effective prompt caching in long chats & codebases!",

    limitsTitle: "Limits & Rate Controls",
    dailyCostLimit: "Daily Cost Limit",
    currentDailyCost: "Today's Spent",
    concurrencyLimit: "Concurrency Limit",
    rateLimitWindow: "Rate Limit Window",
    rateLimitRequests: "Window Requests Limit",
    rateLimitCost: "Window Cost Limit",
    weeklyOpusLimit: "Weekly Opus Limit",
    weeklyResetDay: "Weekly Reset Day",
    unlimited: "Unlimited (0)",

    accountInfoTitle: "Key & Gateway Associations",
    keyName: "Name",
    apiId: "API ID (Internal UUID)",
    createdAt: "Created At",
    activatedAt: "Activated At",
    expiresAt: "Expires At",
    expirationMode: "Expiration Mode",
    claudeAccount: "Claude Service Group",
    openaiAccount: "OpenAI Service Group",
    geminiAccount: "Gemini Service Group",
    notBound: "Not Bound",

    restrictionsTitle: "Model & Client Restrictions",
    modelRestrictionActive: "Model Restriction: Active",
    modelRestrictionDisabled: "Model Restriction: Disabled",
    clientRestrictionActive: "Client Restriction: Active",
    clientRestrictionDisabled: "Client Restriction: Disabled (All clients allowed)",
    restrictedModelsTitle: "Restricted Models",
    allowedClientsTitle: "Allowed Clients",
    allClientsAllowed: "No client restrictions. Compatible with Cursor, Claude Code, Cline, etc.",

    errorTitle: "Query Failed",
    keyNotFound: "API key not found or invalid. Please check and try again.",
    networkError: "Network error or gateway unreachable. Please try again later.",
    copiedSuccess: "Copied to clipboard!",
  },
};

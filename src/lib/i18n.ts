export type Language = "en" | "zh-TW" | "zh-CN";

export interface Translations {
  // Navigation & Brand
  brandName: string;
  brandTag: string;
  brandSub: string;
  gatewayOnline: string;

  // Hero
  heroBadge: string;
  siteTitle: string;
  siteSubtitle: string;
  tagline: string;

  // Form
  inputLabel: string;
  inputPlaceholder: string;
  queryButton: string;
  querying: string;
  clearButton: string;
  rememberKey: string;
  invalidKeyPrefix: string;
  enterKeyPrompt: string;
  apiKeyHelp: string;
  privacyNotice: string;

  // Welcome Feature Cards (Empty state)
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;

  // Dashboard general
  keySubtitle: string;
  refreshButton: string;
  lastUpdated: string;
  unlimited: string;
  copied: string;
  copy: string;

  // Metrics Cards
  totalSpent: string;
  totalLimit: string;
  totalLimitPrefix: string;
  noLimit: string;
  usedPercent: string;
  remainingBudget: string;
  remainingSubtitle: string;
  budgetAmple: string;
  budgetSuspended: string;
  totalTokens: string;
  tokensExactPrefix: string;
  requestsCountSuffix: string;
  avgCostPerReq: string;
  keyNormal: string;
  keyInactive: string;
  activeStatus: string;
  inactiveStatus: string;

  // Token Breakdown
  tokenBreakdownTitle: string;
  tokenBreakdownSubtitle: string;
  totalLabel: string;
  inputTokens: string;
  outputTokens: string;
  cacheCreateTokens: string;
  cacheReadTokens: string;
  cacheBenefitTitle: string;
  cacheBenefitDesc1: string;
  cacheBenefitDesc2: string;

  // Limits Card
  budgetUsage: string;
  budgetLimitPrefix: string;
  noBudgetLimit: string;
  usedRatio: string;
  unlimitedParen: string;
  dailyCostLimit: string;
  dailySpentPrefix: string;
  weeklyOpusLimit: string;
  weeklySpentPrefix: string;
  concurrencyLimit: string;
  concurrencyReady: string;

  // Account Info Card
  accountInfoTitle: string;
  accountInfoSubtitle: string;
  keyName: string;
  apiId: string;
  createdAt: string;
  expiresAt: string;
  noExpiration: string;
  serviceGroupsTitle: string;
  claudeAccount: string;
  openaiAccount: string;
  geminiAccount: string;
  notBound: string;

  // Restrictions Card
  restrictionsTitle: string;
  restrictionsSubtitle: string;
  modelRestrictionActive: string;
  modelRestrictionDisabled: string;
  clientRestrictionActive: string;
  clientRestrictionDisabled: string;
  restrictedModelsTitle: string;
  modelsRestrictedCount: string;
  searchModelPlaceholder: string;
  noMatchingModels: string;
  noRestrictedModels: string;
  allowedClientsTitle: string;
  allClientsAllowed: string;

  // Footer
  footerDesc: string;
  footerZeroLogs: string;
  footerVercel: string;

  // Errors & Alerts
  errorTitle: string;
  keyNotFound: string;
  networkError: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    brandName: "API Monitor",
    brandTag: "Stat Dashboard",
    brandSub: "Claude & OpenAI Compatible Gateway",
    gatewayOnline: "Gateway Online",

    heroBadge: "AI Gateway · Stat Monitor",
    siteTitle: "API Usage & Balance Dashboard",
    siteSubtitle: "Claude & Codex · Real-time Key Monitor",
    tagline: "Enter your cr_ API key to view balance, token breakdown and cache efficiency",

    inputLabel: "API Key (cr_...)",
    inputPlaceholder: "Enter your API key starting with cr_ (e.g. cr_2a8b9c...)",
    queryButton: "Query Stats",
    querying: "Querying...",
    clearButton: "Clear",
    rememberKey: "Remember key in browser (Local storage)",
    invalidKeyPrefix: "Invalid key format, must start with 'cr_'",
    enterKeyPrompt: "Please enter an API Key",
    apiKeyHelp: "Your key is forwarded securely to the gateway. It is never stored or logged.",
    privacyNotice: "Privacy Guaranteed: Zero database, zero tracking, direct gateway communication.",

    feature1Title: "Real-time Balance & Cost",
    feature1Desc: "View consumed amount, budget limit, and remaining balance to prevent interruption.",
    feature2Title: "Prompt Cache Efficiency",
    feature2Desc: "Analyze input, output, and cache read tokens to see up to 90% cost savings.",
    feature3Title: "Model Restrictions & Limits",
    feature3Desc: "List restricted models, concurrency controls, and weekly quota resets.",

    keySubtitle: "Real-time usage & quota allocation monitor",
    refreshButton: "Refresh",
    lastUpdated: "Last updated",
    unlimited: "Unlimited (0)",
    copied: "Copied",
    copy: "Copy",

    totalSpent: "Total Spent",
    totalLimit: "Total Limit",
    totalLimitPrefix: "Total Limit",
    noLimit: "No limit",
    usedPercent: "Used",
    remainingBudget: "Remaining Balance",
    remainingSubtitle: "Available budget",
    budgetAmple: "Ample",
    budgetSuspended: "Suspended",
    totalTokens: "Total Tokens",
    tokensExactPrefix: "Exact count",
    requestsCountSuffix: "requests",
    avgCostPerReq: "Avg Cost / Request",
    keyNormal: "Key active & normal",
    keyInactive: "Key inactive",
    activeStatus: "ACTIVE",
    inactiveStatus: "INACTIVE",

    tokenBreakdownTitle: "Token Breakdown & Cache Efficiency",
    tokenBreakdownSubtitle: "Analyze input, output, and Prompt Cache cost savings",
    totalLabel: "Total",
    inputTokens: "Input",
    outputTokens: "Output",
    cacheCreateTokens: "Cache Write",
    cacheReadTokens: "Cache Read (Hit)",
    cacheBenefitTitle: "Prompt Cache Savings Boost: ",
    cacheBenefitDesc1: "This key read ",
    cacheBenefitDesc2: " tokens from cache, saving nearly 90% of input cost compared to non-cached calls!",

    budgetUsage: "Budget Usage",
    budgetLimitPrefix: "Total Budget Limit: ",
    noBudgetLimit: "No total budget limit set",
    usedRatio: "Usage Ratio",
    unlimitedParen: "0% (Unlimited)",
    dailyCostLimit: "Daily Cost Limit",
    dailySpentPrefix: "Today's spent: ",
    weeklyOpusLimit: "Weekly Opus Limit",
    weeklySpentPrefix: "This week: ",
    concurrencyLimit: "Concurrency Limit",
    concurrencyReady: "Protection active",

    accountInfoTitle: "Key & Gateway Associations",
    accountInfoSubtitle: "Key validity and dedicated service node status",
    keyName: "Key Name",
    apiId: "API ID (Internal UUID)",
    createdAt: "Created At",
    expiresAt: "Expires At",
    noExpiration: "Never expires / Unset",
    serviceGroupsTitle: "Upstream Service Groups",
    claudeAccount: "Claude Service Group",
    openaiAccount: "OpenAI Service Group",
    geminiAccount: "Gemini Service Group",
    notBound: "Not bound",

    restrictionsTitle: "Model & Client Restrictions",
    restrictionsSubtitle: "List of restricted models and client allowlists",
    modelRestrictionActive: "Model Restriction: Active",
    modelRestrictionDisabled: "Model Restriction: Disabled",
    clientRestrictionActive: "Client Restriction: Active",
    clientRestrictionDisabled: "Client Restriction: Disabled",
    restrictedModelsTitle: "Restricted Models",
    modelsRestrictedCount: "models restricted",
    searchModelPlaceholder: "Search models...",
    noMatchingModels: "No matching models found",
    noRestrictedModels: "No restricted models. All models accessible.",
    allowedClientsTitle: "Allowed Clients",
    allClientsAllowed: "No client restrictions. Compatible with Cursor, Claude Code, Cline, etc.",

    footerDesc: "Designed for Claude & OpenAI Compatible Keys",
    footerZeroLogs: "Zero Logs Guaranteed",
    footerVercel: "Vercel Deployment Ready",

    errorTitle: "Query Failed",
    keyNotFound: "API key not found or invalid. Please check and try again.",
    networkError: "Network error or gateway unreachable. Please try again later.",
  },
  "zh-TW": {
    brandName: "API 統計監控",
    brandTag: "儀表板",
    brandSub: "Claude 與相容網關",
    gatewayOnline: "專屬網關在線",

    heroBadge: "AI 專用網關 · 即時統計監控",
    siteTitle: "API 使用量與額度統計儀表板",
    siteSubtitle: "Claude & Codex · 金鑰使用量與餘額即時監控",
    tagline: "輸入 cr_ 開頭的 API Key 即刻查詢額度、Token 明細與快取節省數據",

    inputLabel: "API Key (cr_...)",
    inputPlaceholder: "請輸入以 cr_ 起頭的 API Key (例如：cr_2a8b9c...)",
    queryButton: "查詢統計",
    querying: "查詢中...",
    clearButton: "清除",
    rememberKey: "在瀏覽器中記住 Key (本地安全儲存)",
    invalidKeyPrefix: "API Key 格式不正確，必須以 'cr_' 開頭",
    enterKeyPrompt: "請輸入 API Key",
    apiKeyHelp: "金鑰僅由您的裝置直接調用專用網關，網站絕不儲存或記錄您的金鑰。",
    privacyNotice: "安全保證：端到端加密連線，無資料庫、無追蹤日誌。",

    feature1Title: "即時餘額與花費統計",
    feature1Desc: "直觀查看已消耗金額、總額度上限、剩餘金額，避免工作流超支中斷。",
    feature2Title: "Prompt Cache 節省分析",
    feature2Desc: "拆解輸入/輸出與快取讀取（Cache Read），精準掌握 90% 省錢效率。",
    feature3Title: "模型受限與頻率控制",
    feature3Desc: "自動列出金鑰允許或受限制之模型、並發限制與每週重設週期。",

    keySubtitle: "即時使用量與額度配額監控",
    refreshButton: "重新整理",
    lastUpdated: "最後更新時間",
    unlimited: "無限制 (0)",
    copied: "已複製",
    copy: "複製",

    totalSpent: "已消耗金額",
    totalLimit: "總額度限額",
    totalLimitPrefix: "總額度",
    noLimit: "無上限",
    usedPercent: "已用",
    remainingBudget: "剩餘額度",
    remainingSubtitle: "可繼續消耗額度",
    budgetAmple: "額度充裕",
    budgetSuspended: "暫停",
    totalTokens: "Token 總用量",
    tokensExactPrefix: "精密計數",
    requestsCountSuffix: "次請求",
    avgCostPerReq: "平均每次請求費用",
    keyNormal: "金鑰狀態正常",
    keyInactive: "金鑰已停用",
    activeStatus: "已啟用 (ACTIVE)",
    inactiveStatus: "已停用 (INACTIVE)",

    tokenBreakdownTitle: "Token 結構分佈與快取分析",
    tokenBreakdownSubtitle: "深入掌握輸入、輸出與 Prompt Cache 快取節省效能",
    totalLabel: "總額",
    inputTokens: "輸入 (Input)",
    outputTokens: "輸出 (Output)",
    cacheCreateTokens: "快取建立 (Cache Write)",
    cacheReadTokens: "快取命中 (Cache Read)",
    cacheBenefitTitle: "Prompt Cache 節省加乘：",
    cacheBenefitDesc1: "本金鑰共從快取直接讀取了 ",
    cacheBenefitDesc2: " Tokens，相較於全量無快取模式，節省了將近 90% 的輸入費用！",

    budgetUsage: "額度使用率",
    budgetLimitPrefix: "總預算限額: ",
    noBudgetLimit: "目前無總額度上限限制",
    usedRatio: "已使用比例",
    unlimitedParen: "0% (無上限)",
    dailyCostLimit: "單日消費上限",
    dailySpentPrefix: "今日已耗: ",
    weeklyOpusLimit: "每週 Opus 限額",
    weeklySpentPrefix: "本週已用: ",
    concurrencyLimit: "並發請求限制",
    concurrencyReady: "並發保護已就緒",

    accountInfoTitle: "金鑰與網關關聯",
    accountInfoSubtitle: "金鑰有效性與專屬服務節點狀態",
    keyName: "名稱",
    apiId: "API ID (識別碼)",
    createdAt: "建立時間",
    expiresAt: "到期時間",
    noExpiration: "無 (永不過期 / 未設定)",
    serviceGroupsTitle: "底層服務節點群組 (Service Groups)",
    claudeAccount: "Claude 服務群組",
    openaiAccount: "OpenAI 服務群組",
    geminiAccount: "Gemini 服務群組",
    notBound: "未綁定",

    restrictionsTitle: "模型與客戶端存取限制",
    restrictionsSubtitle: "包含受限制無法呼叫之模型，以及客戶端許可清單",
    modelRestrictionActive: "模型限制：已開啟",
    modelRestrictionDisabled: "模型限制：未限制",
    clientRestrictionActive: "客戶端限制：已開啟",
    clientRestrictionDisabled: "客戶端限制：未限制 (所有客戶端皆可連接)",
    restrictedModelsTitle: "受限模型清單 (Restricted Models)",
    modelsRestrictedCount: "個模型受限",
    searchModelPlaceholder: "搜尋模型名稱...",
    noMatchingModels: "未找到符合的模型",
    noRestrictedModels: "無受限模型，可自由呼叫全體模型",
    allowedClientsTitle: "允許之客戶端 (Allowed Clients)",
    allClientsAllowed: "未指定客戶端限制，支援所有相容工具 (Cursor, Claude Code, Cline 等)",

    footerDesc: "專為 Claude & OpenAI 相容金鑰打造",
    footerZeroLogs: "安全無日誌",
    footerVercel: "Vercel 部署支援",

    errorTitle: "查詢失敗",
    keyNotFound: "找不到此 API Key 或金鑰無效，請確認後重試。",
    networkError: "網路連線異常或服務網關暫時無法連線，請稍後再試。",
  },
  "zh-CN": {
    brandName: "API 统计监控",
    brandTag: "仪表板",
    brandSub: "Claude 与兼容网关",
    gatewayOnline: "专属网关在线",

    heroBadge: "AI 专用网关 · 实时统计监控",
    siteTitle: "API 使用量与额度统计仪表板",
    siteSubtitle: "Claude & Codex · 密钥使用量与余额实时监控",
    tagline: "输入 cr_ 开头的 API Key 即刻查询额度、Token 明细与缓存节省数据",

    inputLabel: "API Key (cr_...)",
    inputPlaceholder: "请输入以 cr_ 起头的 API Key (例如：cr_2a8b9c...)",
    queryButton: "查询统计",
    querying: "查询中...",
    clearButton: "清除",
    rememberKey: "在浏览器中记住 Key (本地安全存储)",
    invalidKeyPrefix: "API Key 格式不正确，必须以 'cr_' 开头",
    enterKeyPrompt: "请输入 API Key",
    apiKeyHelp: "密钥仅由您的设备直接调用专用网关，网站绝不存储或记录您的密钥。",
    privacyNotice: "安全保证：端到端加密连接，无数据库、无追踪日志。",

    feature1Title: "实时余额与花费统计",
    feature1Desc: "直观查看已消耗金额、总额度上限、剩余金额，避免工作流超支中断。",
    feature2Title: "Prompt Cache 节省分析",
    feature2Desc: "拆解输入/输出与缓存读取（Cache Read），精准掌握 90% 省钱效率。",
    feature3Title: "模型受限与频率控制",
    feature3Desc: "自动列出密钥允许或受限制之模型、并发限制与每周重置周期。",

    keySubtitle: "实时使用量与额度配额监控",
    refreshButton: "刷新",
    lastUpdated: "最后更新时间",
    unlimited: "无限制 (0)",
    copied: "已复制",
    copy: "复制",

    totalSpent: "已消耗金额",
    totalLimit: "总额度限额",
    totalLimitPrefix: "总额度",
    noLimit: "无上限",
    usedPercent: "已用",
    remainingBudget: "剩余额度",
    remainingSubtitle: "可继续消耗额度",
    budgetAmple: "额度充裕",
    budgetSuspended: "暂停",
    totalTokens: "Token 总用量",
    tokensExactPrefix: "精密计数",
    requestsCountSuffix: "次请求",
    avgCostPerReq: "平均每次请求费用",
    keyNormal: "密钥状态正常",
    keyInactive: "密钥已停用",
    activeStatus: "已启用 (ACTIVE)",
    inactiveStatus: "已停用 (INACTIVE)",

    tokenBreakdownTitle: "Token 结构分布与缓存分析",
    tokenBreakdownSubtitle: "深入掌握输入、输出与 Prompt Cache 缓存节省效能",
    totalLabel: "总额",
    inputTokens: "输入 (Input)",
    outputTokens: "输出 (Output)",
    cacheCreateTokens: "缓存创建 (Cache Write)",
    cacheReadTokens: "缓存命中 (Cache Read)",
    cacheBenefitTitle: "Prompt Cache 节省加乘：",
    cacheBenefitDesc1: "本密钥共从缓存直接读取了 ",
    cacheBenefitDesc2: " Tokens，相较于全量无缓存模式，节省了将近 90% 的输入费用！",

    budgetUsage: "额度使用率",
    budgetLimitPrefix: "总预算限额: ",
    noBudgetLimit: "目前无总额度上限限制",
    usedRatio: "已使用比例",
    unlimitedParen: "0% (无上限)",
    dailyCostLimit: "单日消费上限",
    dailySpentPrefix: "今日已耗: ",
    weeklyOpusLimit: "每周 Opus 限额",
    weeklySpentPrefix: "本周已用: ",
    concurrencyLimit: "并发请求限制",
    concurrencyReady: "并发保护已就绪",

    accountInfoTitle: "密钥与网关关联",
    accountInfoSubtitle: "密钥有效性与专属服务节点状态",
    keyName: "名称",
    apiId: "API ID (标识符)",
    createdAt: "创建时间",
    expiresAt: "到期时间",
    noExpiration: "无 (永不过期 / 未设置)",
    serviceGroupsTitle: "底层服务节点群组 (Service Groups)",
    claudeAccount: "Claude 服务群组",
    openaiAccount: "OpenAI 服务群组",
    geminiAccount: "Gemini 服务群组",
    notBound: "未绑定",

    restrictionsTitle: "模型与客户端访问限制",
    restrictionsSubtitle: "包含受限制无法调用之模型，以及客户端许可清单",
    modelRestrictionActive: "模型限制：已开启",
    modelRestrictionDisabled: "模型限制：未限制",
    clientRestrictionActive: "客户端限制：已开启",
    clientRestrictionDisabled: "客户端限制：未限制 (所有客户端均可连接)",
    restrictedModelsTitle: "受限模型清单 (Restricted Models)",
    modelsRestrictedCount: "个模型受限",
    searchModelPlaceholder: "搜索模型名称...",
    noMatchingModels: "未找到符合的模型",
    noRestrictedModels: "无受限模型，可自由调用全体模型",
    allowedClientsTitle: "允许之客户端 (Allowed Clients)",
    allClientsAllowed: "未指定客户端限制，支持所有兼容工具 (Cursor, Claude Code, Cline 等)",

    footerDesc: "专为 Claude & OpenAI 兼容密钥打造",
    footerZeroLogs: "安全无日志",
    footerVercel: "Vercel 部署支持",

    errorTitle: "查询失败",
    keyNotFound: "找不到此 API Key 或密钥无效，请确认后重试。",
    networkError: "网络连接异常或服务网关暂时无法连接，请稍后再试。",
  },
};

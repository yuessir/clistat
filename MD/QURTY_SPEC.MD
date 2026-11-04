### 網域 api.tkbk.online 是由第三方 API 服務商 TKBK 所營運的 API 網關端點，主要用於提供免 AWS 帳號的 Claude 模型 API 轉接，並支援相容於 OpenAI 格式的程式串接（例如將 Cursor、n8n 連接至 https://tkbk.online）。
提及 user-stats，通常有以下兩種可能的情境：

1. 查詢您在 TKBK 的 API 使用量與餘額統計

如果您是在串接代碼或工具中尋找該端點，它是用來檢查您個人的帳戶餘額、Token 消耗與即時費用統計。
• 主要功能： 讓開發者即時查閱 API Key 的剩餘點數、花費金額，確保額度未過期或超支。

# 1) get the apiId of your cr_… key
```
curl -s https://api.tkbk.online/apiStats/api/get-key-id \
  -H 'Content-Type: application/json' \
  -d '{"apiKey":"cr_yourkey"}'
```

響應1：
  ```
  {"success":true,"data":{"id":"c3beaaa9-a735-4ddd-94e5-f7e1abe1682"}}
  ```



# 2) the key's stats: balance, limits and spend
使用# 1) 的響應的id進行查詢
```
curl -s https://api.tkbk.online/apiStats/api/user-stats \
  -H 'Content-Type: application/json' \
  -d '{"apiId":"c3beaaa9-a735-4ddd-94e5-f7e1abe1682"}'
```

響應2：
```
  {"success":true,"data":{"id":"c3beaaa9-a735-4ddd-94e5-f7e1abe1682","name":"ds-","isActive":true,"createdAt":"2026-10-13T07:25:05.835Z","expiresAt":"","expirationMode":"fixed","isActivated":true,"activationDays":0,"activatedAt":"2026-10-13T07:25:05.835Z","permissions":"[]","usage":{"total":{"tokens":18333787,"inputTokens":7722580,"outputTokens":822838,"cacheCreateTokens":4469039,"cacheReadTokens":5319330,"allTokens":18333787,"requests":367,"cost":53.2042077,"formattedCost":"$53.20"}},"limits":{"tokenLimit":0,"concurrencyLimit":0,"rateLimitWindow":0,"rateLimitRequests":0,"rateLimitCost":0,"dailyCostLimit":0,"totalCostLimit":250,"weeklyOpusCostLimit":0,"weeklyResetDay":1,"weeklyResetHour":0,"currentWindowRequests":0,"currentWindowTokens":0,"currentWindowCost":0,"currentDailyCost":0,"currentTotalCost":53.2042077,"weeklyOpusCost":0,"windowStartTime":null,"windowEndTime":null,"windowRemainingSeconds":null},"accounts":{"claudeAccountId":"group:b8362114-50e9-4ad1-9000-8d2ea5a72764","geminiAccountId":null,"openaiAccountId":"group:0703a9b4-9e81-4529-9e2f-e8a4f742c612","details":null},"restrictions":{"enableModelRestriction":true,"restrictedModels":["gemini-3.1-pro","gemini-3.8-flash","gemini-4-argon","gpt-5.3-codex","gpt-5.4-mini","gpt-5.5","gpt-5.6","gpt-5.6-luna","gpt-5.6-sol","gpt-5.6-terra","gpt-6-astra","gpt-6-sol","gpt-6.1-sol","tkbk-fast","tkbk-smart"],"enableClientRestriction":false,"allowedClients":[]},"serviceRates":{}}}

```  
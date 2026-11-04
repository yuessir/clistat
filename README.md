# API 統計儀表板 (API Stat Monitor)

專為 **Claude & OpenAI 相容 API 金鑰 (cr_...)** 打造的使用量與額度即時監控儀表板。支援輸入以 `cr_` 起頭的金鑰，快速解析並視覺化查詢 API 餘額、Token 消耗結構、Prompt Cache 命中節省以及模型限制。

整體設計採用高雅黑曜石暗色美學（Obsidian Dark Mode），搭配溫潤琥珀金發光微光（Amber Glow）與毛玻璃卡片質感。

---

## 🌟 核心特色與功能

### 1. 金鑰輸入與安全查詢
- **前綴格式校驗**：支援自動驗證 `cr_` 起頭的合法金鑰，防範無效輸入。
- **本地安全記憶**：支援瀏覽器 LocalStorage 本地記憶，方便日常快速查閱。
- **隱私零日誌**：金鑰僅在轉發查詢時使用，本專案無資料庫、無後台追蹤日誌，端到端保障隱私。

### 2. 直觀易懂的數據統計儀表板
- **核心指標卡片**：
  - **已消耗金額 (Total Spent)**：即時精確到小數點後 4 位的消耗統計。
  - **總額度限額與剩餘額度 (Budget & Balance)**：即時計算剩餘可用額度，並計算額度消耗百分比。
  - **Token 總消耗量 (Total Tokens)**：支援百萬 (M) / 千 (K) 級別的緊湊可讀展示與精確計數。
  - **請求次數與均次成本**：計算平均每次請求消耗金額，評估性價比。
  - **金鑰活躍狀態 (Active / Inactive)**：以綠色/紅色呼吸微光標示有效性。

- **Token 結構與 Prompt Cache 節省分析**：
  - **多色堆疊佔比條 (Stacked Bar)**：可視化呈現「輸入 (Input)」、「輸出 (Output)」、「快取寫入 (Cache Create)」、「快取命中讀取 (Cache Read)」。
  - **Prompt Cache 效能說明**：強調高達 90% 的輸入 Token 成本節省與命中效率。

- **限制與頻率配額 (Limits)**：
  - 單日費用限額 (Daily Cost Limit) 及今日已花費。
  - 每週 Opus 限額 (Weekly Opus Limit) 與重設週期。
  - 並發請求限制 (Concurrency Limit) 與視窗防護。

- **金鑰與服務節點關聯 (Account Info)**：
  - 展示金鑰名稱、API ID (UUID) 與一鍵複製。
  - 展示建立時間、啟用時間、過期模式與到期日。
  - 顯示 Claude、OpenAI、Gemini 底層服務群組綁定。

- **模型限制與客戶端授權 (Restrictions)**：
  - 模型限制開關狀態與受限模型標籤雲（支援即時搜尋過濾）。
  - 客戶端白名單授權說明（支援 Cursor、Claude Code、Cline 等工具）。

### 3. 中文優先與多語言支援
- 繁體中文（預設優先）
- 簡體中文
- English (英文)
- 頂部導航列支援即時切換。

---

## 🚀 部署至 VERCEL

本專案完全基於 **Next.js 14 App Router** 開發，為 Vercel 原生優化架構。

### 步驟說明
1. 將本專案程式碼推送到您的 GitHub 倉庫：
   ```bash
   git init
   git add .
   git commit -m "feat: init api stats monitor"
   git branch -M main
   git remote add origin <您的倉庫網址>
   git push -u origin main
   ```
2. 前往 [Vercel 官網](https://vercel.com/)，登入後點擊 **"Add New..." -> "Project"**。
3. 選擇剛才建立的倉庫並點擊 **Import**。
4. Framework Preset 會自動識別為 **Next.js**。
5. （選填）若需要自訂上游網關網址，可在 Environment Variables 新增 `UPSTREAM_API_BASE_URL`。
6. 點擊 **Deploy**，約 30 秒至 1 分鐘即可完成全球邊緣部署！

---

## 💻 本地開發與構建

### 安裝步驟
1. 安裝相依套件：
   ```bash
   npm install
   ```
2. 啟動本機開發伺服器：
   ```bash
   npm run dev
   ```
   瀏覽器開啟 `http://localhost:3000` 即可訪問。

3. 執行生產構建與啟動：
   ```bash
   npm run build
   npm run start
   ```

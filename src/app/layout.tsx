import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API 使用量與額度統計儀表板 · 即時監控",
  description: "即時查詢 Claude & Codex API 金鑰額度、Token 消耗、快取節省與並發限制",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <div className="fixed inset-0 pointer-events-none ambient-bg-glow z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

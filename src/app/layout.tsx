import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Usage & Balance Dashboard · Real-time Monitor",
  description: "Real-time key balance, token breakdown, Prompt Cache savings and limits monitor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-amber-500/30 selection:text-amber-200">
        <div className="fixed inset-0 pointer-events-none ambient-bg-glow z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

"use client";

import React from "react";
import { Language } from "@/lib/i18n";
import { ShieldCheck, Terminal } from "lucide-react";

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#09090b]/80 backdrop-blur-md mt-auto py-8 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span>API Stat Monitor</span>
          <span>·</span>
          <span>Designed for Claude & OpenAI Compatible Keys</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>安全無日誌</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Vercel 部署支援</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

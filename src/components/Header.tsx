"use client";

import React from "react";
import { Language } from "@/lib/i18n";
import { Globe, Cpu } from "lucide-react";

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-base shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Cpu className="w-5 h-5 text-amber-400" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 animate-ping opacity-75" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-base sm:text-lg tracking-tight text-white">
                API Monitor
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Stat Dashboard
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Claude & OpenAI Compatible Gateway
            </p>
          </div>
        </div>

        {/* Right tools: Gateway Status & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Neutral Gateway Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium">專屬網關在線</span>
          </div>

          {/* Language Selector */}
          <div className="relative flex items-center bg-white/[0.04] border border-white/[0.08] rounded-lg p-0.5 text-xs text-zinc-300">
            <Globe className="w-3.5 h-3.5 ml-2 text-zinc-400 hidden xs:block" />
            <select
              value={currentLang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="bg-transparent text-xs text-zinc-200 py-1 px-2.5 outline-none cursor-pointer hover:text-white transition-colors"
              aria-label="選擇語言"
            >
              <option value="zh-TW" className="bg-[#121215] text-zinc-200">
                繁體中文
              </option>
              <option value="zh-CN" className="bg-[#121215] text-zinc-200">
                简体中文
              </option>
              <option value="en" className="bg-[#121215] text-zinc-200">
                English
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

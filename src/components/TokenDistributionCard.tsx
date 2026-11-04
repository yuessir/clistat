"use client";

import React from "react";
import { ApiKeyUsageTotal } from "@/types/stats";
import { Language, translations } from "@/lib/i18n";
import { formatNumber, formatCompactNumber } from "@/lib/utils";
import { Layers, Zap, ArrowDownToLine, ArrowUpFromLine, Database, Sparkles } from "lucide-react";

interface TokenDistributionCardProps {
  usage: ApiKeyUsageTotal;
  currentLang: Language;
}

export const TokenDistributionCard: React.FC<TokenDistributionCardProps> = ({
  usage,
  currentLang,
}) => {
  const t = translations[currentLang];

  const total = usage?.allTokens || usage?.tokens || 1;
  const input = usage?.inputTokens || 0;
  const output = usage?.outputTokens || 0;
  const cacheCreate = usage?.cacheCreateTokens || 0;
  const cacheRead = usage?.cacheReadTokens || 0;

  const inputPct = ((input / total) * 100).toFixed(1);
  const outputPct = ((output / total) * 100).toFixed(1);
  const cacheCreatePct = ((cacheCreate / total) * 100).toFixed(1);
  const cacheReadPct = ((cacheRead / total) * 100).toFixed(1);

  // 快取效率比率
  const cacheTotal = cacheCreate + cacheRead;
  const cacheEffectiveness = cacheTotal > 0
    ? ((cacheRead / cacheTotal) * 100).toFixed(1)
    : "0.0";

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              {t.tokenBreakdownTitle}
            </h3>
            <p className="text-xs text-zinc-400">{t.tokenBreakdownSubtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium font-mono">
            <Zap className="w-3.5 h-3.5" />
            <span>總額: {formatCompactNumber(total)} Tokens</span>
          </span>
        </div>
      </div>

      {/* Visual Stacked Bar */}
      <div className="mt-5 space-y-2">
        <div className="w-full h-4 bg-zinc-900/90 rounded-lg overflow-hidden flex p-0.5 border border-white/[0.08]">
          <div
            title={`輸入: ${inputPct}%`}
            style={{ width: `${inputPct}%` }}
            className="h-full bg-blue-500 rounded-l transition-all duration-700 hover:opacity-90"
          />
          <div
            title={`輸出: ${outputPct}%`}
            style={{ width: `${outputPct}%` }}
            className="h-full bg-emerald-500 transition-all duration-700 hover:opacity-90"
          />
          <div
            title={`快取建立: ${cacheCreatePct}%`}
            style={{ width: `${cacheCreatePct}%` }}
            className="h-full bg-amber-500 transition-all duration-700 hover:opacity-90"
          />
          <div
            title={`快取讀取: ${cacheReadPct}%`}
            style={{ width: `${cacheReadPct}%` }}
            className="h-full bg-purple-500 rounded-r transition-all duration-700 hover:opacity-90"
          />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 text-[11px] text-zinc-400 pt-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>{t.inputTokens} ({inputPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>{t.outputTokens} ({outputPct}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span>{t.cacheCreateTokens} ({cacheCreatePct}%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span>{t.cacheReadTokens} ({cacheReadPct}%)</span>
          </div>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-6">
        {/* Input */}
        <div className="p-3.5 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 hover:border-blue-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <ArrowDownToLine className="w-3.5 h-3.5 text-blue-400" />
              <span>輸入 Token</span>
            </span>
            <span className="text-[10px] font-mono text-blue-400">{inputPct}%</span>
          </div>
          <div className="mt-2 text-base sm:text-lg font-mono font-bold text-white">
            {formatNumber(input)}
          </div>
          <div className="text-[10px] text-zinc-500 mt-1 font-mono">
            {formatCompactNumber(input)} Tokens
          </div>
        </div>

        {/* Output */}
        <div className="p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 hover:border-emerald-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <ArrowUpFromLine className="w-3.5 h-3.5 text-emerald-400" />
              <span>輸出 Token</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400">{outputPct}%</span>
          </div>
          <div className="mt-2 text-base sm:text-lg font-mono font-bold text-white">
            {formatNumber(output)}
          </div>
          <div className="text-[10px] text-zinc-500 mt-1 font-mono">
            {formatCompactNumber(output)} Tokens
          </div>
        </div>

        {/* Cache Creation */}
        <div className="p-3.5 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 hover:border-amber-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span>快取建立</span>
            </span>
            <span className="text-[10px] font-mono text-amber-400">{cacheCreatePct}%</span>
          </div>
          <div className="mt-2 text-base sm:text-lg font-mono font-bold text-white">
            {formatNumber(cacheCreate)}
          </div>
          <div className="text-[10px] text-zinc-500 mt-1 font-mono">
            {formatCompactNumber(cacheCreate)} Tokens
          </div>
        </div>

        {/* Cache Read (Hit) */}
        <div className="p-3.5 rounded-xl bg-purple-500/[0.05] border border-purple-500/20 hover:border-purple-500/30 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs text-purple-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>快取命中 (讀取)</span>
            </span>
            <span className="text-[10px] font-mono text-purple-400">{cacheReadPct}%</span>
          </div>
          <div className="mt-2 text-base sm:text-lg font-mono font-bold text-white">
            {formatNumber(cacheRead)}
          </div>
          <div className="text-[10px] text-zinc-500 mt-1 font-mono">
            {formatCompactNumber(cacheRead)} Tokens
          </div>
        </div>
      </div>

      {/* Prompt Cache Optimization Highlight */}
      <div className="mt-4 p-3 rounded-xl bg-purple-950/20 border border-purple-500/20 flex items-start gap-2.5 text-xs text-zinc-300">
        <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
        <div className="flex-1">
          <span className="font-semibold text-purple-300">Prompt Cache 節省加乘：</span>
          <span className="text-zinc-400 ml-1">
            本金鑰共從快取直接讀取了 <strong className="text-purple-300 font-mono">{formatNumber(cacheRead)}</strong> Tokens (命中效率 {cacheEffectiveness}%)，
            相較於全量無快取模式，節省了將近 90% 的輸入費用！
          </span>
        </div>
      </div>
    </div>
  );
};


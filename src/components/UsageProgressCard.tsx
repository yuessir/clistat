"use client";

import React from "react";
import { ApiStatsData } from "@/types/stats";
import { Language, translations } from "@/lib/i18n";
import { formatCurrency } from "@/lib/utils";
import { Wallet, Gauge, CalendarClock, ShieldAlert } from "lucide-react";

interface UsageProgressCardProps {
  data: ApiStatsData;
  currentLang: Language;
}

export const UsageProgressCard: React.FC<UsageProgressCardProps> = ({
  data,
  currentLang,
}) => {
  const t = translations[currentLang];

  const totalCost = data.limits?.currentTotalCost ?? data.usage?.total?.cost ?? 0;
  const limitCost = data.limits?.totalCostLimit ?? 0;
  
  const hasLimit = limitCost > 0;
  const remainingCost = hasLimit ? Math.max(0, limitCost - totalCost) : 0;
  const percentUsed = hasLimit
    ? Math.min(100, Math.max(0, (totalCost / limitCost) * 100))
    : 0;

  // Day & Weekly info
  const dailyLimit = data.limits?.dailyCostLimit ?? 0;
  const dailySpent = data.limits?.currentDailyCost ?? 0;
  const weeklyOpusLimit = data.limits?.weeklyOpusCostLimit ?? 0;
  const weeklyOpusCost = data.limits?.weeklyOpusCost ?? 0;

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                {t.budgetUsage}
              </h3>
              <p className="text-xs text-zinc-400">
                {hasLimit
                  ? `${t.budgetLimitPrefix}${formatCurrency(limitCost)}`
                  : t.noBudgetLimit}
              </p>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs text-zinc-400">{t.remainingBudget}</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
              {hasLimit ? formatCurrency(remainingCost) : "∞"}
            </div>
          </div>
        </div>

        {/* Progress Display */}
        <div className="mt-5 space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-xs text-zinc-400">{t.usedRatio}</span>
            <span className="text-sm font-mono font-bold text-amber-400">
              {hasLimit ? `${percentUsed.toFixed(1)}%` : t.unlimitedParen}
            </span>
          </div>

          {/* Bar */}
          <div className="w-full h-3 bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-white/[0.06]">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                percentUsed > 90
                  ? "bg-gradient-to-r from-amber-500 to-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.6)]"
                  : "bg-gradient-to-r from-amber-500 to-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]"
              }`}
              style={{ width: `${hasLimit ? percentUsed : 100}%` }}
            />
          </div>

          {/* Spent vs Total numbers */}
          <div className="flex justify-between items-center text-xs text-zinc-400 pt-1 font-mono">
            <div>
              <span className="text-zinc-500">{t.totalSpent}: </span>
              <span className="text-white font-semibold">
                {formatCurrency(totalCost, 4)}
              </span>
            </div>
            <div>
              <span className="text-zinc-500">{t.totalLimit}: </span>
              <span className="text-white font-semibold">
                {hasLimit ? formatCurrency(limitCost) : t.noLimit}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Limits Grid */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3">
        {/* Daily limit */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <div className="text-[11px] text-zinc-400 flex items-center gap-1">
            <Gauge className="w-3 h-3 text-amber-400" />
            <span>{t.dailyCostLimit}</span>
          </div>
          <div className="mt-1 text-sm font-mono font-medium text-white">
            {dailyLimit > 0 ? formatCurrency(dailyLimit) : t.unlimited}
          </div>
          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
            {t.dailySpentPrefix}{formatCurrency(dailySpent)}
          </div>
        </div>

        {/* Weekly Opus limit */}
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <div className="text-[11px] text-zinc-400 flex items-center gap-1">
            <CalendarClock className="w-3 h-3 text-purple-400" />
            <span>{t.weeklyOpusLimit}</span>
          </div>
          <div className="mt-1 text-sm font-mono font-medium text-white">
            {weeklyOpusLimit > 0 ? formatCurrency(weeklyOpusLimit) : t.unlimited}
          </div>
          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
            {t.weeklySpentPrefix}{formatCurrency(weeklyOpusCost)}
          </div>
        </div>

        {/* Concurrency & Window */}
        <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
          <div className="text-[11px] text-zinc-400 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-sky-400" />
            <span>{t.concurrencyLimit}</span>
          </div>
          <div className="mt-1 text-sm font-mono font-medium text-white">
            {data.limits?.concurrencyLimit > 0
              ? `${data.limits.concurrencyLimit} req/s`
              : t.unlimited}
          </div>
          <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
            {t.concurrencyReady}
          </div>
        </div>
      </div>
    </div>
  );
};

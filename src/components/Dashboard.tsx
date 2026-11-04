"use client";

import React from "react";
import { ApiStatsData } from "@/types/stats";
import { Language, translations } from "@/lib/i18n";
import {
  formatCurrency,
  formatCompactNumber,
  formatNumber,
  maskApiKey,
} from "@/lib/utils";
import { StatCard } from "./StatCard";
import { UsageProgressCard } from "./UsageProgressCard";
import { TokenDistributionCard } from "./TokenDistributionCard";
import { AccountInfoCard } from "./AccountInfoCard";
import { RestrictionsCard } from "./RestrictionsCard";
import {
  DollarSign,
  TrendingDown,
  Layers,
  Zap,
  RotateCw,
  KeyRound,
} from "lucide-react";

interface DashboardProps {
  data: ApiStatsData;
  apiId?: string;
  apiKey: string;
  currentLang: Language;
  onRefresh: () => void;
  isRefreshing: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({
  data,
  apiId,
  apiKey,
  currentLang,
  onRefresh,
  isRefreshing,
}) => {
  const t = translations[currentLang];

  const totalCost = data.limits?.currentTotalCost ?? data.usage?.total?.cost ?? 0;
  const totalLimit = data.limits?.totalCostLimit ?? 0;
  const remainingCost = totalLimit > 0 ? Math.max(0, totalLimit - totalCost) : 0;
  const percentUsed =
    totalLimit > 0 ? ((totalCost / totalLimit) * 100).toFixed(1) : "0";

  const totalTokens =
    data.usage?.total?.allTokens || data.usage?.total?.tokens || 0;
  const requests = data.usage?.total?.requests || 0;
  const avgCostPerReq = requests > 0 ? totalCost / requests : 0;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* Top Bar: Key Identity & Quick Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white text-sm sm:text-base">
                {data.name || "API Access Key"}
              </span>
              <span className="font-mono text-xs text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                {maskApiKey(apiKey)}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              即時使用量與額度配額監控
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all cursor-pointer disabled:opacity-50"
          >
            <RotateCw
              className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-amber-400" : ""}`}
            />
            <span>{t.refreshButton}</span>
          </button>
        </div>
      </div>

      {/* Row 1: 4 Key Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Spent */}
        <StatCard
          title={t.totalSpent}
          value={formatCurrency(totalCost)}
          subtitle={`總額度: ${totalLimit > 0 ? formatCurrency(totalLimit) : "無上限"}`}
          icon={DollarSign}
          badge={{
            text: `已用 ${percentUsed}%`,
            variant: Number(percentUsed) > 85 ? "rose" : "amber",
          }}
          accentColor="amber"
        />

        {/* Remaining Budget */}
        <StatCard
          title={t.remainingBudget}
          value={totalLimit > 0 ? formatCurrency(remainingCost) : "無上限"}
          subtitle="可繼續消耗額度"
          icon={TrendingDown}
          badge={{
            text: data.isActive ? "額度充裕" : "暫停",
            variant: "emerald",
          }}
          accentColor="emerald"
        />

        {/* Total Tokens */}
        <StatCard
          title={t.totalTokens}
          value={formatCompactNumber(totalTokens)}
          subtitle={`精密計數: ${formatNumber(totalTokens)}`}
          icon={Layers}
          badge={{
            text: `${formatNumber(requests)} 請求`,
            variant: "blue",
          }}
          accentColor="blue"
        />

        {/* Avg Cost per Request & Status */}
        <StatCard
          title={t.avgCostPerReq}
          value={formatCurrency(avgCostPerReq, 4)}
          subtitle={data.isActive ? "金鑰狀態正常" : "金鑰已停用"}
          icon={Zap}
          badge={{
            text: data.isActive ? "ACTIVE" : "INACTIVE",
            variant: data.isActive ? "emerald" : "rose",
          }}
          accentColor={data.isActive ? "emerald" : "amber"}
        />
      </div>

      {/* Row 2: Token Breakdown (left) & Usage Progress (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <TokenDistributionCard
            usage={data.usage?.total}
            currentLang={currentLang}
          />
        </div>
        <div className="lg:col-span-5">
          <UsageProgressCard data={data} currentLang={currentLang} />
        </div>
      </div>

      {/* Row 3: Account info & Restrictions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <AccountInfoCard
            data={data}
            apiId={apiId}
            currentLang={currentLang}
          />
        </div>
        <div className="lg:col-span-6">
          <RestrictionsCard
            restrictions={data.restrictions}
            currentLang={currentLang}
          />
        </div>
      </div>
    </div>
  );
};

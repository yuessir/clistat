"use client";

import React, { useState } from "react";
import { ApiStatsData } from "@/types/stats";
import { Language, translations } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";
import {
  Fingerprint,
  Calendar,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Server,
  Cpu,
  Sparkles,
} from "lucide-react";

interface AccountInfoCardProps {
  data: ApiStatsData;
  apiId?: string;
  currentLang: Language;
}

export const AccountInfoCard: React.FC<AccountInfoCardProps> = ({
  data,
  apiId,
  currentLang,
}) => {
  const t = translations[currentLang];
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const currentId = apiId || data.id;

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Fingerprint className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              {t.accountInfoTitle}
            </h3>
            <p className="text-xs text-zinc-400">金鑰有效性與專屬服務節點狀態</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {data.isActive ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.activeStatus}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
              <XCircle className="w-3.5 h-3.5" />
              <span>{t.inactiveStatus}</span>
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 text-xs">
        {/* Left Column: Key metadata */}
        <div className="space-y-3.5">
          {/* Key Name (description is removed per user request) */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="text-[11px] text-zinc-500">{t.keyName}</div>
            <div className="text-sm font-semibold text-white mt-0.5">
              {data.name || "API Access Key"}
            </div>
          </div>

          {/* API ID */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">{t.apiId}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(currentId, "id")}
                className="text-[11px] text-zinc-400 hover:text-amber-400 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedField === "id" ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">已複製</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>複製</span>
                  </>
                )}
              </button>
            </div>
            <div className="font-mono text-zinc-300 text-xs mt-1 select-all break-all">
              {currentId}
            </div>
          </div>

          {/* Timestamps */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] grid grid-cols-2 gap-2">
            <div>
              <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{t.createdAt}</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-300 mt-1">
                {formatDate(data.createdAt)}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{t.expiresAt}</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-300 mt-1">
                {formatDate(data.expiresAt)}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Gateway Provider Group Accounts */}
        <div className="space-y-3.5">
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            底層服務節點群組 (Service Groups)
          </div>

          {/* Claude Account */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.claudeAccount}</span>
              </span>
              {data.accounts?.claudeAccountId && (
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(data.accounts.claudeAccountId!, "claude")
                  }
                  className="text-zinc-500 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {copiedField === "claude" ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              )}
            </div>
            <div className="font-mono text-xs text-zinc-200 mt-1 break-all">
              {data.accounts?.claudeAccountId || t.notBound}
            </div>
          </div>

          {/* OpenAI Account */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.openaiAccount}</span>
              </span>
              {data.accounts?.openaiAccountId && (
                <button
                  type="button"
                  onClick={() =>
                    copyToClipboard(data.accounts.openaiAccountId!, "openai")
                  }
                  className="text-zinc-500 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  {copiedField === "openai" ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              )}
            </div>
            <div className="font-mono text-xs text-zinc-200 mt-1 break-all">
              {data.accounts?.openaiAccountId || t.notBound}
            </div>
          </div>

          {/* Gemini Account */}
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.geminiAccount}</span>
              </span>
            </div>
            <div className="font-mono text-xs text-zinc-500 mt-1">
              {data.accounts?.geminiAccountId || t.notBound}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

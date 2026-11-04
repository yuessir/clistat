"use client";

import React, { useState } from "react";
import { ApiKeyRestrictions } from "@/types/stats";
import { Language, translations } from "@/lib/i18n";
import { ShieldCheck, ShieldAlert, Monitor, Box, Search } from "lucide-react";

interface RestrictionsCardProps {
  restrictions: ApiKeyRestrictions;
  currentLang: Language;
}

export const RestrictionsCard: React.FC<RestrictionsCardProps> = ({
  restrictions,
  currentLang,
}) => {
  const t = translations[currentLang];
  const [filterQuery, setFilterQuery] = useState("");

  const models = restrictions?.restrictedModels || [];
  const filteredModels = models.filter((m) =>
    m.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">
              {t.restrictionsTitle}
            </h3>
            <p className="text-xs text-zinc-400">
              {t.restrictionsSubtitle}
            </p>
          </div>
        </div>

        {/* Status Pills */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              restrictions.enableModelRestriction
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            }`}
          >
            <span>
              {restrictions.enableModelRestriction
                ? t.modelRestrictionActive
                : t.modelRestrictionDisabled}
            </span>
          </span>

          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              restrictions.enableClientRestriction
                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
            }`}
          >
            <span>
              {restrictions.enableClientRestriction
                ? t.clientRestrictionActive
                : t.clientRestrictionDisabled}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        {/* Restricted Models Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
              <Box className="w-4 h-4 text-amber-400" />
              <span>{t.restrictedModelsTitle}</span>
              <span className="text-[11px] font-mono text-zinc-500 ml-1">
                ({models.length} {t.modelsRestrictedCount})
              </span>
            </div>

            {models.length > 5 && (
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2 text-zinc-500" />
                <input
                  type="text"
                  placeholder={t.searchModelPlaceholder}
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  className="bg-white/[0.03] border border-white/[0.08] rounded-lg pl-8 pr-3 py-1 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/50"
                />
              </div>
            )}
          </div>

          {models.length > 0 ? (
            <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto p-3 rounded-xl bg-black/30 border border-white/[0.04]">
              {filteredModels.map((model) => (
                <span
                  key={model}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-700/60 hover:border-amber-500/40 hover:text-amber-300 transition-colors"
                >
                  {model}
                </span>
              ))}
              {filteredModels.length === 0 && (
                <span className="text-xs text-zinc-500 p-2">{t.noMatchingModels}</span>
              )}
            </div>
          ) : (
            <div className="p-3 text-xs text-emerald-400 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              {t.noRestrictedModels}
            </div>
          )}
        </div>

        {/* Client Restrictions Section */}
        <div className="pt-4 border-t border-white/[0.06]">
          <div className="text-xs font-medium text-zinc-300 flex items-center gap-1.5 mb-2">
            <Monitor className="w-4 h-4 text-sky-400" />
            <span>{t.allowedClientsTitle}</span>
          </div>

          {restrictions.enableClientRestriction &&
          restrictions.allowedClients &&
          restrictions.allowedClients.length > 0 ? (
            <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-black/30 border border-white/[0.04]">
              {restrictions.allowedClients.map((client) => (
                <span
                  key={client}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-sky-950/40 text-sky-300 border border-sky-800/40"
                >
                  {client}
                </span>
              ))}
            </div>
          ) : (
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.allClientsAllowed}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

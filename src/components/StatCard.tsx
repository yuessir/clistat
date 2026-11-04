"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  badge?: {
    text: string;
    variant: "emerald" | "amber" | "rose" | "blue" | "zinc";
  };
  accentColor?: "amber" | "emerald" | "blue" | "purple";
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  badge,
  accentColor = "amber",
}) => {
  const getBadgeClass = (variant: string) => {
    switch (variant) {
      case "emerald":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "amber":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "rose":
        return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      case "blue":
        return "bg-sky-500/10 text-sky-400 border-sky-500/20";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  const getIconGlow = (color: string) => {
    switch (color) {
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "blue":
        return "text-sky-400 bg-sky-500/10 border-sky-500/20";
      case "purple":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      default:
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    }
  };

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-start justify-between gap-3">
        <span className="text-xs font-medium text-zinc-400 tracking-wide">
          {title}
        </span>
        <div className={`p-2 rounded-xl border ${getIconGlow(accentColor)}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>

      <div className="mt-4">
        <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white flex items-baseline gap-2">
          <span>{value}</span>
        </div>

        {(subtitle || badge) && (
          <div className="mt-2 flex items-center justify-between gap-2 text-xs">
            {subtitle && <span className="text-zinc-500">{subtitle}</span>}
            {badge && (
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-medium border ${getBadgeClass(
                  badge.variant
                )}`}
              >
                {badge.text}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


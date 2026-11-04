import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Language } from "./i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number | undefined | null): string {
  if (num === undefined || num === null || isNaN(num)) return "0";
  return new Intl.NumberFormat("en-US").format(num);
}

export function formatCompactNumber(num: number | undefined | null): string {
  if (num === undefined || num === null || isNaN(num)) return "0";
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2).replace(/\.00$/, "") + "B";
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2).replace(/\.00$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

export function formatCurrency(amount: number | undefined | null, digits: number = 2): string {
  if (amount === undefined || amount === null || isNaN(amount)) return "$0.00";
  return `$${amount.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}`;
}

export function formatDate(dateString: string | undefined | null, lang: Language = "en"): string {
  if (!dateString) {
    if (lang === "en") return "Never expires / Unset";
    if (lang === "zh-CN") return "无 (永不过期 / 未设置)";
    return "無 (永不過期 / 未設定)";
  }
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const locale = lang === "en" ? "en-US" : lang === "zh-CN" ? "zh-CN" : "zh-TW";
    return date.toLocaleString(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  } catch {
    return dateString;
  }
}

export function maskApiKey(key: string): string {
  if (!key) return "";
  if (key.length <= 12) return key;
  return `${key.slice(0, 7)}...${key.slice(-6)}`;
}

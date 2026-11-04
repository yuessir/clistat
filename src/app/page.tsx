"use client";

import React, { useState, useEffect } from "react";
import { Language, translations } from "@/lib/i18n";
import { ApiStatsData } from "@/types/stats";
import { Header } from "@/components/Header";
import { KeyInputForm } from "@/components/KeyInputForm";
import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  AlertCircle,
  BarChart3,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function HomePage() {
  // Default to English per user request
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [statsData, setStatsData] = useState<ApiStatsData | null>(null);
  const [apiId, setApiId] = useState<string>("");
  const [currentKey, setCurrentKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Load user's saved language preference if any, otherwise default to "en"
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("preferred_lang") as Language;
      if (savedLang && (savedLang === "en" || savedLang === "zh-TW" || savedLang === "zh-CN")) {
        setCurrentLang(savedLang);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // ignore
    }
  };

  const t = translations[currentLang];

  const handleQuery = async (apiKey: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    setCurrentKey(apiKey);

    try {
      const res = await fetch("/api/stats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ apiKey }),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setErrorMessage(
          json.error || json.message || t.keyNotFound
        );
        setStatsData(null);
      } else {
        setStatsData(json.data);
        setApiId(json.apiId || json.data?.id || "");
      }
    } catch {
      setErrorMessage(t.networkError);
      setStatsData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    if (currentKey) {
      handleQuery(currentKey);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Header with Lang switch */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            <span className="block">{t.siteTitle}</span>
            <span className="block text-gradient-amber text-2xl sm:text-3xl mt-2 font-normal">
              {t.siteSubtitle}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.tagline}
          </p>
        </div>

        {/* Key Input Section */}
        <KeyInputForm
          currentLang={currentLang}
          onQuery={handleQuery}
          isLoading={isLoading}
        />

        {/* Error Alert */}
        {errorMessage && (
          <div className="max-w-4xl mx-auto p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-start gap-3 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="flex-1">
              <span className="font-semibold block">{t.errorTitle}</span>
              <span className="text-rose-300 text-xs sm:text-sm">{errorMessage}</span>
            </div>
          </div>
        )}

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
            <div className="h-16 bg-white/[0.03] rounded-2xl border border-white/[0.06]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-white/[0.03] rounded-2xl border border-white/[0.06]"
                />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 h-64 bg-white/[0.03] rounded-2xl border border-white/[0.06]" />
              <div className="lg:col-span-5 h-64 bg-white/[0.03] rounded-2xl border border-white/[0.06]" />
            </div>
          </div>
        )}

        {/* Dashboard Display */}
        {!isLoading && statsData && (
          <Dashboard
            data={statsData}
            apiId={apiId}
            apiKey={currentKey}
            currentLang={currentLang}
            onRefresh={handleRefresh}
            isRefreshing={isLoading}
          />
        )}

        {/* Empty State / Welcome Guide when no stats yet */}
        {!isLoading && !statsData && !errorMessage && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            <div className="glass-panel rounded-2xl p-5 border border-white/[0.06]">
              <div className="p-2.5 w-fit rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-3">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-sm">
                {t.feature1Title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                {t.feature1Desc}
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-white/[0.06]">
              <div className="p-2.5 w-fit rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-sm">
                {t.feature2Title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                {t.feature2Desc}
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-5 border border-white/[0.06]">
              <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-white text-sm">
                {t.feature3Title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                {t.feature3Desc}
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}

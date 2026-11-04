"use client";

import React, { useState, useEffect } from "react";
import { Language, translations } from "@/lib/i18n";
import { Search, Key, X, Shield, AlertCircle, Loader2 } from "lucide-react";

interface KeyInputFormProps {
  currentLang: Language;
  onQuery: (apiKey: string) => void;
  isLoading: boolean;
}

const STORAGE_KEY = "api_saved_key";
const STORAGE_REMEMBER = "api_remember_key";

export const KeyInputForm: React.FC<KeyInputFormProps> = ({
  currentLang,
  onQuery,
  isLoading,
}) => {
  const t = translations[currentLang];
  const [apiKey, setApiKey] = useState("");
  const [remember, setRemember] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Load saved key if remembered
  useEffect(() => {
    try {
      const shouldRemember = localStorage.getItem(STORAGE_REMEMBER) === "true";
      setRemember(shouldRemember);
      if (shouldRemember) {
        const savedKey = localStorage.getItem(STORAGE_KEY);
        if (savedKey) {
          setApiKey(savedKey);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleInputChange = (val: string) => {
    setApiKey(val);
    if (validationError) setValidationError(null);
  };

  const handleRememberToggle = (checked: boolean) => {
    setRemember(checked);
    try {
      localStorage.setItem(STORAGE_REMEMBER, checked ? "true" : "false");
      if (checked && apiKey.trim()) {
        localStorage.setItem(STORAGE_KEY, apiKey.trim());
      } else if (!checked) {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanKey = apiKey.trim();

    if (!cleanKey) {
      setValidationError("請輸入 API Key");
      return;
    }

    if (!cleanKey.startsWith("cr_")) {
      setValidationError(t.invalidKeyPrefix);
      return;
    }

    setValidationError(null);

    // Save if remember is enabled
    try {
      if (remember) {
        localStorage.setItem(STORAGE_KEY, cleanKey);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }

    onQuery(cleanKey);
  };

  const clearKey = () => {
    setApiKey("");
    setValidationError(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-panel rounded-2xl p-4 sm:p-7 shadow-card relative overflow-hidden">
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-400/90 mb-2 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5" />
                API Key (cr_...)
              </span>
            </label>

            {/* Input field wrapper */}
            <div className="relative flex items-center">
              <div className="absolute left-3.5 text-zinc-500 pointer-events-none">
                <Search className="w-4 h-4" />
              </div>

              <input
                type="text"
                value={apiKey}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={t.inputPlaceholder}
                className={`w-full bg-[#121215]/90 border text-zinc-100 placeholder-zinc-500 text-sm font-mono rounded-xl pl-10 pr-24 py-3.5 focus:outline-none transition-all ${
                  validationError
                    ? "border-rose-500/60 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30"
                    : "border-white/[0.1] hover:border-white/[0.18] focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/20"
                }`}
              />

              {/* Action buttons inside input */}
              <div className="absolute right-2 flex items-center gap-1">
                {apiKey && (
                  <button
                    type="button"
                    onClick={clearKey}
                    className="p-1.5 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer"
                    title={t.clearButton}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-medium text-xs sm:text-sm px-4 py-2 rounded-lg shadow-glow hover:shadow-glow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span className="hidden sm:inline">{t.querying}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.queryButton}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {validationError && (
              <div className="flex items-center gap-1.5 mt-2 text-rose-400 text-xs">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{validationError}</span>
              </div>
            )}
          </div>

          {/* Sub options: Remember Key & Privacy Note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1 text-xs text-zinc-400 border-t border-white/[0.04]">
            <label className="flex items-center gap-2 cursor-pointer select-none hover:text-zinc-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => handleRememberToggle(e.target.checked)}
                className="w-3.5 h-3.5 rounded bg-zinc-900 border-zinc-700 text-amber-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
              />
              <span>{t.rememberKey}</span>
            </label>

            <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
              <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>{t.privacyNotice}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

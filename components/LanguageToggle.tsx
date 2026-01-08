"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => setLanguage("it")}
        className={`text-sm font-medium transition-colors ${
          language === "it"
            ? "text-teal-300"
            : "text-slate-500 hover:text-slate-300"
        }`}
        aria-label="Italiano"
      >
        🇮🇹 IT
      </button>
      <span className="text-slate-600">/</span>
      <button
        onClick={() => setLanguage("en")}
        className={`text-sm font-medium transition-colors ${
          language === "en"
            ? "text-teal-300"
            : "text-slate-500 hover:text-slate-300"
        }`}
        aria-label="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );
}

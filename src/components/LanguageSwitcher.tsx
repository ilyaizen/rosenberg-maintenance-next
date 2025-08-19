"use client";

import React from "react";
import { useI18n } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded ${locale === "en" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("he")}
        className={`px-2 py-1 rounded ${locale === "he" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        aria-pressed={locale === "he"}
      >
        HE
      </button>
    </div>
  );
}

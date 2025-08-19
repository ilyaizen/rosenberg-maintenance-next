"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import he from "@/locales/he.json";

type Locale = "en" | "he";

type I18nContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
};

const dictionaries: Record<Locale, Record<string, unknown>> = {
  en: en as unknown as Record<string, unknown>,
  he: he as unknown as Record<string, unknown>,
};

function getByKey(obj: Record<string, unknown>, key: string): string | undefined {
  return key.split(".").reduce((acc: unknown, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj) as string | undefined;
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const stored = localStorage.getItem("locale");
      if (stored === "he") return "he";
    } catch {
      /* ignore */
    }
    return "en";
  });

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch {
      /* ignore */
    }
  };

  const dict = useMemo(() => dictionaries[locale], [locale]);

  const t = (key: string) => {
    const found = getByKey(dict, key);
    if (typeof found === "string") return found;
    return key;
  };

  const dir = locale === "he" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>{children}</I18nContext.Provider>
  );
}

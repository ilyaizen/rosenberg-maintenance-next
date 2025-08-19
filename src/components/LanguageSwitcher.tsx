"use client";

import React from "react";
import {useLocale} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(nextLocale: "en" | "he") {
    // Keep the same pathname and switch locale prefix
    router.replace({pathname}, {locale: nextLocale});
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchTo("en")}
        className={`px-2 py-1 rounded ${locale === "en" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => switchTo("he")}
        className={`px-2 py-1 rounded ${locale === "he" ? "bg-slate-800 text-white" : "bg-slate-100"}`}
        aria-pressed={locale === "he"}
      >
        HE
      </button>
    </div>
  );
}

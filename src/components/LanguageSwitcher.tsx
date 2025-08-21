"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import React from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(nextLocale: "en" | "he") {
    // Keep the same pathname and switch locale prefix
    router.replace({ pathname }, { locale: nextLocale });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchTo("en")}
        className={`rounded px-2 py-1 ${locale === "en" ? "bg-foreground text-background" : "bg-accent text-accent-foreground"}`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        onClick={() => switchTo("he")}
        className={`rounded px-2 py-1 ${locale === "he" ? "bg-foreground text-background" : "bg-accent text-accent-foreground"}`}
        aria-pressed={locale === "he"}
      >
        HE
      </button>
    </div>
  );
}

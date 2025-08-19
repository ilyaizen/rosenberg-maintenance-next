"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield } from "lucide-react";
import {useLocale, useTranslations} from "next-intl";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const dir: "ltr" | "rtl" = locale === "he" ? "rtl" : "ltr";

  return (
    <section
  className="relative flex min-h-[800px] items-center"
      style={{
    backgroundImage: "url(/roof-coating_cr.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    // Flip the background image in RTL
    transform: dir === "rtl" ? "scaleX(-1)" : undefined,
      }}
    >
  {/* Direction-aware gradient via CSS class toggled by [dir] */}
  <div className="pointer-events-none absolute inset-0 hero-overlay-gradient" />

  {/* Cancel out the parent scaleX for content so text/icons are not mirrored */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }}>
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">{t("hero.title")}</h1>
          <div className="mb-8 space-y-2">
            <p className="text-lg">{t("hero.p1")}</p>
            <p className="text-lg">{t("hero.p2")}</p>
          </div>
          <Button size="lg" className="cta-btn cta-lg text-lg hover:opacity-90 h-16 w-60">
            {t("hero.cta")}<ArrowRight className={`${dir === "rtl" ? "mr-2" : "ml-2"} h-5 w-5`} style={{ transform: dir === "rtl" ? "rotate(180deg)" : undefined }} />
          </Button>

          <div className="mt-6">
            <Card className="max-w-md rounded-lg border bg-white border-slate-200 p-4 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-50">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{t("card.premiumTitle")}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{t("card.premiumDesc")}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

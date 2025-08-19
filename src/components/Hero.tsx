"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield } from "lucide-react";
import { useI18n } from "./LanguageProvider";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      className="relative flex min-h-[800px] items-center"
      style={{
        backgroundImage: "url(/roof-coating_cr.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
        }}
      ></div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">{t("hero.title")}</h1>
          <div className="mb-8 space-y-2">
            <p className="text-lg">{t("hero.p1")}</p>
            <p className="text-lg">{t("hero.p2")}</p>
          </div>
          <Button size="lg" className="cta-btn cta-lg text-lg hover:opacity-90 h-16 w-60">
            {t("hero.cta")}<ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-6">
            <Card className="max-w-md rounded-lg border bg-white border-slate-200 p-4 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100">
              <div className="flex items-start space-x-3">
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

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ArrowRight, Shield } from "lucide-react";
import { ArrowRight } from "lucide-react";

import {useLocale, useTranslations} from "next-intl";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const dir: "ltr" | "rtl" = locale === "he" ? "rtl" : "ltr";

  return (
    <section
  className="relative flex min-h-[600px] items-center w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
      style={{
    backgroundImage: "url(/roof-coating_cr.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    // Flip the background image in RTL
    transform: dir === "rtl" ? "scaleX(-1)" : undefined,
      }}
    >
  {/* Uniform 50% site off-white overlay over the background image */}
  <div className="pointer-events-none absolute inset-0 z-0" style={{ backgroundColor: "oklch(0.9953 0.0119 101.47 / 0.5)" }} aria-hidden="true" />
  {/* Direction-aware gradient via CSS class toggled by [dir] */}
  {/* Content-width gradient overlay (max-w-7xl), with a solid white side and fade to transparent. */}
  <div
    className={`pointer-events-none absolute inset-y-0 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 ${dir === "rtl" ? "scale-x-[-1]" : ""}`}
    aria-hidden="true"
  >
    <div
      className="absolute inset-0"
      style={{
    // Off-white side near content (LTR: left, RTL: right), then fade to transparent
        backgroundImage:
          dir === "rtl"
      ? "linear-gradient(to left, oklch(0.9953 0.0119 101.47) 0%, oklch(0.9953 0.0119 101.47) 12%, oklch(0.9953 0.0119 101.47 / 0.7) 28%, oklch(0.9953 0.0119 101.47 / 0) 65%)"
      : "linear-gradient(to right, oklch(0.9953 0.0119 101.47) 0%, oklch(0.9953 0.0119 101.47) 12%, oklch(0.9953 0.0119 101.47 / 0.7) 28%, oklch(0.9953 0.0119 101.47 / 0) 65%)",
      }}
    />

    {/* Side-fill: extend solid white from the container edge to the viewport edge on the white side */}
    <div
      className={`pointer-events-none absolute inset-y-0 ${dir === "rtl" ? "left-full" : "right-full"} w-[50vw] z-10 hidden xl:block`}
      style={{ backgroundColor: "oklch(0.9953 0.0119 101.47)" }}
    />
  </div>

  {/* Faded watermark logo confined to the max-w-7xl container (RTL only). */}

  {/* Cancel out the parent scaleX for content so text/icons are not mirrored */}
  <div className="relative z-20 opacity-90 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }}>
    {dir === "rtl" && (
          <div
      className="pointer-events-none absolute inset-y-0 left-0 z-0 flex items-center pl-4 sm:pl-8"
            aria-hidden="true"
          >
            {/* Wrapper to position the radial gradient behind the logo at the same size */}
            <div className="relative">
              {/* Radial gradient glow: off-white center to transparent edges */}
              <div
                className="absolute inset-0 blur-xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.9953 0.0119 101.47) 0%, oklch(0.9953 0.0119 101.47 / 0.85) 50%, oklch(0.9953 0.0119 101.47 / 0) 100%)",
                }}
                aria-hidden="true"
              />
              <Image
                style={{ filter: "drop-shadow(1px 1px 1px rgba(53, 89, 106, .8)" }}
                src="/rosenberg-maintenance-svg-full.he.svg"
                alt="rosenberg-maintenance-logo"
                width={1200}
                height={1200}
                priority={false}
                className="relative z-10 select-none h-40 sm:h-56 md:h-64 lg:h-80 xl:h-[28rem] w-auto"
                sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, (max-width: 1280px) 20rem, 28rem"
                draggable={false}
              />
            </div>
          </div>
        )}
  <div className="relative z-10 max-w-2xl">
          <h1 className="mb-6 text-4xl leading-tight font-black md:text-5xl lg:text-6xl">{t("hero.title")}</h1>
          <div className="mb-8 space-y-2">
            <p className="text-lg">{t("hero.p1")}</p>
            <p className="text-lg">{t("hero.p2")}</p>
          </div>
          <Button size="lg" className="cta-btn cta-lg text-xl hover:opacity-90 h-16 w-60">
            {t("hero.cta")}<ArrowRight className={`${dir === "rtl" ? "mr-2" : "ml-2"} h-6 w-6`} style={{ transform: dir === "rtl" ? "rotate(180deg)" : undefined }} />
          </Button>

          {/* <div className="mt-6">
            <Card className="max-w-md rounded-lg border border-slate-200 p-4 text-slate-900 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-100" style={{ backgroundColor: "oklch(0.9953 0.0119 101.47)" }}>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

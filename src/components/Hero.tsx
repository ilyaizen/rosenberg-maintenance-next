"use client";

// import { Card } from "@/components/ui/card";
// import { ArrowRight, Shield } from "lucide-react";
import CTAButtons from "@/components/CTAButtons";
import { useTheme } from "@/components/Providers";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Hero() {
  const t = useTranslations();
  const locale = useLocale();
  const dir: "ltr" | "rtl" = locale === "he" ? "rtl" : "ltr";
  const { theme } = useTheme();
  const PHONE_DISPLAY = "055-920-6313";
  const PHONE_TEL = "+972559206313";
  // Choose logo based on locale; use white variant for dark theme
  const logoSrc =
    locale === "he"
      ? theme === "dark"
        ? "/rosenberg-maintenance-svg-full.he.white.svg"
        : "/rosenberg-maintenance-svg-full.he.svg"
      : theme === "dark"
        ? "/rosenberg-maintenance-svg-full.en.white.svg"
        : "/rosenberg-maintenance-svg-full.en.svg";

  return (
    <section
  className="relative mr-[calc(50%-50vw)] ml-[calc(50%-50vw)] flex min-h-[600px] items-center overflow-hidden"
      style={{
        backgroundImage: "url(/roof-coating_cr.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // Flip the background image in RTL
        transform: dir === "rtl" ? "scaleX(-1)" : undefined,
      }}
    >
      {/* Uniform 50% site background overlay (tokenized) */}
      <div className="bg-background/25 pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      {/* Direction-aware gradient via CSS class toggled by [dir] */}
      {/* Content-width gradient overlay (max-w-7xl), with a solid white side and fade to transparent. */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-1/2 z-10 w-full max-w-7xl -translate-x-1/2 ${dir === "rtl" ? "scale-x-[-1]" : ""}`}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            // Side near content uses theme background color, fading to transparent
            backgroundImage:
              dir === "rtl"
                ? "linear-gradient(to left, var(--background) 0%, var(--background) 12%, color-mix(in oklab, var(--background) 70%, transparent) 28%, transparent 65%)"
                : "linear-gradient(to right, var(--background) 0%, var(--background) 12%, color-mix(in oklab, var(--background) 70%, transparent) 28%, transparent 65%)",
          }}
        />

        {/* Side-fill: extend solid white from the container edge to the viewport edge on the white side */}
        <div
          className={`pointer-events-none absolute inset-y-0 ${dir === "rtl" ? "left-full" : "right-full"} z-10 hidden w-[50vw] xl:block`}
          style={{ backgroundColor: "var(--background)" }}
        />
      </div>

      {/* Faded watermark logo confined to the max-w-7xl container (RTL only). */}

      {/* Cancel out the parent scaleX for content so text/icons are not mirrored */}
      <div
        className="relative z-20 mx-auto w-full max-w-7xl px-4 opacity-90 sm:px-6 lg:px-8"
        style={{ transform: dir === "rtl" ? "scaleX(-1)" : undefined }}
      >
        {/* Faded watermark logo for both directions; positioned per locale */}
        <div
          className={`pointer-events-none absolute inset-y-0 ${dir === "rtl" ? "left-0 pl-4 sm:pl-8" : "right-0 pr-4 sm:pr-8"} z-0 flex items-center`}
          aria-hidden="true"
        >
          {/* Wrapper to position the radial gradient behind the logo at the same size */}
          <div className="relative">
            {/* Radial gradient glow: theme background center to transparent edges */}
            <div
              className="absolute inset-0 blur-xl"
              style={{
                background:
                  "radial-gradient(circle, var(--background) 0%, color-mix(in oklab, var(--background) 85%, transparent) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            <Image
              style={{ filter: "drop-shadow(1px 1px 1px rgba(53, 89, 106, .8))" }}
              src={logoSrc}
              alt="rosenberg-maintenance-logo"
              width={1200}
              height={1200}
              priority={false}
              className="relative z-10 h-40 w-auto select-none sm:h-56 md:h-64 lg:h-80 xl:h-[28rem]"
              sizes="(max-width: 640px) 10rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, (max-width: 1280px) 20rem, 28rem"
              draggable={false}
            />
          </div>
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="mb-6 text-3xl leading-tight font-black md:text-4xl lg:text-5xl">{t("hero.title")}</h1>
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 space-y-2">
              <p className="text-lg font-bold">{t("hero.p1")}</p>
              <p className="text-lg font-medium">{t("hero.p2")}</p>
            </div>
            <CTAButtons phoneDisplay={PHONE_DISPLAY} phoneTel={PHONE_TEL} />
          </div>

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

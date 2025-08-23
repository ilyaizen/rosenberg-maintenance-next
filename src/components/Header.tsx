"use client";

import { useTheme } from "@/components/Providers";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useCallback } from "react";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const dir = locale === "he" ? "rtl" : "ltr";
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const PHONE_DISPLAY = "055-920-6313";
  const PHONE_TEL = "+972559206313";
  const logoSrc = isDark ? "/rosenberg-maintenance-svg-white.svg" : "/rosenberg-maintenance-svg.svg";

  const handleScrollTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <header className="bg-background/70 border-border/50 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <a
            href="#"
            onClick={handleScrollTop}
            className="focus-visible:ring-ring flex items-center rounded-md focus:outline-none focus-visible:ring-2"
          >
            <Image src={logoSrc} alt={t("companyName")} className="h-12 w-auto" width={48} height={48} />
            {/* margin flips in RTL */}
            <span className={`${dir === "rtl" ? "mr-2" : "ml-2"} text-lg font-black`}>{t("companyName")}</span>
          </a>

          {/* Primary navigation (desktop) - centered */}
          <nav
            aria-label={t("footer.quickLinks")}
            className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            <ul className="text-primary/80 flex items-center gap-6 text-sm font-medium">
              <li>
                <a href="#process" className="hover:text-foreground transition-colors">
                  {t("footer.process")}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-foreground transition-colors">
                  {t("footer.gallery")}
                </a>
              </li>
            </ul>
          </nav>

          {/* Phone number */}
          {/* use gap instead of space-x-* so it works in RTL */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=972559206313&text&type=phone_number"
              aria-label={`${t("header.callNow")}: ${PHONE_DISPLAY}`}
              className="flex items-center gap-2"
            >
              <Image
                src="/whatsapp.svg"
                style={{ filter: "drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.2))" }}
                alt="WhatsApp"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div className="hidden leading-0 sm:block">
                <div className="text-muted-foreground text-xs">{t("header.callNow")}:</div>
                <span className="text-sm font-black">
                  <span className="force-ltr inline-block">{PHONE_DISPLAY}</span>
                </span>
              </div>
            </a>

            {/* Turn the CTA button into a tel: link (similar to CTAButtons) */}
            <Button asChild className="cta-btn rounded-full px-6 hover:opacity-90">
              <a href={`tel:${PHONE_TEL}`} aria-label={`${t("header.callNow")}: ${PHONE_DISPLAY}`}>
                {t("header.scheduleService")}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient Background */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[oklch(0.9953_0.0119_101.47)] to-transparent -z-10" /> */}
    </header>
  );
}

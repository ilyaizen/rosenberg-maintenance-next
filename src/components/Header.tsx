"use client";

import { Button } from "@/components/ui/button";
// import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const dir = locale === "he" ? "rtl" : "ltr";
  const PHONE_DISPLAY = "055-920-6313";
  const PHONE_TEL = "+972559206313";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/rosenberg-maintenance-svg.svg"
              alt={t("companyName")}
              className="h-12 w-auto"
              width={48}
              height={48}
            />
            {/* margin flips in RTL */}
            <span className={`${dir === "rtl" ? "mr-2" : "ml-2"} text-lg font-black`}>{t("companyName")}</span>
          </div>

          {/* Phone number */}
          {/* use gap instead of space-x-* so it works in RTL */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/whatsapp.svg" style={{ filter: "drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.2))" }} alt="WhatsApp" width={32} height={32} className="h-8 w-8" />
              <div className="hidden leading-0 sm:block">
                <div className="text-xs text-gray-500">{t("header.callNow")}:</div>
                <a href={`tel:${PHONE_TEL}`} className="text-sm font-black">
                  <span className="force-ltr inline-block">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
            <Button className="cta-btn px-6 hover:opacity-90">{t("header.scheduleService")}</Button>
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
      </div>

      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[oklch(0.9953_0.0119_101.47)] to-transparent -z-10" /> */}
    </header>
  );
}

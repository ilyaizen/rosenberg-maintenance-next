"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
// import LanguageSwitcher from "./LanguageSwitcher";
import {useLocale, useTranslations} from "next-intl";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const dir = locale === "he" ? "rtl" : "ltr";
  const PHONE_DISPLAY = "+972 55-920-6313";
  const PHONE_TEL = "+972559206313";

  return (
    <header className="relative z-10">
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

          {/* use gap instead of space-x-* so it works in RTL */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <Phone className="h-4 w-4 text-red-500" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-gray-500">{t("header.callNow")}</div>
                <a href={`tel:${PHONE_TEL}`} className="text-sm font-semibold text-red-500">
                  <span className="force-ltr inline-block">{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
            <Button className="cta-btn px-6 hover:opacity-90">{t("header.scheduleService")}</Button>
            {/* <LanguageSwitcher /> */}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent -z-10" />
    </header>
  );
}

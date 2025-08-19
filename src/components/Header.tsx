"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "./LanguageProvider";

export default function Header() {
  const { t } = useI18n();

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
            <span className="ml-2 text-lg font-black">{t("companyName")}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                <Phone className="h-4 w-4 text-red-500" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-gray-500">{t("header.callNow")}</div>
                <div className="text-sm font-semibold text-red-500">{t("header.phone")}</div>
              </div>
            </div>
            <Button className="cta-btn px-6 hover:opacity-90">{t("header.scheduleService")}</Button>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent -z-10" />
    </header>
  );
}

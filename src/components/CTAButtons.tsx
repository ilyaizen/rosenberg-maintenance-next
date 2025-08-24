"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { trackCtaCall, trackCtaWhatsApp } from "@/lib/gtm";

type CTAButtonsProps = {
  className?: string;
  phoneDisplay?: string;
  phoneTel?: string;
};

export default function CTAButtons({
  className = "",
  phoneDisplay = "055-920-6313",
  phoneTel = "+972559206313",
}: CTAButtonsProps) {
  const t = useTranslations();
  const locale = useLocale();
  const dir: "ltr" | "rtl" = locale === "he" ? "rtl" : "ltr";

  return (
    <div
      dir={dir}
      className={`bg-primary/10 ring-primary/10 dark:bg-primary/20 dark:ring-primary/15 mt-6 flex flex-wrap items-stretch justify-center gap-3 rounded-full p-3 shadow-sm ring-1 sm:gap-4 sm:p-4 ${className}`}
    >
      <Button asChild variant="cta" size="lg" className="cta-lg rounded-full px-4 py-8 text-xl hover:opacity-95">
        <a
          href={`tel:${phoneTel}`}
          aria-label={`${t("header.callNow")}: ${phoneDisplay}`}
          className="flex items-center"
          onClick={(e) => {
            // Push event first, then navigate shortly after so GTM can process it
            trackCtaCall("hero", phoneDisplay);
            e.preventDefault();
            setTimeout(() => {
              if (typeof window !== "undefined") window.location.href = `tel:${phoneTel}`;
            }, 200);
          }}
        >
          <ArrowRight
            className={`${dir === "rtl" ? "ml-2" : "mr-2"} h-6 w-6`}
            style={{ transform: dir === "rtl" ? "rotate(180deg)" : undefined }}
          />
          {t("hero.cta")}
        </a>
      </Button>

      <Button
        asChild
        variant="default"
        size="lg"
        className="!bg-card !text-card-foreground ring-border hover:!bg-muted hover:!text-foreground rounded-full px-8 py-8 shadow-sm ring-1"
      >
        <a
          href="https://api.whatsapp.com/send/?phone=972559206313&text&type=phone_number"
          aria-label={`${t("header.callNow")}: ${phoneDisplay}`}
          className="flex items-center justify-center gap-3 sm:gap-4"
          onClick={(e) => {
            trackCtaWhatsApp("hero", phoneDisplay);
            e.preventDefault();
            setTimeout(() => {
              if (typeof window !== "undefined") window.location.href = "https://api.whatsapp.com/send/?phone=972559206313&text&type=phone_number";
            }, 200);
          }}
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={40} height={40} className="me-3 h-10 w-10" />
          <span className="flex min-w-0 flex-col text-end leading-tight">
            <span className="text-muted-foreground text-xs">{t("header.callNow")}:</span>
            <span className="force-ltr text-primary inline-block text-xl font-black">{phoneDisplay}</span>
          </span>
        </a>
      </Button>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Award, Building, Home, Search, Shield, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function Facts() {
  const t = useTranslations();

  const facts = [
    { icon: Shield, title: t("facts.fact1.title"), description: t("facts.fact1.description") },
    { icon: Wrench, title: t("facts.fact2.title"), description: t("facts.fact2.description") },
    { icon: Search, title: t("facts.fact3.title"), description: t("facts.fact3.description") },
    { icon: Building, title: t("facts.fact4.title"), description: t("facts.fact4.description") },
    { icon: Home, title: t("facts.fact5.title"), description: t("facts.fact5.description") },
    { icon: Award, title: t("facts.fact6.title"), description: t("facts.fact6.description") },
  ];

  // Map each fact to its background image in order (1.png ... 6.png)
  const bgImages = Array.from({ length: 6 }, (_, i) => `/images/about/${i + 1}.png`);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-black text-gray-900">{t("facts.title")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => {
            const src = bgImages[index % bgImages.length];
            const Icon = fact.icon;
            return (
              <Card
                key={index}
                className="group relative h-56 overflow-hidden rounded-xl border-0 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl md:h-64"
                title={fact.title}
              >
                {/* Background image with zoom on hover */}
                <Image
                  src={src}
                  alt={fact.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index < 2}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Large, faint icon overlay (under gradients) */}
                <div className="absolute inset-0 z-0" aria-hidden="true">
                  <Icon className="pointer-events-none absolute top-10 right-10 translate-x-1/2 -translate-y-1/2 origin-top-right h-20 w-20 text-white transition-transform duration-500 ease-out group-hover:scale-125" />
                </div>

                {/* Overlays for readability (above icon) */}
                <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent" aria-hidden="true" />

                {/* Content at the bottom */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-white">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight drop-shadow-sm md:text-2xl">{fact.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-white/85 md:text-sm">{fact.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

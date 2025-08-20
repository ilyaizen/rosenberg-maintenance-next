import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Building, Home, Search, Shield, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

export default function Facts() {
  const t = useTranslations();

  const facts = [
    { icon: Shield, title: t("facts.fact1.title"), description: t("facts.fact1.description") },
    { icon: Wrench, title: t("facts.fact2.title"), description: t("facts.fact2.description") },
    { icon: Search, title: t("facts.fact3.title"), description: t("facts.fact3.description") },
    { icon: Home, title: t("facts.fact4.title"), description: t("facts.fact4.description") },
    { icon: Building, title: t("facts.fact5.title"), description: t("facts.fact5.description") },
    { icon: Award, title: t("facts.fact6.title"), description: t("facts.fact6.description") },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">{t("facts.title")}</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact, index) => (
            <Card key={index} className="h-full transition-shadow duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <fact.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center leading-relaxed text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

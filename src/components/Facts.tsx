import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Award, Building, Home, Search, Shield, Wrench } from "lucide-react";
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("facts.title")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <fact.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{fact.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

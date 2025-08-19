import Hero from "@/components/Hero";
import {setRequestLocale} from "next-intl/server";
import {use} from "react";

export default function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = use(params);
  setRequestLocale(locale);
  return <Hero />;
}

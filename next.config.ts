import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* Additional Next.js config */
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['tr', 'en', 'es', 'ru', 'fr'],
    defaultLocale: 'en',
    // localeDetection: true,
  },

};

export default nextConfig;

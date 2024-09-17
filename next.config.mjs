/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);

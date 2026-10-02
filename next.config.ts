import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // the line-up used to be its own page; it is the shop now (the browser
    // carries the #r-… part across, so old links land on the same design)
    return [{ source: "/frames", destination: "/pieces", permanent: true }];
  },
  // the dev badge sits on the page's bottom-left corner, over the rail
  devIndicators: false,
};

export default nextConfig;

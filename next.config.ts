import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', 
      },
      {
        protocol: 'http',
        hostname: '**', 
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;

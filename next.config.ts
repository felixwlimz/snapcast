import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint : {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "snapcast-video.b-cdn.net"],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/peptides",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

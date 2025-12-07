import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.mmsrg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dyson-h.assetsadobe2.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "routel-backend.de",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gamingoase.de",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pics.computerbase.de",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.electronic4you.de",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

const nextConfig = {
  experimental: {
    ppr: true,
    inlineCss: true,
    useCache: true,
    reactOwnerStack: true,
    newDevOverlay: true,
  },
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
};

export default nextConfig;

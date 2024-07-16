/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-ninjas.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;

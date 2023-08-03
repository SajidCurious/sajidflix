/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  //   serverComponentsExternalPackages: ["mongoose"],
  // },
  images: {
    domains: ["occ-0-116-448.1.nflxso.net"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  unstable_runtimeJS: false,
  distDir: "build",
};

module.exports = nextConfig;

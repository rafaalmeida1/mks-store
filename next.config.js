/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "mks-sistemas.nyc3.digitaloceanspaces.com",
      "github.com"
    ],
  },
};

module.exports = nextConfig;

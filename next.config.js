/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
}

module.exports = nextConfig

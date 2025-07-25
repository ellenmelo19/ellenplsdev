/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // Objeto vazio em vez de true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
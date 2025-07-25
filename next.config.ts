/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // Se estiver usando
  },
  typescript: {
    ignoreBuildErrors: false, // Mude para true temporariamente se necessário
  },
};

module.exports = nextConfig;
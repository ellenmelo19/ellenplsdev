/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // Objeto vazio em vez de true/false
  },
  // Remova a linha typescript.ignoreBuildErrors se possível
};

module.exports = nextConfig;
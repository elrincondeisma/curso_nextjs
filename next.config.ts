import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Permitir todas las imágenes de cualquier dominio
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Esto permite cualquier dominio
      },
      {
        protocol: 'http',
        hostname: '**', // Esto permite cualquier dominio
      },
    ],
  },
};

export default nextConfig;

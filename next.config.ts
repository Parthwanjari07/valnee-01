import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'framerusercontent.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https', // Supabase uses https
        hostname: 'mfaebogwihppaoyyclzs.supabase.co', // Your Supabase project hostname
        port: '',
      },
    ],
  },
};

export default nextConfig;

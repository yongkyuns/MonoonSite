import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  // This single-page export uses fragment navigation. Prefix assets while
  // leaving the prerender route at / for static hosts that mount a subdirectory.
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
};
export default nextConfig;

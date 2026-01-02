import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['@phosphor-icons/react'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react'],
  },
};

export default nextConfig;

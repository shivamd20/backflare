import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    basePath: '/backflare',
    assetPrefix: '/backflare',

    // Optional: if using static export (next export)
    trailingSlash: true,
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();

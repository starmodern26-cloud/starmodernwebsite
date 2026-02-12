/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← Add this line (enables static export)
  trailingSlash: true,        // ← Add this (creates /services/slug/index.html instead of /services/slug.html)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,        // Already good – required for static export with <Image>
  },
}

export default nextConfig
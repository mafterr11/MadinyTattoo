const galleryManifest = require('./lib/galleryManifest')

/** How many portfolio files were once served as /gallery/tattooN.webp. */
const LEGACY_NUMBERED = 24

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    // AVIF first: typically 20-30% smaller than WebP for photographic content.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        // /testimoniale was a live, indexed page before the reviews moved onto
        // the homepage. Left as a 404 it drops out of the index and takes any
        // accumulated link equity with it; a 301 passes that to the section
        // that replaced it.
        source: '/testimoniale',
        destination: '/#testimoniale',
        permanent: true,
      },
      // The portfolio files were renamed from tattoo1..tattoo24 to names that
      // describe the work. Anything Google Images already indexed under the
      // old paths follows the redirect instead of turning into 24 dead URLs.
      //
      // Only the first 24 entries ever had a numbered URL, so the slice stops
      // there — work appended since was never reachable as /gallery/tattooN.
      ...galleryManifest.slice(0, LEGACY_NUMBERED).map((entry, i) => ({
        source: `/gallery/tattoo${i + 1}.webp`,
        destination: `/gallery/${entry.file}`,
        permanent: true,
      })),
    ]
  },
  async headers() {
    return [
      {
        // The intro clips never change; let the browser and CDN keep them.
        source: '/:path*.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

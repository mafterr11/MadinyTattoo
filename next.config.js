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
      {
        source: '/:path*',
        headers: [
          // Stop the browser second-guessing a declared Content-Type, which is
          // how a served file gets treated as a script it was never meant to be.
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Nothing here is meant to be framed; the site embeds Google Maps
          // rather than being embedded, so clickjacking has no upside to lose.
          { key: 'X-Frame-Options', value: 'DENY' },
          // Send the origin to other sites, the full URL to our own. Enough for
          // referral analytics without leaking which page someone was reading.
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // The site asks for none of these, so no embed can ask on its behalf.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Two years, subdomains included: the apex already redirects to
          // HTTPS, this removes the first unencrypted request that discovers it.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

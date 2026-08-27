/**
 * Re-encodes everything under public/ to a sane weight.
 *
 * The originals were exported at near-lossless quality: 1080x1350 portfolio
 * shots weighing 700KB-1.2MB, and backgrounds up to 3840x5120. next/image
 * re-encodes at quality 75 before anything reaches a browser, so that extra
 * weight never improved what a visitor sees — it only made the optimizer
 * decode a huge source on every cold request and bloated the deploy.
 *
 * Re-running is safe: a file already under the bytes-per-pixel budget and
 * within its size cap is skipped outright, so an optimized image is never
 * re-compressed generation after generation.
 *
 *   node scripts/optimize-images.mjs        # rewrite in place
 *   node scripts/optimize-images.mjs --dry  # report only
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.join(process.cwd(), 'public')
const DRY = process.argv.includes('--dry')

/** Quality 80 sits above the 75 next/image serves, so delivery is unaffected. */
const QUALITY = 80

/**
 * Skip anything already this lean. The untouched exports sat at 0.33-0.62
 * bytes per pixel; a quality-80 re-encode lands at 0.03-0.14. Anything below
 * this line has already been through here, and re-encoding it would only
 * trade a few kilobytes for a generation of quality loss.
 */
const MAX_BPP = 0.2

/**
 * Longest-edge caps per folder, derived from how each image is actually laid
 * out. Portfolio shots stay at their native 1080 (they fill a 292px grid cell
 * at most, so 1080 already covers 3x displays); service cards and page
 * backgrounds never need more than their widest rendered slot doubled.
 */
const RULES = [
  { match: /^gallery\/tattoo\d+\.webp$/, maxEdge: 1350 },
  { match: /^gallery\//, maxEdge: 1600 },
  { match: /^backgrounds\//, maxEdge: 1920 },
  // Artist portraits fill a 552px column at their widest, so they want about
  // 1100px for a 2x screen. The cap is on the longest edge, which on a
  // portrait is the height — 1600 there is what leaves the width near 1200.
  // The filter avatars are head crops baked at 128px and stay well under it.
  { match: /^artists\//, maxEdge: 1600 },
  { match: /^customer\d*\.webp$/, maxEdge: 1024 },
]

/** Left alone: the social card is spec'd at 1200x630 and the posters are tiny. */
const SKIP = /^(opengraph-image\.jpg|hero-poster.*\.webp|favicon\.ico)$/

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name)
      return entry.isDirectory() ? walk(full) : [full]
    }),
  )
  return files.flat()
}

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`

const run = async () => {
  const files = (await walk(ROOT)).filter((f) => /\.(webp|jpe?g|png)$/i.test(f))

  let before = 0
  let after = 0
  let rewritten = 0

  for (const file of files.sort()) {
    const rel = path.relative(ROOT, file).split(path.sep).join('/')
    const original = (await fs.stat(file)).size
    before += original

    if (SKIP.test(rel)) {
      after += original
      continue
    }

    const rule = RULES.find((r) => r.match.test(rel))
    const image = sharp(file)
    const meta = await image.metadata()
    const longest = Math.max(meta.width, meta.height)
    const cap = rule?.maxEdge ?? 1920
    const resize = longest > cap
    const bpp = original / (meta.width * meta.height)

    if (!resize && bpp <= MAX_BPP && /\.webp$/i.test(rel)) {
      after += original
      continue
    }

    const output = await (resize
      ? image.resize({ width: cap, height: cap, fit: 'inside', withoutEnlargement: true })
      : image
    )
      .webp({ quality: QUALITY, effort: 6 })
      .toBuffer()

    // A re-encode that saves nothing is not worth the churn.
    if (output.length > original * 0.9) {
      after += original
      continue
    }

    const dims = resize ? ` ${meta.width}x${meta.height} -> max ${cap}` : ''
    console.log(`${rel.padEnd(52)} ${kb(original).padStart(8)} -> ${kb(output.length).padStart(8)}${dims}`)

    if (!DRY) {
      // A .jpg or .png source becomes .webp; callers are updated to match.
      // The extension has to travel with the bytes — a WebP written back under
      // a .png name is a file every consumer downstream mis-handles.
      const target = file.replace(/\.(jpe?g|png)$/i, '.webp')
      await fs.writeFile(target, output)
      if (target !== file) await fs.unlink(file)
    }

    after += output.length
    rewritten += 1
  }

  console.log(
    `\n${rewritten} image(s) ${DRY ? 'would be ' : ''}rewritten — ` +
      `${kb(before)} -> ${kb(after)} (-${(100 - (after / before) * 100).toFixed(0)}%)`,
  )
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})

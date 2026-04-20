const { chromium } = require('playwright')
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const targets = [
  { name: 'luxury-skincare', url: 'http://localhost:5214/' },
  { name: 'jj-dominican', url: 'http://localhost:5215/' },
  { name: 'serenity-touch', url: 'http://localhost:5216/' },
]

const outDir = path.join(__dirname, 'public', 'gifs')
const archiveDir = path.join(__dirname, 'public', 'gifs-archive')
fs.mkdirSync(outDir, { recursive: true })
fs.mkdirSync(archiveDir, { recursive: true })

function archiveIfExists(name) {
  const gifPath = path.join(outDir, `${name}.gif`)
  if (!fs.existsSync(gifPath)) return
  const stamp = new Date().toISOString().replace(/[T:.]/g, '-').slice(0, 19)
  const archivePath = path.join(archiveDir, `${name}-scroll-${stamp}.gif`)
  fs.copyFileSync(gifPath, archivePath)
  console.log(`Archived existing gif -> ${archivePath}`)
}

async function captureFrames(page, target) {
  const tmpDir = path.join(outDir, `${target.name}-front-frames`)
  fs.mkdirSync(tmpDir, { recursive: true })

  await page.goto(target.url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)

  // Front-page only: tiny micro-jitter zoom for motion, no scrolling.
  const frameCount = 24
  for (let i = 0; i < frameCount; i++) {
    const t = i / (frameCount - 1)
    const scale = 1 + Math.sin(t * Math.PI * 2) * 0.004
    await page.evaluate((s) => {
      document.body.style.transformOrigin = '50% 0%'
      document.body.style.transform = `scale(${s})`
    }, scale)
    await page.waitForTimeout(70)
    const framePath = path.join(tmpDir, `frame-${String(i).padStart(3, '0')}.png`)
    await page.screenshot({ path: framePath, clip: { x: 0, y: 0, width: 1280, height: 720 } })
  }

  await page.evaluate(() => {
    document.body.style.transform = ''
    document.body.style.transformOrigin = ''
  })

  return tmpDir
}

function buildGif(name, framesDir) {
  const outPath = path.join(outDir, `${name}.gif`)
  const py = [
    'from PIL import Image',
    'import glob',
    `files = sorted(glob.glob(r"${framesDir.replace(/\\/g, '\\\\')}\\frame-*.png"))`,
    'imgs = [Image.open(f).convert("RGB") for f in files]',
    `imgs[0].save(r"${outPath.replace(/\\/g, '\\\\')}", save_all=True, append_images=imgs[1:], duration=120, loop=0)`,
    'print("ok")',
  ].join('; ')

  execSync(`python -c "${py.replace(/"/g, '\\"')}"`, { stdio: 'inherit' })
  return outPath
}

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })

  try {
    for (const target of targets) {
      archiveIfExists(target.name)
      console.log(`Capturing front-page gif: ${target.name}...`)
      const framesDir = await captureFrames(page, target)
      const gif = buildGif(target.name, framesDir)
      console.log(`Created: ${gif}`)
      fs.rmSync(framesDir, { recursive: true, force: true })
    }
  } finally {
    await browser.close()
  }
})()

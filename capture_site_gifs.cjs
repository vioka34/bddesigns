const { chromium } = require('playwright')
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const targets = [
  {
    name: 'crossfit-pulse',
    url: 'http://localhost:5211/',
  },
  {
    name: 'jj-dominican',
    url: 'http://localhost:5213/',
  },
  {
    name: 'plumbing-rite',
    url: 'http://localhost:5212/',
  },
]

const outDir = path.join(__dirname, 'public', 'gifs')
fs.mkdirSync(outDir, { recursive: true })

async function captureFrames(page, target) {
  const tmpDir = path.join(outDir, `${target.name}-frames`)
  fs.mkdirSync(tmpDir, { recursive: true })

  await page.goto(target.url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)

  // subtle scroll capture for motion
  const frameCount = 28
  for (let i = 0; i < frameCount; i++) {
    const progress = i / (frameCount - 1)
    const y = Math.floor(progress * 1800)
    await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: 'instant' }), y)
    await page.waitForTimeout(80)
    const framePath = path.join(tmpDir, `frame-${String(i).padStart(3, '0')}.png`)
    await page.screenshot({ path: framePath, clip: { x: 0, y: 0, width: 1280, height: 720 } })
  }

  return tmpDir
}

function buildGif(name, framesDir) {
  const outPath = path.join(outDir, `${name}.gif`)
  const py = [
    'from PIL import Image',
    'import glob',
    `files = sorted(glob.glob(r"${framesDir.replace(/\\/g, '\\\\')}\\frame-*.png"))`,
    'imgs = [Image.open(f).convert("RGB") for f in files]',
    `imgs[0].save(r"${outPath.replace(/\\/g, '\\\\')}", save_all=True, append_images=imgs[1:], duration=110, loop=0)`,
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
      console.log(`Capturing ${target.name}...`)
      const framesDir = await captureFrames(page, target)
      const gif = buildGif(target.name, framesDir)
      console.log(`Created: ${gif}`)
    }
  } finally {
    await browser.close()
  }
})()

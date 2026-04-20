const { chromium } = require('playwright')

async function shot(tag) {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } })
  await page.goto('http://localhost:5205', { waitUntil: 'networkidle' })
  await page.screenshot({ path: `qa3-${tag}-desktop.png`, fullPage: true })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('http://localhost:5205', { waitUntil: 'networkidle' })
  await page.screenshot({ path: `qa3-${tag}-mobile.png`, fullPage: true })
  await browser.close()
}

;(async () => {
  await shot('run1')
  await shot('run2')
  console.log('qa v3 complete')
})()

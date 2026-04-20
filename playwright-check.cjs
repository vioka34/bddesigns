const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } })

  await page.goto('http://localhost:5201', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'portfolio-desktop-full.png', fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('http://localhost:5201', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'portfolio-mobile-full.png', fullPage: true })

  await browser.close()
  console.log('Screenshots captured')
})()

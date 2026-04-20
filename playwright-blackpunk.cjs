const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } })

  await page.goto('http://localhost:5202', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'portfolio-blackpunk-desktop.png', fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('http://localhost:5202', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'portfolio-blackpunk-mobile.png', fullPage: true })

  await browser.close()
  console.log('blackpunk screenshots captured')
})()

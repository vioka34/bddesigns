const { chromium } = require('playwright')

async function run(tag) {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } })
  await page.goto('http://localhost:5203', { waitUntil: 'networkidle' })
  await page.screenshot({ path: `qa-${tag}-desktop.png`, fullPage: true })

  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('http://localhost:5203', { waitUntil: 'networkidle' })
  await page.screenshot({ path: `qa-${tag}-mobile.png`, fullPage: true })
  await browser.close()
}

;(async () => {
  await run('pass1')
  await run('pass2')
  await run('pass3')
  console.log('qa screenshots done')
})()

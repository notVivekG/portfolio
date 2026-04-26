import { spawn } from 'node:child_process'
import { mkdir } from 'node:fs/promises'
import { setTimeout as delay } from 'node:timers/promises'
import { chromium, devices } from 'playwright'

const PORT = 4173
const BASE_URL = `http://127.0.0.1:${PORT}`

const checks = {
  meshAnimationPresent: false,
  typingTextChanges: false,
  navbarReactsOnScroll: false,
  projectCardHoverTransforms: false,
  mobileMenuOpens: false,
}

const server = spawn(
  'npm',
  ['run', 'preview', '--', '--host', '127.0.0.1', '--port', String(PORT)],
  {
    shell: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  },
)

let stdout = ''
let stderr = ''

server.stdout.on('data', (chunk) => {
  stdout += chunk.toString()
})

server.stderr.on('data', (chunk) => {
  stderr += chunk.toString()
})

async function waitForServer() {
  for (let i = 0; i < 50; i += 1) {
    try {
      const response = await fetch(BASE_URL)
      if (response.ok) {
        return
      }
    } catch {}

    await delay(250)
  }

  throw new Error('Vite preview server did not become available in time.')
}

function readRoleText() {
  return document.querySelector('#home .mt-5 span')?.textContent?.trim() ?? ''
}

async function runVerification() {
  await mkdir('artifacts', { recursive: true })
  await waitForServer()

  const browser = await chromium.launch({ headless: true })

  try {
    const desktopContext = await browser.newContext({
      viewport: { width: 1512, height: 982 },
    })
    const desktopPage = await desktopContext.newPage()

    await desktopPage.goto(BASE_URL, { waitUntil: 'networkidle' })
    await desktopPage.waitForTimeout(1200)

    checks.meshAnimationPresent = await desktopPage.evaluate(() => {
      const mesh = document.querySelector('.animated-mesh')
      if (!mesh) return false
      return getComputedStyle(mesh).animationName.includes('mesh-drift')
    })

    const firstRoleText = await desktopPage.evaluate(readRoleText)
    await desktopPage.waitForTimeout(1900)
    const secondRoleText = await desktopPage.evaluate(readRoleText)
    checks.typingTextChanges =
      firstRoleText.length > 0 &&
      secondRoleText.length > 0 &&
      firstRoleText !== secondRoleText

    const navbarClassBefore = await desktopPage
      .locator('header')
      .getAttribute('class')
    await desktopPage.evaluate(() =>
      window.scrollTo({ top: 360, behavior: 'instant' }),
    )
    await desktopPage.waitForTimeout(220)
    const navbarClassAfter = await desktopPage
      .locator('header')
      .getAttribute('class')
    checks.navbarReactsOnScroll =
      (navbarClassBefore ?? '').includes('bg-transparent') &&
      (navbarClassAfter ?? '').includes('border-b')

    const firstProjectCard = desktopPage.locator('#projects article').first()
    const transformBefore = await firstProjectCard.evaluate(
      (el) => getComputedStyle(el).transform,
    )
    await firstProjectCard.hover()
    await desktopPage.waitForTimeout(260)
    const transformAfter = await firstProjectCard.evaluate(
      (el) => getComputedStyle(el).transform,
    )
    checks.projectCardHoverTransforms =
      transformBefore !== transformAfter && transformAfter !== 'none'

    await desktopPage.screenshot({
      path: 'artifacts/portfolio-desktop.png',
      fullPage: true,
    })
    await desktopContext.close()

    const mobileContext = await browser.newContext({
      ...devices['iPhone 13'],
    })
    const mobilePage = await mobileContext.newPage()

    await mobilePage.goto(BASE_URL, { waitUntil: 'networkidle' })
    const menuButton = mobilePage.getByLabel('Toggle mobile menu')
    await menuButton.click()
    const aboutLink = mobilePage.locator('a[href="#about"]').first()
    checks.mobileMenuOpens = await aboutLink.isVisible()

    await mobilePage.screenshot({
      path: 'artifacts/portfolio-mobile.png',
      fullPage: true,
    })

    await mobileContext.close()
  } finally {
    await browser.close()
  }
}

async function shutdown() {
  if (!server.killed) {
    server.kill()
    await delay(300)
  }
}

try {
  await runVerification()

  const failedChecks = Object.entries(checks).filter(([, passed]) => !passed)
  if (failedChecks.length) {
    throw new Error(
      `Verification failed for: ${failedChecks
        .map(([name]) => name)
        .join(', ')}`,
    )
  }

  console.log(JSON.stringify({ ok: true, checks }, null, 2))
} catch (error) {
  console.error(
    JSON.stringify(
      {
        ok: false,
        checks,
        error: error instanceof Error ? error.message : String(error),
        previewStdout: stdout.trim(),
        previewStderr: stderr.trim(),
      },
      null,
      2,
    ),
  )
  process.exitCode = 1
} finally {
  await shutdown()
}

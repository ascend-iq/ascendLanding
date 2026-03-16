/**
 * Test the enrollment → DynamoDB flow.
 * Prereqs: 1) pnpm dev running on localhost:3000  2) .env.local with DynamoDB vars
 * Run: node --env-file=.env.local scripts/test-enroll-flow.mjs
 */
const BASE = "http://localhost:3000"
const testEmail = `test-enroll-${Date.now()}@ascendiq.work`

async function waitForServer() {
  for (let i = 0; i < 30; i++) {
    try {
      const r = await fetch(BASE)
      if (r.ok) return true
    } catch {
      await new Promise((x) => setTimeout(x, 500))
    }
  }
  return false
}

async function run() {
  console.log("Testing enrollment flow (dev only)...\n")

  if (!(await waitForServer())) {
    console.error("Dev server not running. Start with: pnpm dev")
    process.exit(1)
  }
  console.log("✓ Dev server is up")

  const payload = {
    name: "Test Enroller",
    email: testEmail,
    phone: "(555) 123-4567",
    studentName: "Test Student",
  }

  console.log("POST /api/enroll/test", payload)
  const res = await fetch(`${BASE}/api/enroll/test`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!res.ok) {
    console.error("Failed:", data.error ?? data)
    process.exit(1)
  }

  console.log("✓ Enrollment saved to DynamoDB")
  console.log("  ID:", data.enrollment?.id)
  console.log("  Email:", data.enrollment?.email)
  console.log("  Student:", data.enrollment?.studentName)
  console.log("\n✓ Full enrollment flow OK. Check DynamoDB → ascend-enrollments for the record.")
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})

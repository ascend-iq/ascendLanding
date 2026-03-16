import { NextRequest, NextResponse } from "next/server"
import { saveEnrollment } from "@/lib/enrollments-db"

/**
 * Dev-only test endpoint: simulates a successful enrollment and saves to DynamoDB.
 * Bypasses Square payment. Use for testing the enrollment → DB flow.
 * Only available when NODE_ENV=development.
 */
export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 404 })
  }

  let body: { name?: string; email?: string; phone?: string; studentName?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { name, email, phone, studentName } = body
  if (!name || !email) {
    return NextResponse.json({ error: "Missing name or email" }, { status: 422 })
  }

  const record = await saveEnrollment({
    name,
    email,
    phone: phone ?? "",
    studentName: studentName ?? "",
    programId: "ascendiq-bootcamp",
    programName: "AscendIQ Bootcamp",
    amountCents: 150_000,
    squarePaymentId: `test-${Date.now()}`,
  })

  return NextResponse.json({
    success: true,
    enrollment: record,
    message: "Test enrollment saved to DynamoDB (no payment processed)",
  })
}

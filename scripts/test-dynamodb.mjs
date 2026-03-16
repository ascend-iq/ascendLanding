/**
 * Test DynamoDB connectivity locally.
 * Run: node --env-file=.env.local scripts/test-dynamodb.mjs
 * Or ensure DYNAMODB_* vars are set before running.
 */
import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient, PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb"

const region = process.env.DYNAMODB_REGION ?? "us-east-1"
const tableName = process.env.DYNAMODB_ENROLLMENTS_TABLE

if (!tableName) {
  console.error("Missing DYNAMODB_ENROLLMENTS_TABLE. Set it in .env.local")
  process.exit(1)
}

const client = new DynamoDBClient({
  region,
  ...(process.env.DYNAMODB_ACCESS_KEY_ID &&
    process.env.DYNAMODB_SECRET_ACCESS_KEY && {
      credentials: {
        accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
        secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
      },
    }),
})
const docClient = DynamoDBDocumentClient.from(client)

const testId = "test-" + Date.now()

try {
  await docClient.send(
    new PutCommand({
      TableName: tableName,
      Item: {
        id: testId,
        name: "Local Test",
        email: "test@local.dev",
        phone: "",
        studentName: "",
        programId: "ascendiq-bootcamp",
        programName: "AscendIQ Bootcamp",
        amountCents: 150000,
        squarePaymentId: "test-payment-id",
        createdAt: new Date().toISOString(),
      },
    })
  )
  console.log("✓ Put test item:", testId)

  const res = await docClient.send(
    new GetCommand({
      TableName: tableName,
      Key: { id: testId },
    })
  )
  if (res.Item) {
    console.log("✓ Read back item:", res.Item.email)
  }
  console.log("\nDynamoDB connection OK.")
} catch (err) {
  console.error("DynamoDB error:", err.message)
  process.exit(1)
}

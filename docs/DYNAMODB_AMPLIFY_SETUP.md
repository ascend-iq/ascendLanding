# DynamoDB + Amplify Setup Guide

Configure DynamoDB to store enrollments and connect it to your Amplify-hosted app.

---

## 1. Create the DynamoDB table

1. Go to **AWS Console → DynamoDB → Tables → Create table**
2. **Table name:** `ascend-enrollments`
3. **Partition key:** `id` (String)
4. **Table settings:** On-demand (pay per request; good for low volume)
5. Click **Create table**

---

## 2. Create an IAM user (for Amplify)

1. Go to **AWS Console → IAM → Users → Create user**
2. **User name:** `ascend-landing-dynamodb` (or similar)
3. **Permissions:** Attach policy directly
4. Click **Create policy** (opens new tab):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:PutItem"
      ],
      "Resource": "arn:aws:dynamodb:us-east-1:YOUR_ACCOUNT_ID:table/ascend-enrollments"
    }
  ]
}
```

- Replace `YOUR_ACCOUNT_ID` with your AWS account ID (IAM → Dashboard shows it)
- Replace `us-east-1` if you use another region

5. Name the policy `AscendLandingDynamoDBEnrollments`, create it, go back to the user
6. Attach the new policy to the user
7. **Create user**
8. Open the user → **Security credentials** → **Create access key** → Use for "Application running outside AWS"
9. Copy **Access key ID** and **Secret access key** — you’ll add these to Amplify

---

## 3. Add environment variables in Amplify

Amplify blocks variables starting with `AWS_`. Use these instead:

| Variable | Value |
|----------|-------|
| `DYNAMODB_REGION` | `us-east-1` (or your region) |
| `DYNAMODB_ACCESS_KEY_ID` | From step 2 (Access key ID) |
| `DYNAMODB_SECRET_ACCESS_KEY` | From step 2 (Secret access key) |
| `DYNAMODB_ENROLLMENTS_TABLE` | `ascend-enrollments` |

1. Go to **Amplify Console** → your app → **Hosting** → **Environment variables**
2. Add the variables above
3. **Save** and redeploy so the new variables are applied

---

## 4. Alternative: IAM role (no access keys)

If your Amplify app runs with an IAM execution role (e.g. SSR/Lambda):

1. Find the **execution role** used by Amplify (App settings → General)
2. Add this policy to that role:

```json
{
  "Effect": "Allow",
  "Action": ["dynamodb:PutItem"],
  "Resource": "arn:aws:dynamodb:us-east-1:YOUR_ACCOUNT_ID:table/ascend-enrollments"
}
```

3. If using the role, you do **not** need `DYNAMODB_ACCESS_KEY_ID` or `DYNAMODB_SECRET_ACCESS_KEY`
4. Still set: `DYNAMODB_REGION` and `DYNAMODB_ENROLLMENTS_TABLE`

---

## Verification

After deploy, complete a test enrollment. Then:

- **DynamoDB → Tables → ascend-enrollments → Explore table items**

You should see records with `id`, `name`, `email`, `phone`, `studentName`, `programId`, `squarePaymentId`, `createdAt`, etc.

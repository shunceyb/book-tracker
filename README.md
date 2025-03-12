Yes, the app is not secure on purpose(plaintext password, only checking the username stored in cookie, no auth).
Made for demonstration purposes only.

**create .env, set DATABASE_URL** (mongodb)
`bun install`
`bunx prisma generate`
`bun run dev`
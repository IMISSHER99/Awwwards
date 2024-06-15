import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./app/_drizzle/schema.ts",
    out: "./app/_drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL as string
    },
    verbose: true,
    strict: true
})
import 'dotenv/config'
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from './schema'
import postgres from "postgres";

const client = postgres("postgres://mrrobot:A!m@12ith@localhost:5432/awwwards")

export const db = drizzle(client, { schema, logger: true})
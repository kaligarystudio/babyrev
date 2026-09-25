import "server-only";

import { drizzle } from "drizzle-orm/neon-http";

import { sql } from "@/lib/database";

export const db = drizzle(sql);

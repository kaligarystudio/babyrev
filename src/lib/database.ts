import "server-only";

import { neon } from "@neondatabase/serverless";

import { serverEnvironment } from "@/lib/env";

export const sql = neon(
  serverEnvironment.databaseUrl
);

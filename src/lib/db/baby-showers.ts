import "server-only";

import { eq, and } from "drizzle-orm";

import { db } from "@/lib/db";
import { babyShowers } from "@/lib/db/schema";

export async function getBabyShowerBySlug(
  slug: string
) {
  const result = await db
    .select()
    .from(babyShowers)
    .where(
      and(
        eq(babyShowers.slug, slug),
        eq(babyShowers.isActive, true)
      )
    )
    .limit(1);

  return result[0] ?? null;
}

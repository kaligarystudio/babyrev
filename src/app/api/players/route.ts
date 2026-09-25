import { NextResponse } from "next/server";

import { eq, and } from "drizzle-orm";

import { db } from "@/lib/db";
import { babyShowers, players } from "@/lib/db/schema";

interface CreatePlayerRequest {
  slug?: string;
  playerName?: string;
}

export async function POST(request: Request) {
  let body: CreatePlayerRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "El cuerpo de la solicitud no es válido." },
      { status: 400 }
    );
  }

  const slug = body.slug?.trim();
  const playerName = body.playerName?.trim();

  if (!slug || !playerName) {
    return NextResponse.json(
      { error: "El slug y el nombre del jugador son obligatorios." },
      { status: 400 }
    );
  }

  if (playerName.length > 30) {
    return NextResponse.json(
      { error: "El nombre del jugador no puede superar 30 caracteres." },
      { status: 400 }
    );
  }

  const result = await db
    .select({
      id: babyShowers.id
    })
    .from(babyShowers)
    .where(
      and(
        eq(babyShowers.slug, slug),
        eq(babyShowers.isActive, true)
      )
    )
    .limit(1);

  const babyShower = result[0];

  if (!babyShower) {
    return NextResponse.json(
      { error: "El Baby Shower no existe o no está activo." },
      { status: 404 }
    );
  }

  const inserted = await db
    .insert(players)
    .values({
      babyShowerId: babyShower.id,
      playerName
    })
    .returning({
      id: players.id
    });

  return NextResponse.json(
    {
      playerId: inserted[0].id
    },
    { status: 201 }
  );
}

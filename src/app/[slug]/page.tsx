import { notFound } from "next/navigation";

import { getBabyShowerBySlug } from "@/lib/db/baby-showers";

interface BabyShowerPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";

export default async function BabyShowerPage({
  params
}: BabyShowerPageProps) {
  const { slug } = await params;

  const babyShower = await getBabyShowerBySlug(slug);

  if (!babyShower) {
    notFound();
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `linear-gradient(
          135deg,
          ${babyShower.primaryColor},
          ${babyShower.secondaryColor}
        )`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px"
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          background: "rgba(255, 255, 255, 0.92)",
          borderRadius: "24px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)"
        }}
      >
        <p
          style={{
            margin: "0 0 12px",
            fontSize: "18px",
            fontWeight: 600
          }}
        >
          👶 Bienvenidos al Baby Shower
        </p>

        <h1
          style={{
            margin: "0 0 20px",
            fontSize: "clamp(40px, 8vw, 72px)",
            lineHeight: 1
          }}
        >
          {babyShower.babyName}
        </h1>

        {babyShower.parentsName && (
          <p
            style={{
              margin: "0 0 24px",
              fontSize: "20px"
            }}
          >
            Celebrando con {babyShower.parentsName}
          </p>
        )}

        {babyShower.message && (
          <p
            style={{
              margin: "0 0 32px",
              fontSize: "18px",
              lineHeight: 1.6
            }}
          >
            {babyShower.message}
          </p>
        )}

        <div
          style={{
            display: "grid",
            gap: "10px",
            marginBottom: "32px",
            fontSize: "16px"
          }}
        >
          {babyShower.eventDate && (
            <div>📅 {babyShower.eventDate}</div>
          )}

          {babyShower.eventTime && (
            <div>🕐 {babyShower.eventTime}</div>
          )}

          {babyShower.location && (
            <div>📍 {babyShower.location}</div>
          )}
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 28px",
            borderRadius: "999px",
            background: babyShower.primaryColor,
            fontWeight: 700,
            fontSize: "18px"
          }}
        >
          🍼 La aventura está por comenzar
        </div>
      </section>
    </main>
  );
}

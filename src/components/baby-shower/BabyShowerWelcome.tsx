"use client";

import { useState } from "react";

import { PlayerNameForm } from "@/components/baby-shower/PlayerNameForm";

interface BabyShowerWelcomeProps {
  babyName: string;
  parentsName: string | null;
  eventDate: string | null;
  eventTime: string | null;
  location: string | null;
  message: string | null;
  primaryColor: string;
  secondaryColor: string;
}

export function BabyShowerWelcome({
  babyName,
  parentsName,
  eventDate,
  eventTime,
  location,
  message,
  primaryColor,
  secondaryColor
}: BabyShowerWelcomeProps) {
  const [showPlayerForm, setShowPlayerForm] = useState(false);

  if (showPlayerForm) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px"
        }}
      >
        <PlayerNameForm
          babyName={babyName}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px"
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "760px",
          background: "rgba(255, 255, 255, 0.96)",
          borderRadius: "28px",
          padding: "48px 32px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          aria-hidden="true"
          style={{
            fontSize: "64px",
            marginBottom: "12px"
          }}
        >
          👶
        </div>

        <p
          style={{
            margin: "0 0 12px",
            fontSize: "18px",
            fontWeight: 700
          }}
        >
          ¡BIENVENIDOS AL BABY SHOWER!
        </p>

        <h1
          style={{
            margin: "0 0 20px",
            fontSize: "clamp(44px, 9vw, 80px)",
            lineHeight: 1,
            fontWeight: 800
          }}
        >
          {babyName}
        </h1>

        {parentsName && (
          <p
            style={{
              margin: "0 0 24px",
              fontSize: "20px"
            }}
          >
            Celebrando con {parentsName}
          </p>
        )}

        {message && (
          <p
            style={{
              maxWidth: "560px",
              margin: "0 auto 28px",
              fontSize: "18px",
              lineHeight: 1.6
            }}
          >
            {message}
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
          {eventDate && <div>📅 {eventDate}</div>}
          {eventTime && <div>🕐 {eventTime}</div>}
          {location && <div>📍 {location}</div>}
        </div>

        {/* ZONA DEL JUEGO */}
        <div
          style={{
            padding: "24px",
            borderRadius: "22px",
            background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
          }}
        >
          <div
            aria-hidden="true"
            style={{
              fontSize: "36px",
              marginBottom: "8px"
            }}
          >
            🍼
          </div>

          <p
            style={{
              margin: "0 0 18px",
              fontSize: "20px",
              fontWeight: 800
            }}
          >
            ¿Listo para ayudar al bebé?
          </p>

          <button
            type="button"
            onClick={() => setShowPlayerForm(true)}
            style={{
              display: "inline-block",
              border: "none",
              borderRadius: "999px",
              padding: "16px 42px",
              background: "#2B2520",
              color: "#FFFFFF",
              fontSize: "20px",
              fontWeight: 800,
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.18)"
            }}
          >
            🎮 JUGAR
          </button>
        </div>
      </section>
    </main>
  );
}

"use client";

import { FormEvent, useState } from "react";

interface PlayerNameFormProps {
  primaryColor: string;
  secondaryColor: string;
  babyName: string;
}

export function PlayerNameForm({
  primaryColor,
  secondaryColor,
  babyName
}: PlayerNameFormProps) {
  const [playerName, setPlayerName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedName = playerName.trim();

    if (!normalizedName) {
      return;
    }

    setIsSubmitting(true);

    /*
     * La conexión con Neon se agregará en el siguiente archivo.
     * Por ahora solamente validamos la interacción.
     */

    console.log("Player:", normalizedName);

    setIsSubmitting(false);
  }

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "520px",
        margin: "0 auto",
        padding: "32px",
        borderRadius: "24px",
        background: "rgba(255, 255, 255, 0.94)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)"
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "52px",
          marginBottom: "12px"
        }}
      >
        👶
      </div>

      <h2
        style={{
          margin: "0 0 8px",
          textAlign: "center",
          fontSize: "32px"
        }}
      >
        ¡Vamos a jugar!
      </h2>

      <p
        style={{
          margin: "0 0 28px",
          textAlign: "center",
          lineHeight: 1.5
        }}
      >
        Ayuda a <strong>{babyName}</strong> a conseguir
        todos sus biberones.
      </p>

      <form onSubmit={handleSubmit}>
        <label
          htmlFor="player-name"
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: 700
          }}
        >
          ¿Cómo te llamas?
        </label>

        <input
          id="player-name"
          name="playerName"
          type="text"
          value={playerName}
          onChange={(event) =>
            setPlayerName(event.target.value)
          }
          maxLength={30}
          autoComplete="name"
          placeholder="Escribe tu nombre"
          required
          style={{
            width: "100%",
            padding: "14px 16px",
            border: "2px solid #E5E5E5",
            borderRadius: "14px",
            outline: "none",
            fontSize: "18px",
            marginBottom: "16px"
          }}
        />

        <button
          type="submit"
          disabled={
            !playerName.trim() || isSubmitting
          }
          style={{
            width: "100%",
            border: "0",
            borderRadius: "999px",
            padding: "15px 24px",
            background: `linear-gradient(
              135deg,
              ${primaryColor},
              ${secondaryColor}
            )`,
            color: "#2B2520",
            fontSize: "18px",
            fontWeight: 800,
            cursor:
              !playerName.trim() || isSubmitting
                ? "not-allowed"
                : "pointer",
            opacity:
              !playerName.trim() || isSubmitting
                ? 0.55
                : 1
          }}
        >
          {isSubmitting
            ? "Preparando..."
            : "CONTINUAR →"}
        </button>
      </form>
    </section>
  );
}

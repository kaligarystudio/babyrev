import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid
} from "drizzle-orm/pg-core";

export const babyShowers = pgTable("baby_showers", {
  id: uuid("id").defaultRandom().primaryKey(),

  slug: text("slug").notNull().unique(),

  babyName: text("baby_name").notNull(),

  parentsName: text("parents_name"),

  eventDate: text("event_date"),

  eventTime: text("event_time"),

  location: text("location"),

  primaryColor: text("primary_color")
    .notNull()
    .default("#F7B2D8"),

  secondaryColor: text("secondary_color")
    .notNull()
    .default("#B8D8F8"),

  message: text("message"),

  isActive: boolean("is_active")
    .notNull()
    .default(true),

  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow(),

  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
});

export const players = pgTable("players", {
  id: uuid("id").defaultRandom().primaryKey(),

  babyShowerId: uuid("baby_shower_id")
    .notNull()
    .references(() => babyShowers.id, {
      onDelete: "cascade"
    }),

  playerName: text("player_name").notNull(),

  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow()
});

export const gameScores = pgTable("game_scores", {
  id: uuid("id").defaultRandom().primaryKey(),

  playerId: uuid("player_id")
    .notNull()
    .references(() => players.id, {
      onDelete: "cascade"
    }),

  score: integer("score")
    .notNull()
    .default(0),

  distance: integer("distance")
    .notNull()
    .default(0),

  bottlesCollected: integer("bottles_collected")
    .notNull()
    .default(0),

  createdAt: timestamp("created_at")
    .notNull()
    .defaultNow()
});

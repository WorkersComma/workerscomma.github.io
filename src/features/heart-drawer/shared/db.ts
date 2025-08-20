import Dexie, { type EntityTable } from "dexie";
import type { HeartDrawer } from "./types";

export const db = new Dexie("WorkersComma") as Dexie & {
  heartDrawer: EntityTable<HeartDrawer, "id">;
};

db.version(1).stores({
  heartDrawer: "++id, emotion, &date, diary", // Primary key and indexed props
});

import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  fullName: text("full_name"),
  phone: text("phone"),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  color: text("color").notNull().default("#000000"),
  archived: integer("archived", { mode: "boolean" }).notNull().default(false),
});

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey(),
  description: text("description").notNull(),
  completed: integer("completed", { mode: "boolean" }).notNull().default(false),
  projectId: integer("project_id").references(() => projects.id),
  doToday: integer("do_today", { mode: "boolean" }).notNull().default(false),
  finishedAt: integer("finished_at", { mode: "timestamp" }),
});

export type User = typeof users.$inferSelect; // return type when queried
export type InsertUser = typeof users.$inferInsert; // insert type

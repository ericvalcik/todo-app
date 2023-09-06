import type { APIRoute } from "astro";
import { type InsertUser, users } from "../db/schema";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: import.meta.env.DATABASE_URL,
  authToken: import.meta.env.DATABASE_AUTH_TOKEN,
});
const db = drizzle(client);
const insertUser = async (user: InsertUser) => {
  return await db.insert(users).values(user).execute();
};

export const POST: APIRoute = async ({ params, request }) => {
  const data = await request.formData();
  console.log(data);

  if (
    !data.has("fullName") ||
    !data.get("fullName") ||
    !data.has("phone") ||
    !data.get("phone")
  ) {
    return new Response("Missing fullName or phone", { status: 400 });
  }
  await insertUser({
    fullName: (data.get("fullName") ?? "").toString(),
    phone: (data.get("phone") ?? "").toString(),
  });
  return new Response("User inserted :)");
};

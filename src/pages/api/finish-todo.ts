import type { APIRoute } from "astro";
import { app } from "../../firebase/server";
import { getAuth } from "firebase-admin/auth";
import { todos } from "../../db/schema.ts";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);

  /* Check current session */
  if (!cookies.has("session")) {
    return redirect("/signin");
  }
  const sessionCookie = cookies.get("session")?.value ?? "";
  const decodedCookie = await auth.verifySessionCookie(sessionCookie);
  const user = await auth.getUser(decodedCookie.uid);

  if (!user) {
    return redirect("/signin");
  }

  const client = createClient({
    url: import.meta.env.DATABASE_URL,
    authToken: import.meta.env.DATABASE_AUTH_TOKEN,
  });
  const db = drizzle(client);

  // const formData = await request.formData();
  // const id = +(formData.get("id") || "0");

  await db.update(todos).set({ completed: true }).where(eq(todos.id, 6));

  return new Response("", { status: 200 });
};

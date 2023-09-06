import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.formData();
  console.log(body);

  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    }),
  );
};

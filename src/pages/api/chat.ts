import type { APIRoute } from 'astro';
import OpenAI from "openai";

const gemini = new OpenAI({
    apiKey: import.meta.env.AI_API_KEY ?? process.env.AI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const res = await fetch("https://ai-api.harumi.io.vn/", {
    method: "POST",
    headers: {
      "Authorization": "nekotte",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-generation",
      input: body.message,
    }),
  });

    return new Response(
      JSON.stringify({
        message: res.text(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error); 
    return new Response(
      JSON.stringify({
        error: 'Failed to generate response',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

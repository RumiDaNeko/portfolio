import type { APIRoute } from 'astro';
import OpenAI from "openai";

const gemini = new OpenAI({
    apiKey: import.meta.env.AI_API_KEY ?? process.env.AI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const completion = await gemini.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: body.messages,
      temperature: 0.7,
      max_tokens: 500,
  });

    return new Response(
      JSON.stringify({
        message: completion.choices[0].message,
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

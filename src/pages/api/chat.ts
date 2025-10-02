import type { APIRoute } from 'astro';
import { GoogleGenAI } from "@google/genai";

const gemini = new GoogleGenerativeAI(import.meta.env.AI_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const completion = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: body.messages,
    config: {
      thinkingConfig: {
        thinkingBudget: 10, // Disables thinking
      },
      temperature: 0.7,
      maxOutputTokens: 500,
    }
  });

    return new Response(
      JSON.stringify({
        message: completion.text,
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

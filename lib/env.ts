import { z } from 'zod';

const envSchema = z.object({
  GOOGLE_GENERATIVE_AI_API_KEY: z.string().optional(),
  GEMINI_CHAT_MODEL: z.string().default('gemini-2.5-flash'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
});

export const env = envSchema.parse(process.env);

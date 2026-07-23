import { z } from 'zod';

const envSchema = z.object({
  ANTHROPIC_API_KEY: z.string().optional(),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
});

export const env = envSchema.parse(process.env);

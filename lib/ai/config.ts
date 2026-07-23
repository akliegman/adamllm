import { google } from '@ai-sdk/google';
import { env } from '@/lib/env';

export const models = {
  chat: google(env.GEMINI_CHAT_MODEL),
} as const;

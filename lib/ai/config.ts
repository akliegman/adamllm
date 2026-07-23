const DEFAULT_CHAT_MODEL = 'claude-sonnet-5';

export const aiConfig = {
  chatModel: process.env.ANTHROPIC_CHAT_MODEL ?? DEFAULT_CHAT_MODEL,
} as const;

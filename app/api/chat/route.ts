import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { models } from '@/lib/ai/config';

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: models.chat,
    system: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}

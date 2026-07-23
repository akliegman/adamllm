import type { UIMessage } from 'ai';
import { cn } from '@/lib/utils';

export interface MessageBubbleProps {
  message: UIMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  const text = message.parts
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('');

  return (
    <div className={cn('flex', isUser ? 'justify-end' : 'justify-start')}>
      <div
        className={cn(
          'max-w-[80%] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground',
        )}
      >
        {text}
      </div>
    </div>
  );
}

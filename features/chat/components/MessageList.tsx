import type { UIMessage } from 'ai';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageBubble } from './MessageBubble';

export interface MessageListProps {
  messages: UIMessage[];
  isStreaming: boolean;
}

export function MessageList({ messages, isStreaming }: MessageListProps) {
  return (
    <ScrollArea className="flex-1">
      <div className="flex flex-col gap-3 p-4">
        {messages.length === 0 ? (
          <p className="m-auto max-w-prose py-16 text-center text-sm text-muted-foreground">Ask anything to get started.</p>
        ) : (
          messages.map((message) => <MessageBubble key={message.id} message={message} />)
        )}
        {isStreaming ? <span className="px-3 text-sm text-muted-foreground">Thinking…</span> : null}
      </div>
    </ScrollArea>
  );
}

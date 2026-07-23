'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { SendHorizonal } from 'lucide-react';
import { type FormEvent, type KeyboardEvent, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageList } from './MessageList';

export function Chat() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    onError: (error) => toast.error(error.message || 'Something went wrong.'),
  });

  const isBusy = status === 'submitted' || status === 'streaming';

  function submit() {
    const text = input.trim();
    if (!text || isBusy) return;
    setInput('');
    void sendMessage({ text });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <div className="flex h-full flex-col">
      <MessageList messages={messages} isStreaming={status === 'submitted'} />
      <form onSubmit={handleSubmit} className="flex items-end gap-2 border-t p-4">
        <Textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Send a message…"
          rows={1}
          className="max-h-40 min-h-10 flex-1 resize-none"
        />
        <Button type="submit" size="icon" disabled={!input.trim() || isBusy} aria-label="Send message">
          <SendHorizonal />
        </Button>
      </form>
    </div>
  );
}

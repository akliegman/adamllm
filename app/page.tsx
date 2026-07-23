import { Chat } from '@/features/chat';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center p-4">
      <div className="flex h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-lg border">
        <Chat />
      </div>
    </main>
  );
}

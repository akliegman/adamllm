import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { toast } from 'sonner';
import { Button } from './button';
import { Toaster } from './sonner';

const meta = {
  title: 'ui/Sonner',
  component: Toaster,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Button variant="outline" onClick={() => toast('Response saved', { description: 'Added to your history.' })}>
        Show toast
      </Button>
      <Toaster />
    </>
  ),
};

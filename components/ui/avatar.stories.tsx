import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
  ),
};

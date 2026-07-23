import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from './textarea';

const meta = {
  title: 'ui/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { placeholder: 'Ask anything…', className: 'w-80' },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };

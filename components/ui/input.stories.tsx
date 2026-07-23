import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';

const meta = {
  title: 'ui/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { placeholder: 'Type here…' },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const WithValue: Story = { args: { defaultValue: 'adam@example.com', type: 'email' } };

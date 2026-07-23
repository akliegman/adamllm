import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';
import { Label } from './label';

const meta = {
  title: 'ui/Label',
  component: Label,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Email' } };

export const WithInput: Story = {
  render: () => (
    <div className="grid w-64 gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="adam@example.com" />
    </div>
  ),
};

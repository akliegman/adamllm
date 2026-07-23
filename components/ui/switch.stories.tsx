import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';
import { Switch } from './switch';

const meta = {
  title: 'ui/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="stream" defaultChecked />
      <Label htmlFor="stream">Stream responses</Label>
    </div>
  ),
};

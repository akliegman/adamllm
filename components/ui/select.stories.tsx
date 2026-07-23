import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './select';

const meta = {
  title: 'ui/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select defaultValue="sonnet">
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Select a model" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Anthropic</SelectLabel>
          <SelectItem value="opus">Opus 4.8</SelectItem>
          <SelectItem value="sonnet">Sonnet 5</SelectItem>
          <SelectItem value="haiku">Haiku 4.5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

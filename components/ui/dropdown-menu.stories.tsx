import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

const meta = {
  title: 'ui/DropdownMenu',
  component: DropdownMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Model</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Anthropic</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Opus 4.8</DropdownMenuItem>
        <DropdownMenuItem>Sonnet 5</DropdownMenuItem>
        <DropdownMenuItem>Haiku 4.5</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

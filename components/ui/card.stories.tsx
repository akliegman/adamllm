import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: 'ui/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>New conversation</CardTitle>
        <CardDescription>Start a chat with the model.</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            Clear
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm">Nothing here yet.</CardContent>
      <CardFooter>
        <Button className="w-full">Send</Button>
      </CardFooter>
    </Card>
  ),
};

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('renders its children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders as a child element when asChild is set', () => {
    render(
      <Button asChild>
        <a href="/next">Open next page</a>
      </Button>,
    );
    const link = screen.getByRole('link', { name: 'Open next page' });
    expect(link).toHaveAttribute('href', '/next');
  });
});

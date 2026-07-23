# adamllm

A Next.js application.

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind v4** — CSS-first, tokens in `app/globals.css`, no `tailwind.config`
- **shadcn** — radix primitives, neutral base; components in `components/ui`, each with a co-located Storybook story
- **next-themes** — class-based dark mode
- **Biome** — lint + format (2-space, single quotes, 140 width)
- **Vitest** + Testing Library (unit) and **Storybook** browser tests
- **Playwright** — e2e in `e2e/`
- **Zod** — validated env in `lib/env.ts`; model ids in `lib/ai/config.ts`, never hardcoded

## Commands

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm lint:fix       # biome
pnpm typecheck      # tsc --noEmit
pnpm test           # vitest (unit + storybook browser projects)
pnpm test:e2e       # playwright
pnpm storybook      # storybook dev on :6006
pnpm build
```

Unit tests only (skip the Storybook browser project): `pnpm exec vitest run --project '!storybook'`.

## Layout

```
app/                  App Router routes, globals.css (Tailwind + design tokens)
components/
  ui/                 shadcn components + co-located *.stories.tsx
  theme-provider.tsx  next-themes wrapper
lib/
  utils.ts            cn()
  env.ts              zod-validated environment
  ai/config.ts        model configuration
e2e/                  playwright specs
.storybook/           storybook config
__adam/               plans, audits, working docs
```

## Conventions

Semantic tokens only (`bg-primary`, `text-muted-foreground`), never raw color primitives. Compose
with `cn` from `@/lib/utils`. New UI components get a co-located story so Storybook stays the source
of truth for the component catalog.

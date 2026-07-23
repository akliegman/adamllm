# adamllm

A Next.js application. LLM product surface.

## Commands

| Purpose | Command |
|---|---|
| install | `pnpm install` |
| dev | `pnpm dev` |
| lint | `pnpm lint:fix` |
| typecheck | `pnpm typecheck` |
| unit tests | `pnpm test` |
| e2e tests | `pnpm test:e2e` |
| storybook | `pnpm storybook` |
| build | `pnpm build` |

After any substantive change: `pnpm lint:fix`, then `pnpm typecheck`. Both must pass before the work
is done.

Local dev URL: `http://localhost:3000`

## Stack

- Next.js 16, App Router, React 19, Turbopack.
- Tailwind v4 (CSS-first, `@theme inline` in `app/globals.css` — no `tailwind.config`).
- shadcn (radix primitives, neutral base), components in `components/ui`. Dark mode via `next-themes`
  class strategy; the token layer lives in `app/globals.css`.
- Biome for lint and format (not ESLint/Prettier). 2-space, single quotes, 140 width.
- Vitest + Testing Library for unit; Storybook browser tests via `@storybook/addon-vitest`; Playwright
  for e2e in `e2e/`.
- Zod-validated env in `lib/env.ts`. Model ids come from `lib/ai/config.ts` / env, never hardcoded.

## Conventions

- `cn` from `@/lib/utils`. Semantic tokens (`bg-primary`, `text-muted-foreground`), never raw color
  primitives.
- `pnpm test` runs both the jsdom unit project and the Storybook browser project. Unit-only:
  `pnpm exec vitest run --project '!storybook'`.

## Gotchas

- Biome does not lint `app/globals.css` or `public/` (Tailwind at-rules and static SVGs) — see the
  `includes` negations in `biome.json`.
- `pnpm-workspace.yaml` allowlists `sharp`'s build and sets `verifyDepsBeforeRun: false`; without the
  latter, pnpm 11 aborts `pnpm exec`/`pnpm run` over the ignored-build warning.

## Boundaries

- Secrets live in `.env.local`, gitignored. Never read them, never echo them, never copy a value into
  a fixture, a comment, or a commit.
- Never `git commit`, `git push`, deploy, or run a migration against a remote without explicit
  approval immediately beforehand.
- Plans, audits, and review notes go in `__adam/` at this repository's root.

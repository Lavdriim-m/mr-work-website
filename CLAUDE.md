# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:3000
pnpm build      # Production build
pnpm start      # Serve production build
```

Package manager is **pnpm** (v12). There is no lint script and no test suite.

## Architecture

This is a **single-page marketing website** for MR Work AG (a Swiss staffing agency). The entire site lives in two files:

- `app/page.tsx` — all page content and sections as one `'use client'` component
- `app/globals.css` — all styling as hand-written, minified CSS (no Tailwind utility classes in JSX)

**CSS approach**: Tailwind is installed but styles are written as named CSS classes in `globals.css` (`.hero`, `.service-card`, etc.), not as inline utility classes. CSS custom properties define the color palette:

| Variable | Use |
|---|---|
| `--ink` | Primary text (`#050505`) |
| `--teal` | Accent / brand blue (`#3d8df5`) |
| `--sand` | Light background (`#e8eef7`) |
| `--paper` | Off-white background (`#f7f9fc`) |
| `--forest` | Dark section background (`#0a0a0a`) |
| `--muted` | Secondary text (`#5e6875`) |

**Typography**: Georgia serif for headings/display; Arial for body. Headings use `.hero h1, h2 { font-family: Georgia }` via CSS.

**Sections** (in order): header → hero → proof-strip → services → industries → process → difference → contact → footer. All are anchor-linked (`#leistungen`, `#branchen`, `#prozess`, `#kontakt`).

**UI components**: shadcn/ui is configured (`components.json`) with the `base-nova` style and Lucide icons. Only `components/ui/button.tsx` exists — icons from `lucide-react` are used directly in `page.tsx`.

**Analytics**: `@vercel/analytics` is included in `layout.tsx`, rendered only in production.

**Next.js config**: TypeScript build errors are ignored (`ignoreBuildErrors: true`) and image optimization is disabled (`unoptimized: true`).

**Content language**: German (Swiss). `<html lang="de-CH">`.

## Adding shadcn components

```bash
pnpm dlx shadcn@latest add <component>
```

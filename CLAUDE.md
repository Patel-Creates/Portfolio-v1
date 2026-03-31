# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Development server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```


No test framework is configured.

## Architecture

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion 12 + shadcn/ui

This is a single-page portfolio site. All sections (About, Experience, Education, Projects) live in `src/app/page.tsx` and are linked via anchor IDs.

### Key pattern: data-driven content

All portfolio content (personal info, experience, education, projects) is centralized in `src/lib/content.ts` with TypeScript types. Components import from there — to update any content, only edit that file.

### Component structure

- `src/components/ui/` — shadcn/ui base components (do not modify directly; regenerate via `npx shadcn@latest add <component>`)
- `src/components/*.tsx` — section components (header, about, experience, education, projects, footer)
- `src/lib/utils.ts` — `cn()` helper for merging Tailwind classnames
- `src/app/globals.css` — Tailwind v4 directives + OKLCH-based design tokens for light/dark themes

### Styling

Uses Tailwind CSS v4 with `@tailwindcss/postcss`. Theme colors are CSS custom properties defined in `globals.css` using OKLCH color space. Dark mode is handled by `next-themes` via `ThemeProvider` in the root layout.

### Path alias

`@/*` maps to `./src/*`.
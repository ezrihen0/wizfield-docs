# WizField Docs

This repository contains the public docs site for WizField. It is a Next.js and Fumadocs application for publishing structured product knowledge at `docs.wizfield.com`.

## Development

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Project Structure

- `content/docs`: Public MDX pages published under `/docs`.
- `internal`: Internal planning, writing standards, and content backlog files. Do not publish these files as public docs pages.
- `src/lib/source.ts`: Fumadocs content source adapter.
- `src/lib/layout.shared.tsx`: Shared Fumadocs layout options.
- `src/app/api/search/route.ts`: Search route for the docs site.
- `src/app/llms.txt/route.ts`: LLM index route.
- `src/app/llms-full.txt/route.ts`: Full LLM-readable docs export route.

## Content Rules

Public docs pages must follow `internal/WizField_Public_Knowledge_Standard_v1.md`. Internal planning files, execution prompts, verification logs, and implementation-only notes must remain internal.

Before publishing a public docs page:

1. Confirm the page exists in `internal/WizField_Docs_Content_Backlog_v1.md`.
2. Verify the page against canonical product truth.
3. Include required frontmatter with `title` and `description`.
4. Start the page with a direct opening answer block.
5. Avoid publishing roadmap work as current product behavior.

## Verification

Run these checks before handoff:

```bash
npm run lint
npm run types:check
npm run build
```

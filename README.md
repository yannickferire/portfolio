# [yannickferire.be](https://yannickferire.be)

A minimal, pixel-perfect dev portfolio, shadcn registry, and blog.

→ Check out the live site: [yannickferire.be](https://yannickferire.be)

## Overview

### Stack

- Next.js 16
- Tailwind CSS v4
- shadcn/ui

### Featured

- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA
- Analytics with [PostHog](https://posthog.com) and [OpenPanel](https://openpanel.dev)
- Consent management via [c15t](https://c15t.com)

### Content

Centralized document system powered by MDX:

- Unified content layer for blog posts and component docs
- Category-based content organization
- Raw `.mdx` endpoints for AI readability
- Syntax highlighting with code blocks
- Dynamic OG images for rich link previews
- RSS feed for content distribution

### Registry

Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).

Each entry is well-documented and includes:

- Live preview & code snippets
- Beautiful, readable code blocks
- One-click command blocks (pnpm, npm, yarn, bun)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.x (LTS)
- [pnpm](https://pnpm.io/) >= 9
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone <your-repo-url> portfolio
cd portfolio

# Install dependencies
pnpm install
```

### Environment Variables

```bash
cp .env.example .env.local
```

Then update the necessary variables inside `.env.local`.

### Development Server

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm start
```

### Other Commands

```bash
pnpm lint            # Run ESLint
pnpm lint:fix        # Fix ESLint issues
pnpm format:check    # Check formatting with Prettier
pnpm format:write    # Fix formatting with Prettier
pnpm check-types     # TypeScript type checking
pnpm registry:build  # Build shadcn registry
```

## License

Licensed under the [MIT license](./LICENSE).

Based on [chanhdai.com](https://github.com/ncdai/chanhdai.com) by Nguyen Chanh Dai.

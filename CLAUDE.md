# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Renato Lagos built with Astro, showcasing projects, skills, and contact information. The site uses a hybrid approach combining Astro for static pages with React components for interactive elements.

**Live Site**: https://porfolio-renatolagos-projects.vercel.app/

## Development Commands

```bash
# Start development server
npm run dev
# or
npm start

# Build for production (includes type checking and sitemap generation)
npm run build

# Preview production build
npm run preview

# Run Astro commands directly
npm run astro
```

## Architecture

### Hybrid Rendering Strategy

The project uses Astro's island architecture with strategic hydration:

- **Astro Pages** ([src/pages/](src/pages/)): Static pages (`index.astro`, `about.astro`, `contact.astro`, `projects.astro`)
- **React Modules** ([src/modules/](src/modules/)): Interactive sections hydrated with client directives
  - `client:load` - Hero, Header (immediate interactivity needed)
  - `client:visible` - About, Projects, Contact, LogosSlider (lazy load on scroll)

### File Structure

```
src/
├── components/        # Reusable UI components (Button, Form, Navigation, etc.)
├── modules/           # Page sections (Hero, About, Projects, Contact, Header, Footer)
├── pages/             # Astro pages (routes)
├── layouts/           # Layout wrapper (Layout.astro)
├── static/
│   ├── images/        # Images with index.tsx exporter
│   ├── icons/         # SVG icons
│   └── fonts/         # Roboto font files
└── utils/             # Utilities (animations, theme toggle)
```

### Path Aliases

Configured in [tsconfig.json](tsconfig.json:8-16):

```typescript
@components/*  → src/components/*
@modules/*     → src/modules/*
@styles/*      → src/styles/*
@layouts/*     → src/layouts/*
@pages/*       → src/pages/*
@static/*      → src/static/*
@utils/*       → src/utils/*
@data/*        → src/data/*
```

### Styling Architecture

- **Emotion (CSS-in-JS)**: All components use styled-components pattern
- **File Pattern**: Each module/component has `index.tsx` (logic) and `styled.ts` (styles)
- **Global Styles**: Normalize CSS injected via `<Global>` in Layout.astro
- **Theme System**: Light theme stored in localStorage, loaded via inline script in Layout.astro to prevent flash

### Component Pattern

Standard component structure:
```
ComponentName/
├── index.tsx    # Component logic
└── styled.ts    # Emotion styled components
```

Import pattern: `import * as S from "./styled"`

### Images Management

All images centrally exported from [src/static/images/index.tsx](src/static/images/index.tsx):

- Custom `<Image>` component supports both local (`srcLocal`) and external (`src`) images
- Local images referenced by key from `images` object
- Supports Astro's ImageMetadata type for optimization

### Projects Data

Projects are defined in data files ([src/modules/Projects/data/](src/modules/Projects/data/)):
- `HomepageData.ts` - Featured projects for homepage
- `ProjectsData.ts` - All projects for projects page

Each project includes: title, image, links, tech stack, date, client, and content.

### Animations

- **AOS (Animate On Scroll)**: Used via `FadeIn` utility component
- **GSAP**: Available for complex animations
- **Swiper**: Used in `LogosSlider` component for carousel

### Build Process

The build command chains three operations:
1. `astro check` - TypeScript validation
2. `astro build` - Static site generation
3. `node sitemap.cjs` - Generates sitemap.xml in dist/

Note: [sitemap.cjs](sitemap.cjs:10) currently has placeholder hostname "https://example.org" - update before deployment.

## Key Considerations

### React in Astro Context

- React components must be explicitly hydrated with client directives
- Use appropriate directive based on interactivity needs (load vs visible vs idle)
- Forms and interactive elements require `client:load` or `client:visible`

### TypeScript Configuration

- Extends Astro's strict tsconfig
- JSX configured for React (`react-jsx`, `jsxImportSource: react`)
- Path aliases reduce relative import complexity

### Performance Optimizations

- Vite compression plugin enabled
- Strategic component hydration (islands architecture)
- WebP images for optimal loading
- Static site generation for fast initial load

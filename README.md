# Bluetigercub Portfolio

A beautiful, responsive portfolio website for a graphic designer built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive design** that works on all screen sizes
- **Project showcase** with detailed project pages
- **About section** with bio, disciplines, and colophon
- **Navigation** between projects
- **Clean, minimal typography** focused on the work
- **Color system** from the design specification

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Project Structure

```
src/
├── components/        # Reusable React components
│   ├── Header.tsx    # Navigation header
│   ├── Footer.tsx    # Footer with contact/socials
│   ├── ProjectCard.tsx
│   └── ProjectGrid.tsx
├── pages/            # Page components
│   ├── Home.tsx      # Portfolio index
│   ├── About.tsx     # About page
│   └── ProjectDetail.tsx  # Individual project pages
├── data/
│   └── portfolio.ts  # Portfolio data & config (SINGLE SOURCE OF TRUTH)
├── App.tsx           # Main app component with routing
├── main.tsx          # React entry point
└── index.css         # Global styles & Tailwind
```

## Customization

### Updating Portfolio Data

All content lives in **`src/data/portfolio.ts`** — this is your single source of truth.

- **Projects**: Edit the `portfolio` array to add/remove/update projects
- **Site Config**: Update the `config` object for site name, email, socials, etc.
- **About**: Modify the `about` object for bio, disciplines, portrait, etc.
- **Colors**: Update the `colors` object (also mirror in `tailwind.config.js`)

### Adding Images

1. Replace placeholder URLs in `src/data/portfolio.ts`
2. For local images, put them in `public/images/` and reference as `/images/filename.jpg`
3. Update image alts and layout hints as needed

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Components use Tailwind utility classes throughout

## Tech Stack

- **React 18** — UI library
- **React Router v6** — Client-side routing
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first CSS
- **Vite** — Build tool & dev server

## License

© 2025 Bluetigercub

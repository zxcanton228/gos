# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install        # install deps
bun dev            # dev server → http://localhost:5173
bun build          # production build
bun preview        # preview production build
```

## Architecture

React 18 SPA with React Router and Vite PWA. Mobile-only layout (max-width 430 px, centered).

**Routes**
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage` | Dashboard with pills, banner cards, document/service grids, bottom nav |
| `/passport` | `PassportPage` | Visual passport card — RF layout with watermark |
| `/passport/details` | `PassportDetailsPage` | Field list + photo upload card |

**Key files**
- `src/index.css` — all styles via CSS custom properties; no CSS modules or styled-components
- `src/components/BottomNav.jsx` — fixed bottom nav, receives `active` prop
- All icons are inline SVGs defined at the top of each page file

**Style conventions**
- CSS variables live in `:root` inside `index.css` (`--bg`, `--card`, `--blue`, `--red`, etc.)
- Dark theme throughout; passport card uses light pinkish background (`#f8ecec`) as exception
- Scrollable rows (pills, banners) use `overflow-x: auto` with `scrollbar-width: none`

# Flimty Admin

Internal administration dashboard for managing Flimty agents, team members, landing pages, and analytics.

## Tech Stack

- **Vue 3** — Composition API
- **Vite** — Build tool
- **Vue Router** — Routing
- **Pinia** — State management
- **Tailwind CSS 4** — Styling
- **FastAPI** — Backend (agenv3.flimty.co)

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Production build
yarn build

# Preview production build
yarn preview
```

## Environment Variables

```env
VITE_API_BASE_URL=https://agenv3.flimty.co/v1
VITE_API_TIMEOUT=30000
```

## Pages

### Auth (no sidebar)
- `/login` — Admin login
- `/register` — Admin registration
- `/forgot-password` — Password recovery
- `/reset-password` — Password reset

### Admin (with sidebar)
- `/dashboard` — Overview
- `/analytics` — Analytics & statistics
- `/agents` — Agent management
- `/agents/table` — Agent table view
- `/team` — Team management
- `/landing` — Landing page management
- `/profile` — User profile

## API Endpoints

| Category | Base Path |
|----------|-----------|
| Auth | `/auth/*` |
| Dashboard | `/dashboard/*` |
| Admin | `/admin/*` |
| Users | `/users/*` |
| Tasks | `/tasks/*` |

See [docs/SPEC.md](docs/SPEC.md) for full API documentation.

## Related Projects

| Project | Description |
|---------|-------------|
| [flimty-backend](https://github.com/your-org/flimty-backend) | FastAPI backend |
| [flimty-agen-embed](https://github.com/your-org/flimty-agen-embed) | Agent embed widget |
| [dash-1](https://github.com/your-org/dash-1) | Agent dashboard frontend |

## Changelog

See [docs/CHANGELOG.md](docs/CHANGELOG.md) for full version history.

---

Last updated: 2026-04-21

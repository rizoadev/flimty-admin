# SPEC.md — Flimty Admin

## Overview

Flimty Admin is an internal administration dashboard for managing Flimty agents, team members, landing pages, and analytics. Built with Vue 3 + Vite as the frontend, integrated with FastAPI backend.

## Tech Stack

- **Frontend:** Vue 3 (Composition API), Vite, Vue Router, Pinia
- **Styling:** Tailwind CSS 4
- **State Management:** Pinia
- **HTTP Client:** Fetch API (custom apiService)
- **Backend:** FastAPI (agenv3.flimty.co)

## Project Structure

```
flimty-admin/
├── pages/                    # Page components
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable Vue components
│   ├── layouts/            # Layout components (auth, admin)
│   ├── router/index.js     # Vue Router configuration
│   ├── services/api.js     # API service layer
│   ├── stores/             # Pinia stores
│   ├── views/              # Page views by domain
│   ├── App.vue
│   ├── main.js
│   └── style.css           # Global styles
├── docs/                    # Documentation
├── public/                 # Public assets
├── index.html
├── vite.config.js
├── package.json
└── tailwind.config.js
```

## Pages & Routes

### Auth Pages (no sidebar layout)
| Route | Component | Description |
|-------|-----------|-------------|
| `/login` | Login.vue | Admin login |
| `/register` | Register.vue | Admin registration |
| `/forgot-password` | ForgotPassword.vue | Password recovery request |
| `/reset-password` | ResetPassword.vue | Password reset form |

### Admin Pages (with sidebar layout)
| Route | Component | Description |
|-------|-----------|-------------|
| `/dashboard` | Dashboard.vue | Admin dashboard overview |
| `/analytics` | Analytics.vue | Analytics & statistics |
| `/agents` | AgentManagement.vue | Agent management |
| `/agents/table` | AgentTable.vue | Agent data table view |
| `/team` | TeamManagement.vue | Team member management |
| `/landing` | LandingManagement.vue | Landing page management |
| `/profile` | MyProfile.vue | Current user profile |
| `/logout` | LogoutConfirmation.vue | Logout confirmation |

## API Integration

### Base URL
```
Production: https://agenv3.flimty.co/v1
Development: http://localhost:8000/v1
```

### Environment Variables
```env
VITE_API_BASE_URL=https://agenv3.flimty.co/v1
VITE_API_TIMEOUT=30000
```

### Auth Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /auth/login | User login |
| POST | /auth/register | User registration |
| POST | /auth/logout | User logout |
| GET | /auth/verify | Verify token |
| GET | /auth/me | Get current user |

### Dashboard Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /dashboard/stats | Dashboard statistics |
| GET | /dashboard/analytics | Analytics data |
| GET | /dashboard/overview | Dashboard overview |

### Admin Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /admin/users | List admin users |
| POST | /admin/users | Create admin user |
| PUT | /admin/users/{id} | Update admin user |
| DELETE | /admin/users/{id} | Delete admin user |
| GET | /admin/agents | List agents |
| POST | /admin/agents | Create agent |
| PUT | /admin/agents/{id} | Update agent |
| DELETE | /admin/agents/{id} | Delete agent |

### User Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | List users |
| GET | /users/{id} | Get user by ID |
| POST | /users | Create user |
| PUT | /users/{id} | Update user |
| DELETE | /users/{id} | Delete user |

### Task Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | List tasks |
| GET | /tasks/{id} | Get task by ID |
| POST | /tasks | Create task |
| PUT | /tasks/{id} | Update task |
| DELETE | /tasks/{id} | Delete task |

## Features (Planned)

### Phase 1 — Current
- [x] Admin authentication (login, register, logout)
- [x] Password management (forgot, reset)
- [x] Dashboard overview
- [x] Agent management
- [x] Team management
- [x] Landing page management
- [x] User profile

### Phase 2 — Analytics
- [ ] Admin Dashboard — comprehensive metrics
- [ ] Embed Tracker — track embed widget interactions
- [ ] Pixel Tracker — analytics pixel tracking
- [ ] Data Tracker — ClickHouse integration for event storage

## Environment Setup

```bash
# Install dependencies
yarn install

# Development server
yarn dev

# Production build
yarn build

# Preview production build
yarn preview
```

## Environment Variables

Create `.env` file:
```env
VITE_API_BASE_URL=http://localhost:8000/v1
VITE_API_TIMEOUT=30000
```

For production (Cloudflare Pages), set in dashboard:
```
VITE_API_BASE_URL=https://agenv3.flimty.co/v1
```

## Authentication Flow

1. User enters email/password at `/login`
2. Backend validates and returns JWT token
3. Token stored in `localStorage` as `token`
4. All API requests include `Authorization: Bearer <token>`
5. Auth store hydrates from localStorage on app mount
6. Router guards redirect unauthenticated users to `/login`

## Deployment

### Cloudflare Pages
```bash
yarn build
# Upload dist/ folder to Cloudflare Pages
```

Set environment variables in Cloudflare Pages dashboard:
- `VITE_API_BASE_URL`: `https://agenv3.flimty.co/v1`

### Build Output
- Output directory: `dist/`
- Entry point: `index.html`
- SPA routing enabled (all routes serve index.html)

## Related Projects

| Project | Path | Description |
|---------|------|-------------|
| flimty-backend | /home/rizoa/PROJECTS/flimty-backend/ | FastAPI backend |
| flimty-agen-embed | /home/rizoa/PROJECTS/flimty-agen-embed/ | Agent embed widget |
| dash-1 | /home/rizoa/PROJECTS/dash-1/ | Agent dashboard frontend |

## Last Updated

2026-04-21

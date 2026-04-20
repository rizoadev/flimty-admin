# Changelog — Flimty Admin

All notable changes to the Flimty Admin dashboard.

## [2026-04-21] — Feature: Backend Integration Update

### Changed
- **API Base URL:** Updated to `https://agenv3.flimty.co/v1`
- **Login flow:** Integrated with FastAPI backend auth endpoints
- **Auth store:** Added hydration from localStorage on app mount

### Files Modified
- `src/services/api.js` — Complete API service layer
- `src/main.js` — Added Pinia initialization and auth hydration
- `vite.config.js` — Added Tailwind CSS plugin
- `package.json` — Added Tailwind CSS dependencies

### Technical Details
- JWT token stored in `localStorage` as `token`
- All API requests include `Authorization: Bearer <token>` header
- 401 responses trigger automatic logout and redirect to `/login`

---

## [2026-04-19] — Initial Release

### Added
- Vue 3 + Vite project setup
- Tailwind CSS 4 styling
- Vue Router with auth guards
- Pinia state management
- Authentication pages (login, register, forgot password, reset password)
- Admin dashboard layout with sidebar
- Dashboard overview page
- Agent management pages (table view)
- Team management page
- Landing page management
- User profile page
- Logout confirmation page

### Pages Created
- `pages/admin_analytics_statistics/`
- `pages/admin_dashboard/`
- `pages/admin_login_1/`
- `pages/admin_login_2/`
- `pages/admin_login_3/`
- `pages/admin_logout_confirmation_1/`
- `pages/admin_logout_confirmation_2/`
- `pages/admin_reset_password_1/`
- `pages/admin_reset_password_2/`
- `pages/admin_reset_password_centered_layout/`
- `pages/agent_management_full_table/`
- `pages/evergreen_atlas/`
- `pages/manage_agents_1/`
- `pages/manage_agents_2/`
- `pages/manage_agents_3/`
- `pages/manage_landing_page/`
- `pages/manage_team/`
- `pages/my_profile/`
- `pages/registration_form_desktop/`

### Tech Stack
- Vue 3.5 (Composition API)
- Vite 8
- Vue Router 4
- Pinia 3
- Tailwind CSS 4

---

## Planned Features

### Analytics & Tracking (Phase 2)
- [ ] Admin Dashboard — comprehensive metrics view
- [ ] Embed Tracker — track embed widget interactions
- [ ] Pixel Tracker — analytics pixel tracking
- [ ] Data Tracker — ClickHouse integration for event storage

---

*Format based on [Keep a Changelog](https://keepachangelog.com/)*

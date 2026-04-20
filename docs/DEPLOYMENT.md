# Deployment Guide — Flimty Admin

## Production Deployment

### Cloudflare Pages

1. **Build the project**
   ```bash
   yarn build
   ```

2. **Upload to Cloudflare Pages**
   - Go to Cloudflare Dashboard → Pages → Create a project
   - Connect your GitHub repository OR
   - Drag and drop the `dist/` folder

3. **Set environment variables**
   ```
   VITE_API_BASE_URL=https://agenv3.flimty.co/v1
   ```

4. **Configure build settings**
   - Build command: `yarn build`
   - Build output directory: `dist`
   - Root directory: `/`

5. **Custom Domain (optional)**
   - Add custom domain in Pages settings
   - Configure DNS as instructed

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | `http://localhost:8000/v1` |
| `VITE_API_TIMEOUT` | API request timeout (ms) | `30000` |

## Production URLs

| Environment | URL |
|-------------|-----|
| Production | `https://flimty-admin.pages.dev` (or custom domain) |
| Staging | `https://staging.flimty-admin.pages.dev` |
| Development | `http://localhost:5173` |

## Backend Requirements

The admin dashboard requires the FastAPI backend running at `agenv3.flimty.co`.

Ensure the following endpoints are available:
- `POST /v1/auth/login`
- `POST /v1/auth/register`
- `GET /v1/auth/me`
- `POST /v1/auth/logout`
- `GET /v1/dashboard/*`
- `GET/POST/PUT/DELETE /v1/admin/*`
- `GET/POST/PUT/DELETE /v1/users/*`

## Post-Deployment Checklist

- [ ] Verify login flow works
- [ ] Check all admin pages load correctly
- [ ] Test authenticated API calls
- [ ] Verify console for errors
- [ ] Check mobile responsiveness
- [ ] Monitor API response times

## Troubleshooting

### CORS Errors
Ensure the backend has Cloudflare Pages domain in CORS allowed origins.

### 401 Unauthorized
- Check if `VITE_API_BASE_URL` is set correctly
- Verify JWT token is being sent in Authorization header
- Check if token has expired

### Build Failures
- Ensure Node.js version is 18+
- Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
- Clear Vite cache: `rm -rf node_modules/.vite`

---

Last updated: 2026-04-21

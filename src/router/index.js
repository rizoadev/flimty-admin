import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  // Auth Pages (no sidebar layout)
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: () => import('../views/auth/Login.vue'), meta: { layout: 'auth' } },
  { path: '/register', name: 'Register', component: () => import('../views/auth/Register.vue'), meta: { layout: 'auth' } },
  { path: '/forgot-password', name: 'ForgotPassword', component: () => import('../views/auth/ForgotPassword.vue'), meta: { layout: 'auth' } },
  { path: '/reset-password', name: 'ResetPassword', component: () => import('../views/auth/ResetPassword.vue'), meta: { layout: 'auth' } },

  // Dashboard Pages (with sidebar layout)
  { path: '/dashboard', name: 'Dashboard', component: () => import('../views/dashboard/Dashboard.vue'), meta: { layout: 'admin', requiresAuth: true } },
  { path: '/analytics', name: 'Analytics', component: () => import('../views/analytics/Analytics.vue'), meta: { layout: 'admin', requiresAuth: true } },

  // Agent Management
  { path: '/agents', name: 'Agents', component: () => import('../views/agents/AgentManagement.vue'), meta: { layout: 'admin', requiresAuth: true } },
  { path: '/agents/table', name: 'AgentsTable', component: () => import('../views/agents/AgentTable.vue'), meta: { layout: 'admin', requiresAuth: true } },

  // Team Management
  { path: '/team', name: 'Team', component: () => import('../views/team/TeamManagement.vue'), meta: { layout: 'admin', requiresAuth: true } },

  // Landing Page Management
  { path: '/landing', name: 'Landing', component: () => import('../views/landing/LandingManagement.vue'), meta: { layout: 'admin', requiresAuth: true } },

  // Profile
  { path: '/profile', name: 'Profile', component: () => import('../views/profile/MyProfile.vue'), meta: { layout: 'admin', requiresAuth: true } },

  // Logout Confirmation
  { path: '/logout', name: 'Logout', component: () => import('../views/auth/LogoutConfirmation.vue'), meta: { layout: 'admin', requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router

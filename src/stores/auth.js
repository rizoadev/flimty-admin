import { defineStore } from 'pinia'
import { apiService } from '@/services/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    loading: false,
    error: null
  }),

  actions: {
    async login(credentials) {
      this.loading = true
      this.error = null
      try {
        const response = await apiService.login(credentials)
        this.token = response.token
        this.user = response.user
        this.isAuthenticated = true
        localStorage.setItem('token', response.token)
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData) {
      this.loading = true
      this.error = null
      try {
        const response = await apiService.register(userData)
        this.token = response.token
        this.user = response.user
        this.isAuthenticated = true
        localStorage.setItem('token', response.token)
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async logout() {
      this.loading = true
      try {
        if (this.token) {
          await apiService.logout(this.token)
        }
        this.token = null
        this.user = null
        this.isAuthenticated = false
        localStorage.removeItem('token')
      } catch (error) {
        console.error('Logout error:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchCurrentUser() {
      if (this.token) {
        this.loading = true
        try {
          this.user = await apiService.getCurrentUser(this.token)
        } catch (error) {
          console.error('Failed to fetch user:', error)
          this.isAuthenticated = false
          localStorage.removeItem('token')
          this.token = null
        } finally {
          this.loading = false
        }
      }
    },

    hydrate() {
      const savedToken = localStorage.getItem('token')
      if (savedToken) {
        this.token = savedToken
        this.isAuthenticated = true
      }
    }
  }
})
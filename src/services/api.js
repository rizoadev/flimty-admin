// API Service for Flimty Backend Integration
// Handles all HTTP requests to the FastAPI backend

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/v1'
const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000

class ApiService {
  constructor() {
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const config = {
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      },
      ...options
    }

    // Add auth token if available
    const token = localStorage.getItem('token')
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, config)
      
      // Handle 401 Unauthorized
      if (response.status === 401) {
        console.warn('Unauthorized access - clearing token')
        localStorage.removeItem('token')
        window.location.href = '/login'
        throw new Error('Unauthorized')
      }

      // Handle 403 Forbidden
      if (response.status === 403) {
        throw new Error('Access forbidden')
      }

      // Handle 404 Not Found
      if (response.status === 404) {
        throw new Error('Resource not found')
      }

      // Handle other error statuses
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `API Error: ${response.status} ${response.statusText}`)
      }

      // Parse JSON response
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        return await response.json()
      } else {
        return await response.text()
      }
    } catch (error) {
      console.error('API request failed:', {
        url,
        method: config.method || 'GET',
        error: error.message,
        status: error.status
      })
      
      // Re-throw for caller to handle
      throw error
    }
  }

  // === Auth Endpoints ===
  
  async login(credentials) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  }

  async register(userData) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
  }

  async logout(token) {
    return this.request('/auth/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async verifyToken(token) {
    return this.request('/auth/verify', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async getCurrentUser(token) {
    return this.request('/auth/me', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  // === User Management Endpoints ===
  
  async getUsers(token, params = {}) {
    const query = new URLSearchParams(params).toString()
    const queryString = query ? `?${query}` : ''
    return this.request(`/users${queryString}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async getUserById(token, userId) {
    return this.request(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async createUser(userData, token) {
    return this.request('/users', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userData)
    })
  }

  async updateUser(userId, userData, token) {
    return this.request(`/users/${userId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userData)
    })
  }

  async deleteUser(userId, token) {
    return this.request(`/users/${userId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  // === Dashboard Endpoints ===
  
  async getDashboardStats(token, params = {}) {
    const query = new URLSearchParams(params).toString()
    const queryString = query ? `?${query}` : ''
    return this.request(`/dashboard/stats${queryString}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async getAnalytics(token, params = {}) {
    const query = new URLSearchParams(params).toString()
    const queryString = query ? `?${query}` : ''
    return this.request(`/dashboard/analytics${queryString}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async getDashboardOverview(token) {
    return this.request('/dashboard/overview', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  // === Admin Endpoints ===
  
  async getAdminUsers(token, params = {}) {
    const query = new URLSearchParams(params).toString()
    const queryString = query ? `?${query}` : ''
    return this.request(`/admin/users${queryString}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async createAdminUser(userData, token) {
    return this.request('/admin/users', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userData)
    })
  }

  async updateAdminUser(userId, userData, token) {
    return this.request(`/admin/users/${userId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(userData)
    })
  }

  async deleteAdminUser(userId, token) {
    return this.request(`/admin/users/${userId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async getAgents(token, params = {}) {
    const query = new URLSearchParams(params).toString()
    const queryString = query ? `?${query}` : ''
    return this.request(`/admin/agents${queryString}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async createAgent(agentData, token) {
    return this.request('/admin/agents', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(agentData)
    })
  }

  async updateAgent(agentId, agentData, token) {
    return this.request(`/admin/agents/${agentId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(agentData)
    })
  }

  async deleteAgent(agentId, token) {
    return this.request(`/admin/agents/${agentId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  // === Task Management Endpoints ===
  
  async getTasks(token, params = {}) {
    const query = new URLSearchParams(params).toString()
    const queryString = query ? `?${query}` : ''
    return this.request(`/tasks${queryString}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async createTask(taskData, token) {
    return this.request('/tasks', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(taskData)
    })
  }

  async getTaskById(token, taskId) {
    return this.request(`/tasks/${taskId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async updateTask(taskId, taskData, token) {
    return this.request(`/tasks/${taskId}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(taskData)
    })
  }

  async deleteTask(taskId, token) {
    return this.request(`/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  // === Common helpers ===

  setAuthToken(token) {
    this.token = token
  }

  clearAuthToken() {
    this.token = null
  }
}

export const apiService = new ApiService()

// Type-safe convenience methods
export const api = {
  // Auth
  login: (credentials) => apiService.login(credentials),
  register: (userData) => apiService.register(userData),
  logout: (token) => apiService.logout(token),
  verifyToken: (token) => apiService.verifyToken(token),
  getCurrentUser: (token) => apiService.getCurrentUser(token),
  
  // Users
  getUsers: (token, params) => apiService.getUsers(token, params),
  getUserById: (token, userId) => apiService.getUserById(token, userId),
  createUser: (userData, token) => apiService.createUser(userData, token),
  updateUser: (userId, userData, token) => apiService.updateUser(userId, userData, token),
  deleteUser: (userId, token) => apiService.deleteUser(userId, token),
  
  // Dashboard
  getDashboardStats: (token, params) => apiService.getDashboardStats(token, params),
  getAnalytics: (token, params) => apiService.getAnalytics(token, params),
  getDashboardOverview: (token) => apiService.getDashboardOverview(token),
  
  // Admin
  getAdminUsers: (token, params) => apiService.getAdminUsers(token, params),
  createAdminUser: (userData, token) => apiService.createAdminUser(userData, token),
  updateAdminUser: (userId, userData, token) => apiService.updateAdminUser(userId, userData, token),
  deleteAdminUser: (userId, token) => apiService.deleteAdminUser(userId, token),
  getAgents: (token, params) => apiService.getAgents(token, params),
  createAgent: (agentData, token) => apiService.createAgent(agentData, token),
  updateAgent: (agentId, agentData, token) => apiService.updateAgent(agentId, agentData, token),
  deleteAgent: (agentId, token) => apiService.deleteAgent(agentId, token),
  
  // Tasks
  getTasks: (token, params) => apiService.getTasks(token, params),
  createTask: (taskData, token) => apiService.createTask(taskData, token),
  getTaskById: (token, taskId) => apiService.getTaskById(token, taskId),
  updateTask: (taskId, taskData, token) => apiService.updateTask(taskId, taskData, token),
  deleteTask: (taskId, token) => apiService.deleteTask(taskId, token)
}
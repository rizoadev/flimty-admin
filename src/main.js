import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/auth'

const app = createApp(App)

// Initialize Pinia
const pinia = createPinia()
app.use(pinia)

// Hydrate auth state before mounting
const authStore = useAuthStore()
authStore.hydrate()

app.use(router)
app.mount('#app')

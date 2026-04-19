import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { useAuthStore } from '@/stores/auth'

const app = createApp(App)

// Hydrate auth state before mounting
const authStore = useAuthStore()
authStore.hydrate()

app.use(router)
app.mount('#app')

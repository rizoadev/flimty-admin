<template>
  <div class="relative min-h-screen flex items-center justify-center p-6 bg-surface overflow-hidden">
    <!-- Background Editorial Element -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px]"></div>
      <div class="absolute top-1/2 -right-48 w-full max-w-2xl h-[600px] bg-secondary-container/10 rounded-full blur-[150px] -translate-y-1/2"></div>
    </div>

    <!-- Login Container -->
    <main class="relative z-10 w-full max-w-md">
      <div class="bg-surface-container-lowest ambient-shadow rounded-xl p-10 flex flex-col items-center">
        <!-- Branding -->
        <div class="mb-10 text-center">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-surface-container-high rounded-xl mb-6">
            <span class="material-symbols-outlined text-primary text-4xl">potted_plant</span>
          </div>
          <h1 class="font-headline font-extrabold text-3xl tracking-tighter text-on-background mb-2">Botanical Architect</h1>
          <p class="text-on-surface-variant font-medium text-sm tracking-wide uppercase">Admin Management Suite</p>
        </div>

        <!-- Form -->
        <form class="w-full space-y-6" @submit.prevent="handleLogin">
          <!-- Email Field -->
          <div class="space-y-2">
            <label class="block text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1" for="login-email">Email Address</label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline-variant group-focus-within:text-primary transition-colors">
                <span class="material-symbols-outlined text-[20px]">alternate_email</span>
              </div>
              <input v-model="form.email" class="w-full bg-surface-container-highest border-none rounded-lg py-3.5 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" id="login-email" name="email" placeholder="name@architect.botany" type="email" required />
            </div>
          </div>

          <!-- Password Field -->
          <div class="space-y-2">
            <div class="flex justify-between items-center px-1">
              <label class="block text-xs font-bold uppercase tracking-wider text-on-surface-variant" for="login-password">Password</label>
              <router-link to="/forgot-password" class="text-xs font-semibold text-primary hover:text-primary-dim transition-colors active:scale-95 duration-150">Forgot Password?</router-link>
            </div>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline-variant group-focus-within:text-primary transition-colors">
                <span class="material-symbols-outlined text-[20px]">lock</span>
              </div>
              <input v-model="form.password" class="w-full bg-surface-container-highest border-none rounded-lg py-3.5 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline-variant" id="login-password" name="password" placeholder="••••••••••••" :type="showPassword ? 'text' : 'password'" required />
              <button @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-4 flex items-center text-outline-variant hover:text-on-surface transition-colors" type="button">
                <span class="material-symbols-outlined text-[20px]">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
              </button>
            </div>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center ml-1">
            <input v-model="remember" class="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" id="login-remember" type="checkbox" />
            <label class="ml-2 text-sm text-on-surface-variant" for="login-remember">Keep me logged in for 30 days</label>
          </div>

          <!-- Submit Button -->
          <button :disabled="loading" class="w-full primary-gradient text-on-primary font-bold py-4 rounded-lg shadow-lg shadow-primary/20 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group" type="submit">
            <span>{{ loading ? 'Signing in...' : 'Sign In' }}</span>
            <span class="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
          <p v-if="error" class="text-sm text-destructive mt-2">{{ error }}</p>
        </form>

        <!-- Footer Context -->
        <div class="mt-10 flex flex-col items-center">
          <div class="flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-4">
            <span class="w-2 h-2 bg-primary rounded-full animate-ping"></span>
            <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">System Status: Operational</span>
          </div>
          <p class="text-[11px] text-outline-variant font-medium text-center leading-relaxed">
            Authorized access only. Use of this system constitutes agreement<br/>to the Botanical Architect Security Policy.
          </p>
        </div>
      </div>
    </main>

    <!-- Decorative Bottom Metadata -->
    <footer class="fixed bottom-6 left-0 right-0 text-center pointer-events-none">
      <div class="inline-flex items-center gap-4 text-outline-variant opacity-40">
        <span class="text-[10px] font-bold uppercase tracking-[0.2em]">v2.4.0-ESTATE</span>
        <div class="w-1 h-1 bg-outline-variant rounded-full"></div>
        <span class="text-[10px] font-bold uppercase tracking-[0.2em]">©2024 Botanical Architect</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const showPassword = ref(false)
const loading = ref(false)
const error = ref(null)

const handleLogin = async () => {
  loading.value = true
  error.value = null
  try {
    await authStore.login(form)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message || 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>

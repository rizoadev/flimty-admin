<template>
  <div class="bg-surface min-h-screen flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-md">
      <div class="text-center mb-10">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-surface-container-high rounded-xl mb-6">
          <span class="material-symbols-outlined text-primary text-4xl">potted_plant</span>
        </div>
        <h1 class="font-headline text-3xl font-extrabold tracking-tighter text-on-surface mb-2">Botanical Architect</h1>
        <p class="text-on-surface-variant text-base">Access your account</p>
      </div>

      <div class="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
        <p class="text-on-surface-variant text-sm text-center mb-6">
          Not registered? <router-link to="/register" class="text-primary font-bold hover:underline">Create account</router-link>
        </p>

        <form class="space-y-6" @submit.prevent="handleLogout">
          <button :disabled="loading" class="w-full primary-gradient text-on-primary font-bold py-4 rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
            {{ loading ? 'Signing out...' : 'Sign Out' }}
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const loading = ref(false)
const error = ref(null)

const handleLogout = async () => {
  loading.value = true
  error.value = null
  try {
    await authStore.logout()
    router.push('/login')
  } catch (err) {
    error.value = err.message || 'Logout failed'
  } finally {
    loading.value = false
  }
}
</script>

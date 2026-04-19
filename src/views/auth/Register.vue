<template>
  <div class="bg-surface min-h-screen flex flex-col" style="background: radial-gradient(circle at top left, #eff4fc 0%, #f7f9ff 100%);">
    <main class="flex-grow flex items-center justify-center p-6">
      <div class="w-full max-w-[480px]">
        <!-- Logo & Header -->
        <div class="text-center mb-10">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-surface-container-high rounded-xl mb-6">
            <span class="material-symbols-outlined text-primary text-4xl">potted_plant</span>
          </div>
          <h1 class="font-headline text-3xl font-extrabold tracking-tighter text-on-surface mb-2">Botanical Architect</h1>
          <p class="text-on-surface-variant text-base">Begin your journey with Flimty Botanical Architect today.</p>
        </div>

        <!-- Registration Card -->
        <div class="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
          <form class="space-y-6" @submit.prevent="handleRegister">
            <!-- Full Name -->
            <div class="space-y-2">
              <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant ml-1">Full Name</label>
              <div class="relative group">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors">person</span>
                <input v-model="form.fullName" class="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Enter your full name" type="text" />
              </div>
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant ml-1">Email Address</label>
              <div class="relative group">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors">mail</span>
                <input v-model="form.email" class="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="name@example.com" type="email" />
              </div>
            </div>

            <!-- Password Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant ml-1">Password</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors">lock</span>
                  <input v-model="form.password" class="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="••••••••" type="password" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant ml-1">Confirm Password</label>
                <div class="relative group">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px] group-focus-within:text-primary transition-colors">enhanced_encryption</span>
                  <input v-model="form.confirmPassword" class="w-full pl-12 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="••••••••" type="password" />
                </div>
              </div>
            </div>

            <!-- Terms -->
            <div class="flex items-start gap-3 py-2">
              <input v-model="form.terms" class="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer" id="reg-terms" type="checkbox" />
              <label class="text-sm text-on-surface-variant leading-tight" for="reg-terms">
                I agree to the <a class="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a class="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
              </label>
            </div>

            <!-- Submit -->
            <button :disabled="loading" class="w-full primary-gradient text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2" type="submit">
              {{ loading ? 'Creating...' : 'Create Account' }}
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <p v-if="error" class="text-sm text-destructive mt-2 text-center">{{ error }}</p>
          </form>

          <!-- Footer Link -->
          <div class="mt-8 pt-6 border-t border-surface-container-high text-center">
            <p class="text-on-surface-variant text-sm">
              Already have an account? <router-link to="/login" class="text-primary font-bold ml-1 hover:underline active:opacity-70 transition-opacity">Login</router-link>
            </p>
          </div>
        </div>
      </div>
    </main>

    <footer class="w-full py-6 text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/40">
      © 2024 Flimty Botanical Architect. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  terms: false
})

const loading = ref(false)
const error = ref(null)

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    error.value = 'Passwords do not match'
    return
  }
  if (!form.terms) {
    error.value = 'Please accept the terms and conditions'
    return
  }

  loading.value = true
  error.value = null
  try {
    // Map to expected format
    await authStore.register({
      fullName: form.fullName,
      email: form.email,
      password: form.password
    })
    router.push('/login')
  } catch (err) {
    error.value = err.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>

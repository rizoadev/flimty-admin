<template>
  <div class="bg-surface min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur border-b border-surface-container-highest">
      <div class="flex items-center justify-between px-6 py-3">
        <h1 class="font-headline font-extrabold text-lg tracking-tighter">Add New Agent</h1>
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Status: Operational</span>
          <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </header>

    <main class="flex-grow p-6 overflow-y-auto">
      <div class="max-w-2xl">
        <div class="mb-6">
          <h2 class="font-headline font-bold text-lg tracking-tighter mb-2">Create Agent</h2>
          <p class="text-on-surface-variant text-sm">Fill in the agent details below.</p>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-6 ambient-shadow">
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Agent Name -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Agent Name</label>
              <input v-model="form.name" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Enter agent name" type="text" required />
            </div>

            <!-- Region -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Region</label>
              <select v-model="form.region" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 transition-all">
                <option value="">Select Region</option>
                <option value="Pacific Northwest">Pacific Northwest</option>
                <option value="Coastal Wetlands">Coastal Wetlands</option>
                <option value="Urban Metro East">Urban Metro East</option>
                <option value="Denpasar, Bali">Denpasar, Bali</option>
                <option value="Bandung, Jawa Barat">Bandung, Jawa Barat</option>
                <option value="Surabaya, Jawa Timur">Surabaya, Jawa Timur</option>
                <option value="Jakarta Selatan, DKI Jakarta">Jakarta Selatan, DKI Jakarta</option>
              </select>
            </div>

            <!-- License -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">License Number</label>
              <input v-model="form.license" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="LIC #PNW-4921-BA" type="text" />
            </div>

            <!-- Rating -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Rating</label>
              <input v-model="form.rating" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="4.9" type="number" step="0.1" min="0" max="5" />
            </div>

            <!-- Projects -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Projects Count</label>
              <input v-model="form.projects" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="128" type="number" min="0" />
            </div>

            <!-- Ads -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Active Ads</label>
              <input v-model="form.ads" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="3" type="number" min="0" />
            </div>

            <!-- Badge -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Badge</label>
              <select v-model="form.badge" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 transition-all">
                <option value="">No Badge</option>
                <option value="Verified">Verified</option>
                <option value="Top Rated">Top Rated</option>
              </select>
            </div>

            <!-- Avatar URL -->
            <div class="space-y-2">
              <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Avatar URL</label>
              <input v-model="form.avatar" class="w-full px-4 py-3 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="https://..." type="url" />
            </div>

            <!-- Submit -->
            <button :disabled="loading" class="w-full primary-gradient text-on-primary font-headline font-bold py-4 rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 group" type="submit">
              <span>{{ loading ? 'Creating...' : 'Create Agent' }}</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </button>
            <p v-if="error" class="text-sm text-destructive mt-2 text-center">{{ error }}</p>
          </form>

          <div class="mt-8 pt-6 border-t border-surface-container-high text-center">
            <router-link to="/agents" class="text-sm text-primary font-bold hover:underline active:opacity-70 transition-opacity">← Back to Agent List</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { apiService } from '@/services/api'

const router = useRouter()

const form = reactive({
  name: '',
  region: '',
  license: '',
  rating: '',
  projects: '',
  ads: '',
  badge: '',
  avatar: ''
})

const loading = ref(false)
const error = ref(null)

const handleSubmit = async () => {
  loading.value = true
  error.value = null
  try {
    await apiService.createAgent(form, localStorage.getItem('token'))
    router.push('/agents')
  } catch (err) {
    error.value = err.message || 'Failed to create agent'
  } finally {
    loading.value = false
  }
}
</script>

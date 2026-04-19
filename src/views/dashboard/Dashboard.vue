<template>
  <div class="bg-surface min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur border-b border-surface-container-highest">
      <div class="flex items-center justify-between px-6 py-3">
        <h1 class="font-headline font-extrabold text-lg tracking-tighter">Dashboard Overview</h1>
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Status: Operational</span>
          <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </header>

    <main class="flex-grow p-6 overflow-y-auto">
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="bg-surface-container-lowest rounded-xl p-5 ambient-shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="text-2xl">{{ stat.icon }}</span>
            <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{{ stat.label }}</span>
          </div>
          <p class="text-3xl font-bold tracking-tighter text-on-background">{{ stat.value }}</p>
          <p class="text-xs text-on-surface-variant mt-1">{{ stat.change }}</p>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-surface-container-lowest rounded-xl p-6 ambient-shadow">
          <h2 class="font-headline font-bold text-lg tracking-tighter mb-4">Activity Feed</h2>
          <div class="space-y-4">
            <div v-for="activity in activities" :key="activity.id" class="flex gap-3">
              <div class="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-on-primary">
                {{ activity.avatar }}
              </div>
              <div class="flex-grow">
                <p class="text-sm text-on-background">
                  <span class="font-semibold">{{ activity.user }}</span>
                  {{ activity.action }}
                </p>
                <p class="text-xs text-on-surface-variant">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-surface-container-lowest rounded-xl p-6 ambient-shadow">
          <h2 class="font-headline font-bold text-lg tracking-tighter mb-4">Quick Actions</h2>
          <div class="space-y-3">
            <button v-for="action in quickActions" :key="action.name" class="w-full flex items-center justify-between p-3 rounded-lg bg-background hover:bg-surface-container-highest transition-colors">
              <div class="flex items-center gap-3">
                <span class="text-2xl">{{ action.icon }}</span>
                <span class="text-sm font-medium text-on-background">{{ action.name }}</span>
              </div>
              <span class="text-xs text-on-surface-variant">→</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Agent Table -->
      <div class="bg-surface-container-lowest rounded-xl p-6 ambient-shadow mt-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-headline font-bold text-lg tracking-tighter">Agent Management</h2>
          <router-link to="/agents" class="primary-gradient text-xs font-bold py-2 px-4 rounded-lg text-on-primary">
            Manage Agents
          </router-link>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-left text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                <th class="py-3 px-4">Agent</th>
                <th class="py-3 px-4">Region</th>
                <th class="py-3 px-4">Status</th>
                <th class="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="agent in agents" :key="agent.id" class="border-t border-surface-container-highest">
                <td class="py-3 px-4 font-medium text-on-background">{{ agent.name }}</td>
                <td class="py-3 px-4 text-on-surface-variant">{{ agent.region }}</td>
                <td class="py-3 px-4">
                  <span :class="agent.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'" class="px-2 py-0.5 rounded text-xs text-on-primary">
                    {{ agent.status }}
                  </span>
                </td>
                <td class="py-3 px-4 text-right">
                  <button class="text-sm text-primary hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiService } from '@/services/api'

const stats = ref([])
const activities = ref([])
const agents = ref([])

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await apiService.getDashboardStats(token)
    stats.value = response.stats
    activities.value = response.activities || []
    agents.value = response.agents || []
  } catch (err) {
    console.error('Failed to load dashboard:', err)
  }
})
</script>

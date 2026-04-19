<template>
  <div class="bg-surface min-h-screen flex flex-col">
    <header class="sticky top-0 z-50 bg-surface-container-lowest/95 backdrop-blur border-b border-surface-container-highest">
      <div class="flex items-center justify-between px-6 py-3">
        <h1 class="font-headline font-extrabold text-lg tracking-tighter">Agent Management</h1>
        <div class="flex items-center gap-3">
          <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">System Status: Operational</span>
          <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </header>

    <main class="flex-grow p-6 overflow-y-auto">
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-headline font-bold text-lg tracking-tighter">Agent Management</h2>
          <router-link to="/agents/create" class="primary-gradient text-xs font-bold py-2 px-4 rounded-lg text-on-primary">
            Add Agent
          </router-link>
        </div>
        <div class="bg-surface-container-lowest rounded-xl p-6 ambient-shadow">
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
                    <div class="flex justify-end gap-2">
                      <button class="text-sm text-primary hover:underline">View</button>
                      <button class="text-sm text-primary hover:underline">Edit</button>
                      <button class="text-sm text-destructive hover:underline">Delete</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div class="bg-surface-container-lowest rounded-xl p-5 ambient-shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="text-2xl">🤖</span>
            <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Total Agents</span>
          </div>
          <p class="text-3xl font-bold tracking-tighter text-on-background">{{ agentStats.total }}</p>
          <p class="text-xs text-on-surface-variant mt-1">{{ agentStats.change }}</p>
        </div>
        <div class="bg-surface-container-lowest rounded-xl p-5 ambient-shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="text-2xl">🟢</span>
            <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Active</span>
          </div>
          <p class="text-3xl font-bold tracking-tighter text-on-background">{{ agentStats.active }}</p>
          <p class="text-xs text-on-surface-variant mt-1">{{ agentStats.activeChange }}</p>
        </div>
        <div class="bg-surface-container-lowest rounded-xl p-5 ambient-shadow">
          <div class="flex items-center justify-between mb-2">
            <span class="text-2xl">📊</span>
            <span class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Performance</span>
          </div>
          <p class="text-3xl font-bold tracking-tighter text-on-background">{{ agentStats.performance }}</p>
          <p class="text-xs text-on-surface-variant mt-1">Avg. Score</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { apiService } from '@/services/api'

const agents = ref([])
const agentStats = ref({ total: 0, active: 0, performance: '95%' })

onMounted(async () => {
  try {
    const token = localStorage.getItem('token')
    const response = await apiService.getAgents(token)
    agents.value = response.agents || []
    // Calculate stats
    agentStats.value = {
      total: agents.value.length,
      active: agents.value.filter(a => a.status === 'Active').length,
      performance: '95%'
    }
  } catch (err) {
    console.error('Failed to load agents:', err)
  }
})
</script>

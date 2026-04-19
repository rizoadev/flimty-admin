<template>
  <AdminLayout>
    <div class="p-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Ecosystem Hub</p>
          <h2 class="font-headline font-extrabold text-3xl tracking-tighter text-on-surface">Analytics &amp; Statistics</h2>
          <p class="text-on-surface-variant text-sm mt-1">A comprehensive overview for the urban conservatory ecosystem.</p>
        </div>
        <div class="flex gap-3">
          <button class="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high rounded-lg text-sm font-semibold hover:bg-surface-container-highest transition-colors active:scale-95">
            <span class="material-symbols-outlined text-lg">date_range</span> Last 30 Days
          </button>
          <button class="flex items-center gap-2 px-4 py-2.5 primary-gradient text-white rounded-lg text-sm font-semibold active:scale-95 shadow-lg shadow-primary/20">
            <span class="material-symbols-outlined text-lg">download</span> Export Report
          </button>
        </div>
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.label" class="bg-surface-container-lowest p-6 rounded-xl card-shadow">
          <div class="flex justify-between items-start mb-4">
            <div class="p-2 rounded-lg" :class="stat.bg"><span class="material-symbols-outlined" :class="stat.text">{{ stat.icon }}</span></div>
            <span class="text-[10px] font-bold px-2 py-1 rounded" :class="stat.badge">{{ stat.badgeText }}</span>
          </div>
          <p class="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">{{ stat.label }}</p>
          <h3 class="font-headline font-extrabold text-2xl mt-1">{{ stat.value }}</h3>
        </div>
      </div>

      <!-- Charts Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <!-- Revenue Chart -->
        <div class="bg-surface-container-lowest rounded-2xl card-shadow overflow-hidden">
          <div class="p-6 border-b border-outline-variant/10 flex justify-between items-center">
            <h3 class="font-headline font-bold text-lg">Revenue Overview</h3>
            <div class="flex gap-2">
              <button class="px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">Monthly</button>
              <button class="px-3 py-1.5 bg-surface-container text-on-surface-variant text-xs font-bold rounded-lg hover:bg-surface-container-high">Weekly</button>
            </div>
          </div>
          <div class="p-6 h-64 flex flex-col justify-end">
            <!-- SVG Chart -->
            <svg class="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#2a6c2c" stop-opacity="0.3"/>
                  <stop offset="100%" stop-color="#2a6c2c" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,180 C50,160 100,120 150,100 C200,80 250,90 300,70 C350,50 400,40 450,60 C500,80 550,30 600,20 L600,200 L0,200 Z" fill="url(#chartGradient)"/>
              <path d="M0,180 C50,160 100,120 150,100 C200,80 250,90 300,70 C350,50 400,40 450,60 C500,80 550,30 600,20" fill="none" stroke="#2a6c2c" stroke-width="3" stroke-linecap="round"/>
              <circle cx="150" cy="100" r="5" fill="#2a6c2c"/> <circle cx="300" cy="70" r="5" fill="#2a6c2c"/> <circle cx="450" cy="60" r="5" fill="#2a6c2c"/>
            </svg>
          </div>
        </div>

        <!-- Session Distribution -->
        <div class="bg-surface-container-lowest rounded-2xl card-shadow overflow-hidden">
          <div class="p-6 border-b border-outline-variant/10">
            <h3 class="font-headline font-bold text-lg">Agent Onboarding Rate</h3>
          </div>
          <div class="p-6 h-64 flex flex-col justify-end">
            <div class="flex items-end gap-4 h-full">
              <div v-for="(bar, i) in barData" :key="i" class="flex-1 flex flex-col items-center gap-2">
                <div class="w-full rounded-t-lg transition-all" :class="bar.active ? 'bg-primary' : 'bg-surface-container-high'" :style="{ height: bar.height }"></div>
                <span class="text-[10px] font-bold text-on-surface-variant">{{ bar.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Agents Table -->
      <div class="bg-surface-container-lowest rounded-2xl card-shadow overflow-hidden">
        <div class="p-6 flex justify-between items-center border-b border-outline-variant/10">
          <h3 class="font-headline font-bold text-lg">Top Performing Agents</h3>
          <button class="text-primary text-xs font-bold hover:underline">View All</button>
        </div>
        <table class="w-full text-left">
          <thead>
            <tr class="bg-surface-container-low border-b border-outline-variant/10">
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Agent</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Region</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Performance</th>
              <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Revenue</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/10">
            <tr v-for="agent in topAgents" :key="agent.name" class="hover:bg-surface-container-low/30 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <img :alt="agent.name" class="w-10 h-10 rounded-full object-cover" :src="agent.avatar" />
                  <div><p class="font-bold text-sm">{{ agent.name }}</p><p class="text-xs text-on-surface-variant">{{ agent.email }}</p></div>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-on-surface-variant">{{ agent.region }}</td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-sm text-tertiary" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="text-sm font-bold">{{ agent.rating }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm font-bold text-on-surface">{{ agent.revenue }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../layouts/AdminLayout.vue'

const stats = [
  { label: 'Total Revenue', value: 'Rp 4.2B', icon: 'attach_money', bg: 'bg-primary/10', text: 'text-primary', badge: 'text-primary bg-primary-container', badgeText: '+14.2%' },
  { label: 'Active Users', value: '12,847', icon: 'person', bg: 'bg-tertiary-container', text: 'text-on-tertiary-container', badge: 'text-tertiary bg-tertiary-container', badgeText: '+8.1%' },
  { label: 'Conversions', value: '3,295', icon: 'trending_up', bg: 'bg-secondary-container', text: 'text-on-secondary-container', badge: 'text-secondary bg-secondary-container', badgeText: '+22.4%' },
  { label: 'Bounce Rate', value: '18.6%', icon: 'speed', bg: 'bg-error-container/20', text: 'text-error', badge: 'text-error bg-error-container/20', badgeText: '-3.2%' },
]

const barData = [
  { label: 'Jan', height: '40%', active: false },
  { label: 'Feb', height: '55%', active: false },
  { label: 'Mar', height: '65%', active: true },
  { label: 'Apr', height: '80%', active: true },
  { label: 'May', height: '70%', active: true },
  { label: 'Jun', height: '90%', active: true },
  { label: 'Jul', height: '75%', active: false },
]

const topAgents = [
  { name: 'Elena Vance', email: 'elena@botanical.io', region: 'Pacific Northwest', rating: '4.9', revenue: 'Rp 142M', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT49OC5rwa28EQGHoDFj-PJvxBuMZINv1s5OjCqDtcXrCUIZabw2AwGF2OM3rCuj_0USJG6fTmX5Id3VtZZU-a0vHgyfSgjzeOAU_-1DtT5CbXud6pJJRUdl4mVohxk-58uwWrlJxGEIfXLfqAIOUwYDNZU0_iwD_gJYKTYPO5tkt3_OkGbz9mb04Qk3naaV-LG285cdnf3a7uds0eXHTFa9ecmGuaGkdsu9r62_K3QKFs_UJG9rjPKcqb83UlfAcneN5_SmG9Jj4' },
  { name: 'Julian Thorne', email: 'julian@botanical.io', region: 'Coastal Wetlands', rating: '4.7', revenue: 'Rp 98M', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgvn07x0Jn6hfH1pob4Phnv6UrgNSald9V86kV4rhLVlUuXk2hKXwzFU2J1CiDidPpKTknn8LRUT_m3JeM_4iM8JNFmD1bEqU-8s5doMiDGXg2uguMbFC4VE9WvK_AZSXyfUwZUH2Fzo5_Eqarol_kT-FvE1BRs95TUhuOgYTRb3b_xkfjh3Ra9ptmR_NBWL7D47cTHIEudTUuEbAnOGS7hffiymDLmWCNLILzaTlbq6dZh4d2eAO635zEZH6nF5Ryo-0GF-6drbA' },
  { name: 'Maya Ishikawa', email: 'maya@botanical.io', region: 'Urban Metro East', rating: '5.0', revenue: 'Rp 215M', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOJRvwgqvvkptHp5J7wJlELUuIms-4qPn7PHEJOZjHS_YzqrnT_LYghmWRrg4XuAl8R5aru1jmVtko8kwAs8LZtLARPLweJT3PbQrfWo1RA-TllLM1FEedSfJrvaZrsULGKR5kRp2tzFdBhO_hfvMWzG-TzWuO6cmp46cZ8yZwe_gxbqeWGVyrBmaEqaP5HRwcZznc1xxPoxYrt8cY7otGc9QnEpmKAae6LsiIN7wjhdXWiMOW1qBT_ETlD2l61TtPso4JBd8TwEI' },
]
</script>

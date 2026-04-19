<template>
  <aside :class="[isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0']" class="fixed left-0 top-0 h-full flex flex-col py-4 z-50 bg-[#f7f9ff] w-64 border-r border-slate-200 transition-transform duration-300 ease-in-out lg:shadow-none">
    <div class="px-6 mb-8 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center text-white shrink-0">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">eco</span>
        </div>
        <div>
          <h1 class="font-headline font-extrabold text-[#2a6c2c] text-lg leading-none tracking-tighter line-clamp-1">Botanical Admin</h1>
          <p class="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Urban Conservatory</p>
        </div>
      </div>
      <button @click="$emit('close')" class="lg:hidden p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container active:scale-95 transition-colors">
        <span class="material-symbols-outlined text-lg">close</span>
      </button>
    </div>
    <nav class="flex-1 space-y-1">
      <router-link v-for="item in navItems" :key="item.path" :to="item.path"
        :class="[isActive(item.path) ? 'bg-[#2a6c2c] text-white' : 'text-slate-600 hover:bg-slate-200']"
        class="mx-2 my-1 px-4 py-3 flex items-center gap-3 rounded-lg transition-all active:scale-95 duration-150">
        <span class="material-symbols-outlined" :style="isActive(item.path) ? `font-variation-settings: 'FILL' 1;` : ''">{{ item.icon }}</span>
        <span class="text-sm font-medium">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="pt-4 border-t border-outline-variant/10">
      <router-link to="/profile"
        :class="[isActive('/profile') ? 'bg-[#2a6c2c] text-white' : 'text-slate-600 hover:bg-slate-200']"
        class="mx-2 my-1 px-4 py-3 flex items-center gap-3 rounded-lg transition-all">
        <span class="material-symbols-outlined" :style="isActive('/profile') ? `font-variation-settings: 'FILL' 1;` : ''">account_circle</span>
        <span class="text-sm font-medium">Profile</span>
      </router-link>
      <router-link to="/logout" class="text-error mx-2 my-1 px-4 py-3 flex items-center gap-3 hover:bg-error-container/10 rounded-lg transition-all">
        <span class="material-symbols-outlined">logout</span>
        <span class="text-sm font-medium">Logout</span>
      </router-link>
    </div>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const route = useRoute()

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { path: '/team', label: 'Users', icon: 'group' },
  { path: '/agents', label: 'Agents', icon: 'support_agent' },
  { path: '/landing', label: 'Landing Content', icon: 'web' },
  { path: '/analytics', label: 'Analytics', icon: 'monitoring' },
]

function isActive(path) {
  return route.path === path || route.path.startsWith(path + '/')
}
</script>

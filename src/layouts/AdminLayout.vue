<template>
  <div class="flex min-h-screen relative bg-surface">
    <!-- Mobile Sidebar Overlay -->
    <div v-show="isOpen" @click="isOpen = false" class="fixed inset-0 bg-on-background/30 backdrop-blur-sm z-40 lg:hidden transition-opacity"></div>
    
    <SideNav :isOpen="isOpen" @close="isOpen = false" />
    
    <div class="flex-1 min-h-screen flex flex-col transition-all duration-300 lg:ml-64 w-full max-w-full overflow-hidden">
      <TopAppBar @toggle-sidebar="isOpen = !isOpen" />
      <main class="flex-1 w-full overflow-x-hidden">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SideNav from '../components/SideNav.vue'
import TopAppBar from '../components/TopAppBar.vue'

const isOpen = ref(false)
const route = useRoute()

// Automatically close the sidebar on mobile when navigating
watch(() => route.path, () => {
  isOpen.value = false
})
</script>

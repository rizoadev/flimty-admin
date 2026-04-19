<template>
  <header class="flex justify-between items-center w-full px-4 lg:px-6 h-16 sticky top-0 z-30 bg-[#f7f9ff] shadow-sm">
    <div class="flex items-center flex-1 gap-2 lg:gap-4">
      <button @click="$emit('toggle-sidebar')" class="lg:hidden p-2 rounded-lg text-on-surface-variant hover:bg-surface-container active:scale-95 transition-colors flex items-center justify-center">
        <span class="material-symbols-outlined text-[20px]">menu</span>
      </button>
      <div class="relative w-full max-w-md hidden sm:block">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
        <input type="text" :placeholder="searchPlaceholder" class="w-full pl-10 pr-4 py-2 bg-surface-container-highest border-none rounded-full text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60" />
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors relative active:scale-95">
        <span class="material-symbols-outlined text-on-surface">notifications</span>
        <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
      </button>
      <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95">
        <span class="material-symbols-outlined text-on-surface">settings</span>
      </button>
      <div class="h-8 w-[1px] bg-gray-200 mx-2"></div>
      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-sm font-bold leading-none">Admin User</p>
          <p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-medium">Head Curator</p>
        </div>
        <img alt="Admin User Profile" class="w-10 h-10 rounded-full border-2 border-primary/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgI2EVW_W9kkc22JuUChgzAhaJ365UL8ZS8ReadZFdokHcTJSKLT2VHnuh4W_PXgKaQDMD3JAxhAb1TZsQPUXif6ajOXwRaquXt8DZUouAldgAhwWV0zYLWDCuX-hTvw0yeWvNiwPWfOaCvvrGGdd2XwpKOysQW5Qacq-tUaWZvBrmOVznCMsAYGJATxrMOy2oMOzJJDUJhQRWKe5aPZO8HLbmrHdAORXsEdW0TmI1TzKuZyImo66cRgS2w2ZRLB7tJv8JLCr7Nq0" />
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  searchPlaceholder: { type: String, default: 'Search agents, regions, or analytics...' }
})

defineEmits(['toggle-sidebar'])
</script>

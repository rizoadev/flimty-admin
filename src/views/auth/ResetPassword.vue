<template>
  <div class="min-h-screen flex items-center justify-center relative px-6 bg-surface overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-10 pointer-events-none select-none">
      <img alt="Botanical Texture" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWfRNVXamG24sGJQ5Yuok7d34pFJ6JNV5wOkI_Os9vRNXvBVzQXFMXo0PRVGeT3c41cYpyAvaW_H8eP4asq2M_oBAD_Amhzhz-C7uk5DzWN5nDKEUa-tGUnUy1kiuyiHuc27ASHGXsisPnSNVxaIXQlVueRXRh54f5wTqEfQhfUODS9GXa-ID5s2anwUEtYH1KzVbMUW_YKNlm_MOJD7cCsis8jk81-h7I3-Bbdmw0S-dOwgpoNAHMoF3JSOoImXsRFNrveP1KmyA" />
    </div>
    <div class="w-full max-w-md z-10">
      <!-- Branding -->
      <div class="flex flex-col items-center mb-10 text-center">
        <div class="w-14 h-14 bg-primary-container rounded-xl flex items-center justify-center mb-4">
          <span class="material-symbols-outlined text-on-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">eco</span>
        </div>
        <h1 class="font-headline font-extrabold text-3xl tracking-tighter text-primary">Botanical Architect</h1>
        <p class="text-on-surface-variant font-medium mt-1">Urban Conservatory Management</p>
      </div>

      <!-- Central Card -->
      <div class="bg-surface-container-lowest rounded-2xl p-8 ambient-shadow relative overflow-hidden">
        <div class="mb-8">
          <h2 class="font-headline font-bold text-2xl text-on-surface">Reset Password</h2>
          <p class="text-on-surface-variant text-sm mt-2 leading-relaxed">Please enter your new administrative credentials to regain access to the conservatory dashboard.</p>
        </div>
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- New Password -->
          <div class="space-y-2">
            <label class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[14px]">lock</span> New Password
            </label>
            <div class="relative">
              <input class="w-full h-12 px-5 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline-variant" placeholder="••••••••••••" type="password" />
              <button class="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors" type="button">
                <span class="material-symbols-outlined">visibility</span>
              </button>
            </div>
            <!-- Strength Indicator -->
            <div class="pt-2">
              <div class="flex gap-1.5 h-1.5 w-full">
                <div class="flex-1 rounded-full bg-primary h-full"></div>
                <div class="flex-1 rounded-full bg-primary h-full"></div>
                <div class="flex-1 rounded-full bg-primary h-full opacity-60"></div>
                <div class="flex-1 rounded-full bg-surface-container-high h-full"></div>
              </div>
              <div class="flex justify-between items-center mt-2">
                <span class="text-[11px] font-semibold text-primary">Secure Strength</span>
                <span class="text-[11px] text-on-surface-variant">Include 1 special character</span>
              </div>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="space-y-2">
            <label class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[14px]">verified_user</span> Confirm New Password
            </label>
            <div class="relative">
              <input class="w-full h-12 px-5 rounded-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary transition-all text-on-surface placeholder:text-outline-variant" placeholder="••••••••••••" type="password" />
              <button class="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
                <span class="material-symbols-outlined">check_circle</span>
              </button>
            </div>
          </div>

          <!-- CTA -->
          <button class="w-full h-12 primary-gradient text-white font-headline font-bold rounded-lg shadow-lg active:scale-95 duration-200 flex items-center justify-center gap-2 mt-4" type="submit">
            Update Password <span class="material-symbols-outlined text-xl">arrow_forward</span>
          </button>
        </form>

        <!-- Info -->
        <div class="mt-8 pt-8 border-t border-surface-container-high">
          <div class="flex items-start gap-4">
            <div class="p-2 rounded-lg bg-surface-container-high">
              <span class="material-symbols-outlined text-primary">info</span>
            </div>
            <p class="text-xs text-on-surface-variant leading-relaxed">Password must be at least 12 characters. Avoid common phrases or previously used passwords from the <span class="text-primary font-bold">Botanical Admin</span> system.</p>
          </div>
        </div>
      </div>

      <!-- Footer Links -->
      <div class="mt-8 flex justify-center gap-8">
        <a class="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" href="#">
          <span class="material-symbols-outlined text-sm">help</span> Support Center
        </a>
        <router-link to="/login" class="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm">arrow_back</span> Return to Login
        </router-link>
      </div>
    </div>

    <!-- Background Accent -->
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary-fixed-dim rounded-full blur-[120px] opacity-20 -z-10 translate-y-1/2 -translate-x-1/2"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function handleSubmit() { router.push('/login') }
</script>

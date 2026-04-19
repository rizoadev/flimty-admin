<template>
  <div class="bg-surface min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary-container selection:text-on-primary-container">
    <main class="w-full max-w-[440px] flex flex-col items-center">
      <!-- Brand Header -->
      <header class="mb-12 flex justify-center items-center">
        <div class="inline-flex items-center justify-center w-14 h-14 bg-primary-container rounded-xl">
          <span class="material-symbols-outlined text-on-primary-container text-3xl" style="font-variation-settings: 'FILL' 1;">eco</span>
        </div>
      </header>

      <!-- Main Form Card -->
      <section class="w-full bg-surface-container-lowest rounded-3xl p-8 md:p-10 ambient-shadow flex flex-col gap-8">
        <div class="space-y-3">
          <h1 class="font-headline font-extrabold text-3xl text-on-surface tracking-tighter leading-tight">Reset Password</h1>
          <p class="text-on-surface-variant text-base leading-relaxed">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
        </div>
        <form action="#" class="flex flex-col gap-6" @submit.prevent="handleSubmit">
          <div class="space-y-2">
            <label class="font-label text-[10px] font-bold uppercase tracking-wider text-on-surface-variant ml-1" for="forgot-email">Email Address</label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                <span class="material-symbols-outlined text-xl">mail</span>
              </div>
              <input class="w-full h-14 pl-12 pr-4 bg-surface-container-highest rounded-xl border-none ring-2 ring-transparent focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200 outline-none text-on-surface placeholder:text-outline-variant font-medium" id="forgot-email" name="email" placeholder="name@company.com" required type="email" />
            </div>
          </div>
          <button class="primary-gradient text-white h-14 rounded-xl font-headline font-bold text-lg shadow-lg active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group" type="submit">
            Send Reset Link
            <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </form>
        <div class="flex flex-col items-center pt-2">
          <router-link to="/login" class="flex items-center gap-2 text-primary font-semibold hover:bg-primary-container/30 px-4 py-2 rounded-lg transition-colors group">
            <span class="material-symbols-outlined text-lg">keyboard_backspace</span>
            <span>Back to Login</span>
          </router-link>
        </div>
      </section>

      <!-- Info Chips -->
      <div class="mt-12 flex flex-wrap justify-center gap-3">
        <div class="bg-surface-container-high px-4 py-2 rounded-full flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">verified_user</span>
          <span class="text-[10px] font-bold uppercase tracking-wider text-on-secondary-fixed-variant">Secure Authentication</span>
        </div>
        <div class="bg-tertiary-container px-4 py-2 rounded-full flex items-center gap-2">
          <span class="material-symbols-outlined text-tertiary text-sm">support_agent</span>
          <span class="text-[10px] font-bold uppercase tracking-wider text-on-tertiary-container">Help Center</span>
        </div>
      </div>
    </main>

    <!-- Background Decorative -->
    <div class="fixed -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    <div class="fixed top-20 right-20 w-64 h-64 bg-tertiary/5 rounded-full blur-[100px] -z-10"></div>

    <footer class="fixed bottom-8 py-0 text-on-surface-variant/60 text-xs font-medium tracking-tight">
      © 2024 Botanical Architect • Urban Conservatory Management
    </footer>
  </div>
</template>

<script setup>
function handleSubmit() { alert('Reset link sent!') }
</script>

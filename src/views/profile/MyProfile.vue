<template>
  <AdminLayout>
    <div class="p-8 max-w-5xl mx-auto">
      <div class="mb-10">
        <span class="text-[10px] font-bold uppercase tracking-wider text-primary">System Administration</span>
        <h2 class="font-headline text-3xl font-extrabold text-on-surface tracking-tighter mt-1">My Profile</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Main Column -->
        <div class="lg:col-span-8 space-y-8">
          <!-- Personal Info Card -->
          <section class="bg-surface-container-lowest p-8 rounded-xl card-shadow">
            <div class="flex items-center gap-4 mb-8">
              <div class="bg-primary-container p-2 rounded-lg"><span class="material-symbols-outlined text-on-primary-container">badge</span></div>
              <h3 class="font-headline text-xl font-bold">Personal Information</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Full Name</label>
                <input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" type="text" value="Julian Vanderberg" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Email Address</label>
                <input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" type="email" value="julian.v@botanicalarchitect.com" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Admin Role</label>
                <div class="relative">
                  <select class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface appearance-none">
                    <option>Senior Architect</option><option>System Administrator</option><option>Content Curator</option>
                  </select>
                  <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Location</label>
                <input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" type="text" value="Stockholm, Sweden" />
              </div>
            </div>
            <div class="mt-8 pt-6 border-t border-surface-container-high flex justify-end">
              <button class="primary-gradient text-on-primary px-6 py-2.5 rounded-lg font-bold text-sm active:scale-95 transition-transform">Save Changes</button>
            </div>
          </section>

          <!-- Security Card -->
          <section class="bg-surface-container-lowest p-8 rounded-xl card-shadow">
            <div class="flex items-center gap-4 mb-8">
              <div class="bg-tertiary-container p-2 rounded-lg"><span class="material-symbols-outlined text-on-tertiary-container">lock</span></div>
              <h3 class="font-headline text-xl font-bold">Security &amp; Access</h3>
            </div>
            <div class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Current Password</label>
                  <input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" type="password" value="••••••••••••" />
                </div>
                <div></div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">New Password</label>
                  <input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" placeholder="Enter new password" type="password" />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold uppercase tracking-wider text-on-surface-variant ml-1">Confirm New Password</label>
                  <input class="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface" placeholder="Repeat new password" type="password" />
                </div>
              </div>
              <div class="bg-surface-container-low p-4 rounded-lg flex items-start gap-4">
                <span class="material-symbols-outlined text-primary">info</span>
                <p class="text-xs text-on-surface-variant leading-relaxed">Password must contain at least 12 characters, including one uppercase letter, one special symbol, and one numeric value to maintain Conservatory Protocol.</p>
              </div>
            </div>
            <div class="mt-8 pt-6 border-t border-surface-container-high flex justify-end">
              <button class="bg-surface-container-high text-on-surface px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-surface-container-highest transition-colors active:scale-95">Update Password</button>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-4 space-y-8">
          <!-- Avatar Card -->
          <section class="bg-surface-container-lowest p-8 rounded-xl card-shadow text-center">
            <div class="relative inline-block group mb-6">
              <div class="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary-fixed-dim">
                <img alt="Profile Photo" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOP2bldAZFVVAHhgIEW7a1nKzbjLFOyT6aHwodd_T2hwtQpu2XqDtKyxyilFN4lUOYbRE7SwAU1c9dbMqtANBoT6tB7viJNVm0NRU1DxRNo_HkAnlTbRp22oW1BviHXI6n8raVAL5RsjWz5seSW13fPAfHWtZ_JYZ-Y5hEcVzeim4mCEcRKtzYXptWbS-d7m86cUkoFj-uA5V3jWwW4NDzD6NuN_AXBj6-O9RcdhTa8bo1vcSKRZzsIieH1uyefMc4cx6iTFy_K1w" />
              </div>
              <button class="absolute bottom-1 right-1 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-surface-container-lowest hover:scale-105 transition-transform active:scale-95">
                <span class="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
            <h4 class="font-headline text-lg font-bold text-on-surface">Julian Vanderberg</h4>
            <p class="text-sm text-on-surface-variant mb-6">Last active: 14 mins ago</p>
            <button class="w-full border border-outline-variant text-on-surface-variant py-2.5 rounded-lg text-sm font-medium hover:bg-surface-container-low transition-colors active:scale-95">Change Avatar</button>
          </section>

          <!-- Account Status -->
          <section class="bg-surface-container-lowest p-6 rounded-xl card-shadow">
            <h4 class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-4">Account Status</h4>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-sm text-on-surface-variant">Membership</span>
                <span class="px-2 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-extrabold rounded uppercase">Lifetime Elite</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-on-surface-variant">Two-Factor Auth</span>
                <span class="flex items-center gap-1 text-primary font-bold text-sm"><span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span> Enabled</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm text-on-surface-variant">Data Usage</span>
                <span class="text-sm font-medium text-on-surface">4.2 GB / 10 GB</span>
              </div>
              <div class="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-1"><div class="bg-primary h-full w-[42%]"></div></div>
            </div>
          </section>

          <!-- Notification Preferences -->
          <section class="bg-surface-container-lowest p-6 rounded-xl card-shadow">
            <h4 class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-4">Email Notifications</h4>
            <div class="space-y-4">
              <label class="flex items-center justify-between cursor-pointer group">
                <span class="text-sm text-on-surface group-hover:text-primary transition-colors">Project Updates</span>
                <input checked class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </label>
              <label class="flex items-center justify-between cursor-pointer group">
                <span class="text-sm text-on-surface group-hover:text-primary transition-colors">Security Alerts</span>
                <input checked class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </label>
              <label class="flex items-center justify-between cursor-pointer group">
                <span class="text-sm text-on-surface group-hover:text-primary transition-colors">Weekly Reports</span>
                <input class="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </label>
            </div>
          </section>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../layouts/AdminLayout.vue'
</script>

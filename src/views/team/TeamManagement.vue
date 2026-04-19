<template>
  <AdminLayout>
    <div class="p-8">
      <!-- Header -->
      <div class="flex justify-between items-end mb-8">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Organization</span>
          <h2 class="text-3xl font-headline font-extrabold tracking-tighter text-on-surface">Team Management</h2>
        </div>
        <button class="primary-gradient text-white px-6 py-3 rounded-lg font-headline font-bold flex items-center gap-2 shadow-[0px_12px_32px_rgba(42,108,44,0.2)] active:scale-95 transition-transform">
          <span class="material-symbols-outlined">person_add</span> Add New User
        </button>
      </div>

      <!-- Stat Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div v-for="stat in stats" :key="stat.label" class="bg-surface-container-lowest p-6 rounded-xl card-shadow">
          <div class="flex items-center justify-between mb-4">
            <span class="material-symbols-outlined p-2 rounded-lg" :class="stat.iconClass">{{ stat.icon }}</span>
            <span class="text-xs font-bold" :class="stat.changeClass">{{ stat.change }}</span>
          </div>
          <p class="text-on-surface-variant text-xs uppercase font-bold tracking-wider">{{ stat.label }}</p>
          <p class="text-2xl font-headline font-extrabold mt-1">{{ stat.value }}</p>
        </div>
      </div>

      <!-- Table -->
      <div class="bg-surface-container-lowest rounded-xl card-shadow overflow-hidden">
        <div class="p-6 border-b border-surface-container flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer hover:bg-surface-container-highest"><span class="material-symbols-outlined text-sm">filter_list</span> Filter</div>
            <div class="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer hover:bg-surface-container-highest"><span class="material-symbols-outlined text-sm">sort</span> Sort</div>
          </div>
          <div class="text-sm text-on-surface-variant">Showing <span class="font-bold text-on-surface">1-10</span> of 428</div>
        </div>
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-low">
              <th class="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Team Member</th>
              <th class="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Role</th>
              <th class="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Status</th>
              <th class="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Last Active</th>
              <th class="px-6 py-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-container">
            <tr v-for="member in members" :key="member.name" class="hover:bg-surface-container-low transition-colors group">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <img :alt="member.name" class="w-10 h-10 rounded-lg object-cover" :src="member.avatar" />
                  <div>
                    <p class="font-bold text-on-surface">{{ member.name }}</p>
                    <p class="text-xs text-on-surface-variant">{{ member.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="px-3 py-1 rounded-full text-xs font-bold" :class="member.roleClass">{{ member.role }}</span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full" :class="member.active ? 'bg-primary' : 'bg-outline-variant'"></span>
                  <span class="text-sm font-medium" :class="member.active ? 'text-on-surface' : 'text-on-surface-variant'">{{ member.active ? 'Active' : 'Inactive' }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-on-surface-variant">{{ member.lastActive }}</td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-2 hover:bg-surface-container-highest rounded-lg text-primary transition-colors"><span class="material-symbols-outlined">edit</span></button>
                  <button class="p-2 hover:bg-error-container hover:text-white rounded-lg text-error transition-colors"><span class="material-symbols-outlined">delete</span></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="p-6 flex items-center justify-between bg-surface-container-low">
          <button class="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"><span class="material-symbols-outlined text-lg">chevron_left</span> Previous</button>
          <div class="flex gap-2">
            <button class="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
            <button class="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-bold">2</button>
            <button class="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-bold">3</button>
            <span class="px-1 self-end">...</span>
            <button class="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-bold">42</button>
          </div>
          <button class="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">Next <span class="material-symbols-outlined text-lg">chevron_right</span></button>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../layouts/AdminLayout.vue'

const stats = [
  { label: 'Total Members', value: '428', icon: 'groups', iconClass: 'text-primary bg-primary-container', change: '+12%', changeClass: 'text-on-surface-variant' },
  { label: 'Active Admins', value: '14', icon: 'verified_user', iconClass: 'text-tertiary bg-tertiary-container', change: 'Stable', changeClass: 'text-on-surface-variant' },
  { label: 'Pending Invites', value: '08', icon: 'pending', iconClass: 'text-secondary bg-secondary-container', change: '-2', changeClass: 'text-error' },
  { label: 'Activity Rate', value: 'High', icon: 'bolt', iconClass: 'text-primary bg-surface-container-high', change: '94%', changeClass: 'text-on-surface-variant' },
]

const members = [
  { name: 'Elena Vance', email: 'elena@botanical-arch.com', role: 'Admin', roleClass: 'bg-primary-container text-on-primary-container', active: true, lastActive: '2 mins ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA25XGnuZBN_iCeF86YKRoC_6N7TvLZnRG5fO4-T__Uk09LCV3Cs0wh1sWtLcFYWxSYvK1WIUJ_jYoLMSK1S92YKZ3-9wfwz6DI-i5yrnboZeOZ5PkWoxyivRP7hnsY_hs-gLl3XGw5IcZeYkf38ebNjrEEz1m67MTNf9KDtU2l2zNfCVowlojoR-mBOws1q1GIQRg2u3f8p40Dx9K6I93mXSVbEEoZgvGdj6lyaDVyXuAUEiEhd0T3R7ywaZqF-TLr9axGIsocWLI' },
  { name: 'Marcus Thorne', email: 'marcus.t@botanical-arch.com', role: 'Editor', roleClass: 'bg-secondary-container text-on-secondary-container', active: true, lastActive: '1 hour ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPXVYJNGTRHgxupIGSPWJan-oQSpbg8_Z7P636iLAaIGDhm3t0kspdH3xrx-wLguZnABaoqg-6-Li7_xzhOfEY0pon5ywzJfl_neiHo2bsIl7UcDsESpQXJPdTH37k_ZQY6KHNOEz_M0nKFzlrc_EzwBG2FJa6cxkU9p_r1by_bhlXFArdDdZ6vYi5DuqSUkkLL8Tpia8enqVzCebbnS5MCQBe4zmmHn8t1fk-bkEFKCSd3a3bHAThqomsNnNsnZNMYYRTLUUITI4' },
  { name: 'Sasha Kross', email: 's.kross@botanical-arch.com', role: 'Viewer', roleClass: 'bg-surface-container-highest text-on-surface-variant', active: false, lastActive: '4 days ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoavA-IWovCCCdronerCju861E8qfltN3iP7f3eEp3y8zSaxtygHklgpD735o32CMzkVsTL-T4exAJaMUrJQrbo8zcsw6ydrC0CPwkKQ_FEw9foYkmteX7OVo4ZhjCdaeDaEygm1xIxFaoaIfs1YNHTIiZG3M2Ze9I9JE-ox6aKHiuS3w_asB4Wee65FX1j2ATQzvD-ExMzfh-3KrlOm7_tudF06R1GyTz3AsjG_WmKLzo7P1fl-xKEhgkg3XPPbgv72wk26p1dYY' },
  { name: 'Julian Berg', email: 'berg.j@botanical-arch.com', role: 'Editor', roleClass: 'bg-secondary-container text-on-secondary-container', active: true, lastActive: 'Just now', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAh8d3twQxRTCgGo9zjpVtgyklPaa7jDUBn9kt96nkOjAQ5hr2hVfl8oH4dd8pUCjsfrcy_2vRfr6igg0EjGh1ss59PR-pa-IRXXfiwpANvfrUEyfHedgFPwACrJqtou7Ys_WkyyJcvl6u_Iz3pxeoBzW9y1fwkr2APnFnh6mSxjCqO2qDQIkUArgf7FwEcWzNtNtAal0bPdvjY_d_otyJCAfFr0A1RXlqK3XZar3WEp2TvxybWL6PVb-VY_7hBr52X7DlUDqJg8Vw' },
]
</script>

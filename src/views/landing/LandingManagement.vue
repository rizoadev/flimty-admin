<template>
  <AdminLayout>
    <div class="p-8 grid grid-cols-12 gap-8">
      <!-- Left Column: CMS Editor -->
      <div class="col-span-12 lg:col-span-5 space-y-8">
        <div>
          <h2 class="font-headline font-extrabold text-3xl text-on-surface tracking-tighter">Content Editor</h2>
          <p class="text-on-surface-variant mt-1">Manage your landing page architecture and brand voice.</p>
        </div>
        <!-- Hero Section Editor -->
        <section class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">bolt</span>
              <h3 class="font-headline font-bold text-lg">Hero Section</h3>
            </div>
            <span class="text-[10px] font-bold uppercase text-on-surface-variant px-2 py-1 bg-surface-container-high rounded">Section 01</span>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1 ml-1">Main Headline</label>
              <textarea class="w-full p-4 rounded-lg bg-surface-container-high border-none text-on-surface font-headline font-bold text-xl focus:ring-2 focus:ring-primary/20 leading-tight resize-none" rows="3">Architecting Urban Nature, One Balcony at a Time.</textarea>
            </div>
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1 ml-1">Subheadline</label>
              <input class="w-full p-3 rounded-lg bg-surface-container-high border-none text-on-surface text-sm focus:ring-2 focus:ring-primary/20" type="text" value="Bespoke botanical solutions for modern city dwellers." />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <button class="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary-container text-on-primary-container font-bold text-sm active:scale-95"><span class="material-symbols-outlined text-lg">image</span> Replace Background</button>
              <button class="flex items-center justify-center gap-2 p-3 rounded-lg bg-surface-container-high text-on-surface font-bold text-sm active:scale-95"><span class="material-symbols-outlined text-lg">palette</span> Theme Colors</button>
            </div>
          </div>
        </section>
        <!-- Portfolio Gallery -->
        <section class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary">grid_view</span>
              <h3 class="font-headline font-bold text-lg">Portfolio Gallery</h3>
            </div>
            <button class="text-primary text-xs font-bold hover:underline">View All</button>
          </div>
          <div class="grid grid-cols-3 gap-3 mb-6">
            <div class="aspect-square rounded-lg overflow-hidden group relative">
              <img alt="Gallery 1" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATC105lnTvD7wEQV9B3al6vxKoa9DRlDyO4eKqjLB4rKAo3XDqoxbJm3TLD7wMT4rwlMHXYZ3DSVsVxVIGIUCq-4avqKkr0WtrJgH8bxGCKnFRDzVsObA90HrEmyAMZv_X3tKpeS18LABMY1bnYdgvKO4pm_yDeCzHbWWDdUdZQBF-wlRhSk9plO0Fp_hPelF9SBRMFAYSNgjGGF4Yjn12_drPb_rhgU4LwC-lf4qMRBM2lqyxpidjFXhMqRxgwwj1O5U2wUxR2p8" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span class="material-symbols-outlined text-white">delete</span></div>
            </div>
            <div class="aspect-square rounded-lg overflow-hidden group relative">
              <img alt="Gallery 2" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI2p3ywDQPO-cWmw30bLMd-VTr2UKzb0ErQmyv1V-wu8K7yRHFHCrrhCjxvrAn44ywnBo36T2ORjigY4mgfeZypUR51n4gOurs0t6CqQuwas9hj5efncgRgqBZlrV6YjqSp8ChXcUoCQzm26N-oyLAunfzONDTlYayyxlaWbtT077E4Kst9_eSgzppVjCXy9CUgoYFPjk9oyImdeDo4ts1ee6BG745mCASfSz0pLWO2-HDUKkxKgrkS67IeHGnCfQcIBMqzIk25oM" />
              <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span class="material-symbols-outlined text-white">delete</span></div>
            </div>
            <button class="aspect-square rounded-lg border-2 border-dashed border-outline-variant flex flex-col items-center justify-center gap-1 hover:bg-surface-container transition-colors">
              <span class="material-symbols-outlined text-on-surface-variant">upload</span>
              <span class="text-[10px] font-bold uppercase tracking-tighter">Add Item</span>
            </button>
          </div>
        </section>
        <!-- Social Proof -->
        <section class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
          <div class="flex items-center gap-2 mb-6">
            <span class="material-symbols-outlined text-primary">forum</span>
            <h3 class="font-headline font-bold text-lg">Social Proof</h3>
          </div>
          <div class="space-y-4">
            <div class="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full overflow-hidden">
                    <img alt="Reviewer" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJlULdS4Onjdjf0akMgwDdTTwmsKKmCpmShUQQ1dH2t2p3BqVqrcOjGncIw1Vt-Q53Xv6kigw7EIJhxs3HkXk5Rd8nSHgR_Cgx6Ktx01L1deg8y5yDppmpMsTeYspTqicWZgRe-kn-f8v9BHPrpjvQIGrVS5GYVlbGPbRs6Wu8WkhrqLKZlS49AhuraEXOuZDoVB86QWSPJyyPE893sTGMwOxw8VkJreJiol-HzXDQJRIFPJis9Ms-jUWwHZLybWVEzhpd0qHhqns" />
                  </div>
                  <span class="text-sm font-bold">Sarah Jenkins</span>
                </div>
                <span class="material-symbols-outlined text-sm text-on-surface-variant">drag_indicator</span>
              </div>
              <p class="text-xs text-on-surface-variant italic">"Transformed my dull terrace into a private jungle oasis. Absolutely brilliant design team."</p>
            </div>
            <button class="w-full py-2 border-2 border-dashed border-outline-variant rounded-lg text-xs font-bold uppercase tracking-wider text-on-surface-variant hover:text-primary hover:border-primary transition-colors">+ New Testimonial</button>
          </div>
        </section>
      </div>

      <!-- Right Column: Live Preview -->
      <div class="col-span-12 lg:col-span-7">
        <div class="sticky top-24">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Live Preview</span>
              <div class="flex gap-1">
                <button class="w-6 h-6 rounded flex items-center justify-center bg-primary text-white"><span class="material-symbols-outlined text-xs">desktop_windows</span></button>
                <button class="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container-high transition-colors"><span class="material-symbols-outlined text-xs">smartphone</span></button>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <button class="text-xs font-bold text-on-surface-variant hover:text-on-surface">Discard</button>
              <button class="primary-gradient text-white px-6 py-2 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-shadow active:scale-95">Publish Changes</button>
            </div>
          </div>
          <!-- Browser Shell Preview -->
          <div class="rounded-2xl overflow-hidden border-8 border-surface-container shadow-2xl bg-white aspect-[4/5] lg:aspect-[3/4] custom-scrollbar overflow-y-auto">
            <nav class="glass-effect sticky top-0 px-8 py-4 flex items-center justify-between z-10 border-b border-outline-variant/5">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">potted_plant</span>
                <span class="font-headline font-extrabold text-primary text-lg tracking-tighter">Botanical Architect</span>
              </div>
              <div class="flex gap-6 text-xs font-bold text-on-surface tracking-wider"><a href="#">PORTFOLIO</a><a href="#">PROCESS</a><a href="#">BOOK</a></div>
            </nav>
            <!-- Hero Preview -->
            <div class="relative h-[500px] flex items-center px-12 overflow-hidden">
              <div class="absolute inset-0 z-0">
                <img alt="Hero" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKLEIOLitneOZ9fEk9z2VjcWOuBWuZWcI3WJ1uHCgz-2I-U8Xnx_W8sf6tNU2uMjZ1VPiw4VzFEw2BqH4Nvyb5vEwfJy6KPyxFDuvX-nWzsCwWqTogZ_HnixDa-Bb9H3Yvy-J5jb52cM7fJgYnJNeAVghXUt5kQxK22_j9EOIiur3VNQabf4E-zBj6w554ptNSvGt375AUHLdqUGmWQEqi5NA6WwMf5PtTtlPBxrF3tBR2jii7_G_JDP_2iewpAZ0_puqmMB0lWfY" />
                <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>
              <div class="relative z-10 max-w-lg">
                <h1 class="font-headline font-extrabold text-5xl text-white tracking-tighter leading-none mb-6">Architecting Urban Nature, One Balcony at a Time.</h1>
                <p class="text-lg text-white/80 mb-8 font-medium">Bespoke botanical solutions for modern city dwellers.</p>
                <button class="primary-gradient text-white px-8 py-4 rounded-full font-bold shadow-xl">Get Started</button>
              </div>
            </div>
            <!-- Portfolio Preview -->
            <div class="p-12 bg-surface">
              <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary mb-2">Our Portfolio</p>
              <h2 class="font-headline font-extrabold text-3xl tracking-tighter mb-8">Selected Sanctuaries</h2>
              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <img alt="Preview 1" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMSahjj1VOb7GfP5DMorHXUxyFgQcz32TF9XupUNM2i85lvy4dgIlT9Bu2sbW57H2tySagMFviyFAhK-j1MP_m81k7-x39YW77UELuQUrzKvE_rL9MGnS2eCHw0ub805LDZMcWUHNdbUv3bqO5wimtUnRZb4ta3EKg65toA-5wFhh6p1j347nUs0O5DGbfJ3LMdEMTN4g2-aT2uB-WcPyevLnVVvfs2HgX9oK5TL0Z-9iU1w6H5gupxfwLWdb0If3vDfF0QF5D3dQ" />
                  </div>
                  <div><h4 class="font-bold">Terrace Minimalism</h4><p class="text-xs text-on-surface-variant">Singapore, 2023</p></div>
                </div>
                <div class="space-y-4 pt-12">
                  <div class="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                    <img alt="Preview 2" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWilEHBQhZzHS9rBCq4NcZVuTXbguBh-7FPqiIgenp1x6mYO3AgLdW85hX17c2xssEvXr0EU-h-OBEI8BFLGVKLFhbgJ2Ricm65MZfq_fARYlsgIirrDt91RXj24gePjpcrmR1Yhysy51V5VtskqiCN99QwAfmLCuCph5-m8ZJxk0Jn9Bgew81G7Lfmrx_Qkl6h-3a0OGGsmb4tOrGd57xYS3hgZd0CaOk2EwyHvCm98IYsxHkc7YpHuXuLJEpztK6mLS-Cj4u7Oc" />
                  </div>
                  <div><h4 class="font-bold">Vertical Jungle</h4><p class="text-xs text-on-surface-variant">Austin, TX</p></div>
                </div>
              </div>
            </div>
            <!-- Testimonial Preview -->
            <div class="p-12 bg-surface-container-low text-center">
              <span class="material-symbols-outlined text-primary mb-6 block" style="font-size: 48px;">format_quote</span>
              <p class="text-xl font-medium text-on-surface leading-relaxed mb-8 italic">"Transformed my dull terrace into a private jungle oasis. Absolutely brilliant design team."</p>
              <div class="flex flex-col items-center gap-2">
                <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <img alt="Reviewer" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBF3iHhQA-UM8wD0pWQ-6DSOR_hURpo1Cr7UO4jPAKiVuUF2qn6Xu9beD7uiTaapESFY7Kc3P3ZDVSsAs2wLKEeDrVibh6LuOsjKF7LUpkaq2SOS6_XuY-_QHVvC2MwA7vXCxFR-1au0vl7polIZB2FulmHEN9pofPndKqdrroJUG_iHW2XcvJOdrRiVr1wuxB_cpd3m6RfljW3OOn48eZL10rDMPi0XhjSvVFumCiOy8nhVw9S1Qr4Ue2KBun3pJ9jGssZ6VE2eA" />
                </div>
                <span class="font-bold">Sarah Jenkins</span>
                <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Urban Living CEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../layouts/AdminLayout.vue'
</script>

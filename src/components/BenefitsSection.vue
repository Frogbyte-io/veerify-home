<template>
  <section class="border-t border-border/50 py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <div class="mb-16 text-center">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary">Built for everyone</p>
        <h2 class="font-display text-4xl font-bold tracking-tight lg:text-5xl">
          The right tool<br />
          <em class="italic text-primary">for every role.</em>
        </h2>
        <p class="mt-4 text-lg text-muted-foreground">
          Whether you're shipping code or shaping strategy,<br class="hidden sm:block" />
          Veerify works the way you do.
        </p>
      </div>

      <!-- Tab switcher -->
      <div class="mb-12 flex justify-center">
        <div class="inline-flex rounded-xl border border-border bg-card p-1">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="relative rounded-lg px-6 py-2.5 text-sm font-medium transition-all"
            :class="activeTab === tab.id
              ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
              : 'text-muted-foreground hover:text-foreground'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Content panels -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">

        <!-- Benefits list -->
        <div>
          <div
            v-for="(benefit, i) in activeBenefits"
            :key="benefit.title"
            class="benefit-item group flex gap-5 rounded-2xl p-5 transition-colors hover:bg-secondary/30"
            :style="{ animationDelay: `${i * 0.07}s` }"
          >
            <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
              <component :is="benefit.icon" />
            </div>
            <div>
              <h3 class="mb-1 font-semibold leading-snug">{{ benefit.title }}</h3>
              <p class="text-sm leading-relaxed text-muted-foreground">{{ benefit.description }}</p>
            </div>
          </div>
        </div>

        <!-- Visual callout -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border/60 bg-card p-8 shadow-xl shadow-black/20">
            <!-- Ambient glow -->
            <div class="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div class="h-48 w-48 rounded-full bg-primary/8 blur-3xl"></div>
            </div>
            <div class="relative text-center">
              <div class="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <svg v-if="activeTab === 'developers'" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
                <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p class="font-display text-4xl font-bold leading-none tracking-tight">{{ activeCallout.stat }}</p>
              <p class="mt-2 text-sm font-medium text-muted-foreground">{{ activeCallout.label }}</p>
              <div class="mt-6 space-y-2">
                <div
                  v-for="tag in activeCallout.tags"
                  :key="tag"
                  class="flex items-center gap-2 rounded-lg bg-secondary/60 px-3 py-2 text-xs text-muted-foreground"
                >
                  <svg class="h-3 w-3 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, h } from 'vue'

const activeTab = ref('developers')

const tabs = [
  { id: 'developers', label: 'For Developers' },
  { id: 'users', label: 'For Users' },
]

function IconCode() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('polyline', { points: '16 18 22 12 16 6' }),
    h('polyline', { points: '8 6 2 12 8 18' }),
  ])
}
function IconApi() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('rect', { width: 7, height: 7, x: 3, y: 3, rx: 1 }),
    h('rect', { width: 7, height: 7, x: 14, y: 3, rx: 1 }),
    h('rect', { width: 7, height: 7, x: 3, y: 14, rx: 1 }),
    h('rect', { width: 7, height: 7, x: 14, y: 14, rx: 1 }),
  ])
}
function IconGitHub() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }, [
    h('path', { d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z' }),
  ])
}
function IconWebhook() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('path', { d: 'M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2' }),
    h('path', { d: 'm6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06' }),
    h('path', { d: 'm12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8' }),
  ])
}
function IconLock() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('rect', { width: 18, height: 11, x: 3, y: 11, rx: 2, ry: 2 }),
    h('path', { d: 'M7 11V7a5 5 0 0 1 10 0v4' }),
  ])
}
function IconZap() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' }),
  ])
}

function IconStar() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' }),
  ])
}
function IconMegaphone() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('path', { d: 'M3 11l19-9-9 19-2-8-8-2z' }),
  ])
}
function IconMap() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('polygon', { points: '3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21' }),
    h('line', { x1: 9, y1: 3, x2: 9, y2: 18 }),
    h('line', { x1: 15, y1: 6, x2: 15, y2: 21 }),
  ])
}
function IconBell() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('path', { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' }),
    h('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' }),
  ])
}
function IconVote() {
  return h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.75, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': true }, [
    h('path', { d: 'M18 15l-6-6-6 6' }),
  ])
}

const developerBenefits = [
  {
    icon: IconCode,
    title: 'Full REST API access',
    description: 'Integrate feedback directly into your existing tools and workflows with a clean, well-documented API.',
  },
  {
    icon: IconGitHub,
    title: 'Open source & self-hostable',
    description: 'Inspect, fork, and contribute to the codebase. Host Veerify on your own infrastructure with complete control.',
  },
  {
    icon: IconWebhook,
    title: 'Webhooks & event streams',
    description: 'React to new feedback, votes, and status changes in real time via outbound webhooks to any endpoint.',
  },
  {
    icon: IconLock,
    title: 'No vendor lock-in',
    description: 'Export all your data at any time in standard formats. Your feedback belongs to you, always.',
  },
  {
    icon: IconZap,
    title: '5-minute setup',
    description: 'Add a feedback widget to any product with a single script tag or our lightweight npm package.',
  },
]

const userBenefits = [
  {
    icon: IconMegaphone,
    title: 'Your voice shapes the product',
    description: 'Submit ideas and bug reports directly to the team. Every piece of feedback is seen and considered.',
  },
  {
    icon: IconVote,
    title: 'Vote on what matters most',
    description: 'Upvote existing requests to signal priority. The most-wanted features get built first.',
  },
  {
    icon: IconMap,
    title: 'Transparent public roadmap',
    description: 'See exactly what\'s planned, in progress, and shipped. No more guessing what comes next.',
  },
  {
    icon: IconBell,
    title: 'Stay in the loop automatically',
    description: 'Get notified when a feature you voted for moves to "In Progress" or ships to production.',
  },
  {
    icon: IconStar,
    title: 'Simple and fast to use',
    description: 'Submit feedback in seconds — no accounts required on public boards. Just say what you need.',
  },
]

const callouts = {
  developers: {
    stat: '5 min',
    label: 'Average integration time',
    tags: ['REST API + webhooks', 'Open source · MIT License', 'Self-host or cloud'],
  },
  users: {
    stat: '3×',
    label: 'More features shipped with user input',
    tags: ['Public voting boards', 'Live roadmap updates', 'Instant notifications'],
  },
}

const activeBenefits = computed(() => activeTab.value === 'developers' ? developerBenefits : userBenefits)
const activeCallout = computed(() => callouts[activeTab.value])
</script>

<style scoped>
.benefit-item {
  animation: fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>

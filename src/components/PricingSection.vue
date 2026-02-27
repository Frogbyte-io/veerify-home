<template>
  <section id="pricing" class="border-t border-border/50 py-28">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <div class="mb-16 text-center">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-primary">Pricing</p>
        <h2 class="font-display text-4xl font-bold tracking-tight lg:text-5xl">
          Free while we build<br />
          <em class="italic text-primary">together.</em>
        </h2>
        <p class="mt-4 text-lg text-muted-foreground">
          Veerify is in open beta. Everything is free while we shape the<br class="hidden sm:block" />
          product alongside our earliest users.
        </p>
      </div>

      <div class="mx-auto max-w-md">
        <div class="pricing-card relative overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-2xl shadow-primary/10">
          <!-- Top accent bar -->
          <div class="h-1 w-full bg-primary"></div>

          <div class="p-10">
            <!-- Badge -->
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
              <span class="text-xs font-medium text-primary">Beta Access</span>
            </div>

            <!-- Price -->
            <div class="mb-2 flex items-end gap-2">
              <span class="font-display text-7xl font-bold leading-none">$0</span>
              <span class="mb-2 text-muted-foreground">/month</span>
            </div>
            <p class="mb-8 text-sm text-muted-foreground">
              Free forever during beta. Fair pricing when we launch.
            </p>

            <!-- Feature list -->
            <ul class="mb-8 space-y-3.5">
              <li
                v-for="item in features"
                :key="item"
                class="flex items-start gap-3 text-sm"
              >
                <svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                {{ item }}
              </li>
            </ul>

            <!-- CTA -->
            <a
              href="https://app.veerify.io"
              class="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:opacity-90 hover:-translate-y-0.5"
            >
              Get started — it's free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Unlimited feedback projects',
  'Unlimited team members',
  'Public roadmap pages',
  'Voting & prioritization',
  'User notifications',
  'API access',
  'Priority support during beta',
]
</script>

<style scoped>
.pricing-card {
  transition: box-shadow 300ms ease, transform 300ms ease;
}
.pricing-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 60px -12px color-mix(in oklch, var(--primary) 25%, transparent);
}
</style>

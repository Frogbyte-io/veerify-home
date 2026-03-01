<template>
  <section class="border-t border-border/50 py-28">
    <div class="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border/60 bg-card px-10 py-20 text-center shadow-xl">

      <!-- Ambient glow -->
      <div class="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div class="h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div class="relative">
        <p class="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">Get started today</p>
        <h2 class="font-display mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
          Start listening to<br />your users today.
        </h2>
        <p class="mx-auto mb-10 max-w-md text-lg text-muted-foreground">
          Join the teams already using Veerify to build products their users actually love.
        </p>
        <a
          href="https://app.veerify.io/get-started"
          class="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-10 text-base font-semibold text-primary-foreground shadow-2xl shadow-primary/30 transition-all hover:opacity-90 hover:-translate-y-0.5"
        >
          Create your free account
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <p class="mt-4 text-xs text-muted-foreground">No credit card required. Free during beta.</p>
      </div>
    </div>
  </section>
</template>

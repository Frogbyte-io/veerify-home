<template>
  <header class="sticky top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-xl">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2.5 group">
        <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary transition-transform group-hover:scale-105">
          <img src="/veerify.svg" alt="Veerify" class="h-5 w-5" />
        </div>
        <span class="font-display text-[17px] font-semibold tracking-tight">Veerify</span>
      </a>

      <!-- Nav links -->
      <nav class="hidden items-center gap-7 md:flex" aria-label="Main navigation">
        <a href="#features" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
        <a href="#how-it-works" class="text-sm text-muted-foreground transition-colors hover:text-foreground">How it works</a>
        <a href="#pricing" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
        <a href="https://feedback.veerify.io" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Feedback</a>
      </nav>

      <!-- Right side -->
      <div class="flex items-center gap-3">
        <!-- Dark mode toggle -->
        <button
          @click="$emit('toggle-dark')"
          class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border/60 hover:text-foreground"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="isDark" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
          </svg>
          <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- GitHub link -->
        <a
          href="https://github.com/Frogbyte-io/veerify"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-border/60 hover:text-foreground sm:flex"
          aria-label="Open source on GitHub"
          title="Open source on GitHub"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </a>

        <a
          href="https://app.veerify.io/login"
          class="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
        >
          Sign in
        </a>
        <a
          href="https://app.veerify.io/get-started"
          class="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground shadow-md shadow-primary/20 transition-all hover:opacity-90"
        >
          Get started free
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
defineProps({
  isDark: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['toggle-dark'])
</script>

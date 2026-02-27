<template>
  <footer class="border-t border-border/50 py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-12 grid grid-cols-2 gap-8 sm:grid-cols-4">

        <!-- Brand -->
        <div class="col-span-2 sm:col-span-1">
          <a href="/" class="mb-4 flex items-center gap-2.5">
            <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 4h10M3 8h7M3 12h5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="font-display text-base font-semibold">Veerify</span>
          </a>
          <p class="text-sm leading-relaxed text-muted-foreground">
            The feedback platform for teams who care about what they build.
          </p>
        </div>

        <!-- Product -->
        <div>
          <h4 class="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Product</h4>
          <ul class="space-y-3">
            <li><a href="#features" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a></li>
            <li><a href="#pricing" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a></li>
            <li><a href="#how-it-works" class="text-sm text-muted-foreground transition-colors hover:text-foreground">How it works</a></li>
            <li><a href="https://app.veerify.io" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Sign in</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Company</h4>
          <ul class="space-y-3">
            <li><a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">About</a></li>
            <li><a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Blog</a></li>
            <li><a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy</a></li>
            <li><a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Terms</a></li>
          </ul>
        </div>

        <!-- Get started -->
        <div>
          <h4 class="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Get started</h4>
          <a
            href="https://app.veerify.io"
            class="inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
          >
            Try for free →
          </a>
          <p class="mt-3 text-xs text-muted-foreground">Free during beta.</p>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
        <p class="text-xs text-muted-foreground">© 2026 Veerify. All rights reserved.</p>
        <a href="https://app.veerify.io" class="text-xs text-muted-foreground transition-colors hover:text-foreground">
          Go to app →
        </a>
      </div>
    </div>
  </footer>
</template>

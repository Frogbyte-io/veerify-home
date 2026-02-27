<template>
  <div class="min-h-screen bg-background text-foreground antialiased">

    <!-- Grain texture overlay (fixed, sits above everything) -->
    <div class="grain-overlay" aria-hidden="true"></div>

    <TheNavbar :is-dark="isDark" @toggle-dark="toggleDark" />
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <PricingSection />
    <CtaSection />
    <TheFooter />

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import PricingSection from './components/PricingSection.vue'
import CtaSection from './components/CtaSection.vue'
import TheFooter from './components/TheFooter.vue'

const isDark = ref(true)

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<style scoped>
.grain-overlay {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
  opacity: 0.022;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}
</style>

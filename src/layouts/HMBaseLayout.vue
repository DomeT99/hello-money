<script setup lang="ts">
import HMNavbar from "@/components/HMNavbar.vue";
</script>
<template>
  <section class="flex flex-row bg-indigo-100">
    <HMNavbar />
    <section class="h-screen w-screen">
      <slot />
    </section>
  </section>
</template>

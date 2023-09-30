<script setup lang="ts">
import HMLeftArrow from "@/components/Icons/HMLeftArrow.vue";

const { title } = defineProps<{ title?: string }>();
</script>
<template>
  <header
    class="p-3 bg-white border-b-2 border-b-indigo-600 flex flex-row shadow-md"
  >
    <HMLeftArrow />
    <h2 class="ml-3 text-2xl">{{ title }}</h2>
  </header>
  <slot />
</template>

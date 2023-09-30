<script setup lang="ts">
import type { Component } from "vue";

const { title, icon } = defineProps<{ title?: string; icon?: Component }>();
</script>
<template>
  <header
    class="p-3 bg-white border-b-2 border-b-indigo-600 flex flex-row shadow-md"
  >
    <component :is="icon" />
    <h2 class="ml-3 text-2xl">{{ title }}</h2>
  </header>
  <slot />
</template>

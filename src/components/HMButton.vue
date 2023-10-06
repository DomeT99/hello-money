<script setup lang="ts">
import { type Button } from "@/types/components";

const { type, disabled, rounded } = defineProps<Button>();
</script>

<template>
  <button
    class="border border-indigo-600 bg-indigo-900 text-white px-4 py-0.5 m-0.5 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
    :class="[`rounded-${rounded || 'md'}`]"
    :type="type ?? 'button'"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

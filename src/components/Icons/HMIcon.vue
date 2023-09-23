<script setup lang="ts">
import { Icon } from "../../types/components";

const { classes, stroke, fill } = defineProps<Icon>();
</script>
<template>
  <svg
    :class="classes"
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill ?? 'none'"
    viewBox="0 0 24 24"
    :stroke="stroke"
  >
    <slot />
  </svg>
</template>

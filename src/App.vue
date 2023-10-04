<script setup lang="ts">
//Components
import HMBaseLayout from "./layouts/HMBaseLayout.vue";
//Router
import { RouterView } from "vue-router";
</script>

<template>
  <HMBaseLayout>
    <RouterView />
  </HMBaseLayout>
</template>

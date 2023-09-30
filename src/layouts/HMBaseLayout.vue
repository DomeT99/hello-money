<script setup lang="ts">
import HMNavbar from "@/components/HMNavbar.vue";
import HMPageLayout from "./HMPageLayout.vue";

import { useLayoutStore } from "@/stores/layoutStore";

const store = useLayoutStore();
</script>
<template>
  <section class="flex flex-row bg-indigo-100">
    <HMNavbar />
    <section class="h-screen w-screen">
      <HMPageLayout :title="store.titleHeader">
        <slot />
      </HMPageLayout>
    </section>
  </section>
</template>

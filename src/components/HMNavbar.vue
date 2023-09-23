<script setup lang="ts">
import HMHomeIcon from "@/components/Icons/HMHomeIcon.vue";
import HMExpenseIcon from "@/components/Icons/HMExpenseIcon.vue";
import HMChartIcon from "@/components/Icons/HMChartIcon.vue";
import HMSettingsIcon from "@/components/Icons/HMSettingsIcon.vue";
import HMUserIcon from "@/components/Icons/HMUserIcon.vue";

import { RouterLink } from "vue-router";
</script>
<template>
  <div class="h-screen flex">
    <aside
      class="flex flex-col items-center text-gray-700 shadow h-full bg-indigo-900"
    >
      <div class="h-8 flex items-center w-full">
        <img
          class="h-5 w-5 mx-auto"
          src="/favicon-no-bg.svg"
          alt="Hello Money Logo"
        />
      </div>

      <ul class="mt-1">
        <li class="hover:bg-indigo-800">
          <RouterLink
            to="/"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMHomeIcon />
          </RouterLink>
        </li>

        <li class="hover:bg-indigo-800">
          <RouterLink
            to="/expense"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMExpenseIcon />
          </RouterLink>
        </li>

        <li class="hover:bg-indigo-800">
          <RouterLink
            to="/charts"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMChartIcon />
          </RouterLink>
        </li>
      </ul>

      <div class="mt-auto hover:bg-indigo-800">
        <RouterLink
          to="/settings"
          class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
        >
          <HMSettingsIcon />
        </RouterLink>
      </div>

      <div class="hover:bg-indigo-800">
        <RouterLink
          to="/profile"
          class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
        >
          <HMUserIcon />
        </RouterLink>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
//Components
import HMHomeIcon from "@/components/Icons/HMHomeIcon.vue";
import HMExpenseIcon from "@/components/Icons/HMExpenseIcon.vue";
import HMChartIcon from "@/components/Icons/HMChartIcon.vue";
import HMSettingsIcon from "@/components/Icons/HMSettingsIcon.vue";
import HMUserIcon from "@/components/Icons/HMUserIcon.vue";

//Router
import router from "@/router";

//Store
import { useLayoutStore } from "@/stores/layoutStore";
const store = useLayoutStore();

function changeRoute(newRoute: string, icon: Component) {
  router.push(newRoute);
  changeTitle(newRoute);
  changeIcon(icon);
}

function changeTitle(newRoute: string) {
  let title = newRoute.toUpperCase().slice(1);
  store.changeTitle(title);
}

function changeIcon(icon: Component) {
  store.changeIcon(icon);
}
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
          <a
            @click="changeRoute('/', HMHomeIcon)"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMHomeIcon stroke="white"/>
          </a>
        </li>

        <li class="hover:bg-indigo-800">
          <a
            @click="changeRoute('/expense', HMExpenseIcon)"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMExpenseIcon stroke="white"/>
          </a>
        </li>

        <li class="hover:bg-indigo-800">
          <a
            @click="changeRoute('/chart', HMChartIcon)"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMChartIcon stroke="white"/>
          </a>
        </li>
      </ul>

      <div class="mt-auto hover:bg-indigo-800">
        <a
          @click="changeRoute('/settings', HMSettingsIcon)"
          class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
        >
          <HMSettingsIcon stroke="white"/>
        </a>
      </div>

      <div class="hover:bg-indigo-800">
        <a
          @click="changeRoute('/profile', HMUserIcon)"
          class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
        >
          <HMUserIcon stroke="white"/>
        </a>
      </div>
    </aside>
  </div>
</template>

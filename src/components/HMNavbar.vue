<script setup lang="ts">
import type { Component } from "vue";

//Data
import { principalMenuOptions, secondaryMenuOptions } from "@/utils/data";

//Router
import router from "@/router";

//Store
import { useLayoutStore } from "@/stores/layoutStore";
const store = useLayoutStore();

function handleRoute(newRoute: string, icon: Component) {
  router.push(newRoute);
  changeTitle(newRoute);
  changeIcon(icon);
}

function changeTitle(newRoute: string) {
  const title = newRoute.toUpperCase().slice(1);
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
        <li
          class="hover:bg-indigo-800 focus:outline-none focus:shadow-outline transition duration-500 ease"
          v-for="option of principalMenuOptions"
        >
          <a
            @click="handleRoute(option.route, option.icon)"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <component stroke="white" :is="option.icon"></component>
          </a>
        </li>
      </ul>

      <div class="mt-auto">
        <div
          class="hover:bg-indigo-800 focus:outline-none focus:shadow-outline transition duration-500 ease"
          v-for="option of secondaryMenuOptions"
        >
          <a
            @click="handleRoute(option.route, option.icon)"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <component stroke="white" :is="option.icon"></component>
          </a>
        </div>
      </div>
    </aside>
  </div>
</template>

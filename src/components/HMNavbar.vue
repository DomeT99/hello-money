<script setup lang="ts">
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


function changeRoute(newRoute: string) {
  router.push(newRoute);
  changeTitle(newRoute);
}

function changeTitle(newRoute: string) {
  let title = newRoute.toUpperCase().slice(1);
  store.changeTitle(title);
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
            @click="changeRoute('/')"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMHomeIcon />
          </a>
        </li>

        <li class="hover:bg-indigo-800">
          <a
            @click="changeRoute('/expense')"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMExpenseIcon />
          </a>
        </li>

        <li class="hover:bg-indigo-800">
          <a
            @click="changeRoute('/chart')"
            class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
          >
            <HMChartIcon />
          </a>
        </li>
      </ul>

      <div class="mt-auto hover:bg-indigo-800">
        <a
          @click="changeRoute('/settings')"
          class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
        >
          <HMSettingsIcon />
        </a>
      </div>

      <div class="hover:bg-indigo-800">
        <a
          @click="changeRoute('/profile')"
          class="h-10 px-1 flex justify-center items-center w-full focus:text-orange-500"
        >
          <HMUserIcon />
        </a>
      </div>
    </aside>
  </div>
</template>

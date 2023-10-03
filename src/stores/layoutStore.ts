import { defineStore } from "pinia";
import { ref, type Component } from "vue";

import HMHomeIcon from "@/components/Icons/HMHomeIcon.vue";

import { isEmptyString } from "@/utils/utils";

export const useLayoutStore = defineStore("layoutStore", () => {
  const titleHeader = ref<string>("HOME");
  const iconHeader = ref<Component>(HMHomeIcon);

  function changeTitle(title: string) {
    if (isEmptyString(title)) {
      $reset();
      return;
    }
    titleHeader.value = title;
  }
  function changeIcon(icon: Component) {
    iconHeader.value = icon;
  }
  function $reset() {
    titleHeader.value = "HOME";
    iconHeader.value = HMHomeIcon;
  }

  return { titleHeader, iconHeader, changeTitle, changeIcon };
});

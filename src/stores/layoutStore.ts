import { defineStore } from "pinia";
import { ref } from "vue";

import { isEmptyString } from "@/utils/utils";

export const useLayoutStore = defineStore("layoutStore", () => {
  const titleHeader = ref("HOME");


  function changeTitle(title: string) {
    if (isEmptyString(title)) {
      $reset();
      return;
    }
    titleHeader.value = title;
  }

  function $reset() {
    titleHeader.value = "HOME";
  }

  
  return { titleHeader, changeTitle };
});

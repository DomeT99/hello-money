import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("appStore", () => {
  let isLoading = ref<boolean>(false);

  //Loading
  function stopLoading() {
    isLoading.value = false;
  }
  function activeLoading() {
    isLoading.value = true;
  }

  return { isLoading, stopLoading, activeLoading };
});

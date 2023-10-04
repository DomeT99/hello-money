import type { Expenses } from "@/types/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useExpensesStore = defineStore("expensesStore", () => {
  const expenses = ref<Expenses[]>([
    {
      name: "Test",
      amount: 12,
      category: "Sport",
      createdDate: new Date(),
    },
    {
      name: "Proviamo Così",
      amount: 12,
      category: "Sport",
      dateTransaction: new Date(),
      createdDate: new Date(),
    },
    {
      name: "Completo",
      amount: 12,
      category: "Sport",
      dateTransaction: new Date(),
      createdDate: new Date(),
      location: "Sir William",
    },
  ]);

  return { expenses };
});

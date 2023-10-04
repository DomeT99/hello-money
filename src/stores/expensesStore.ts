//Vue
import { ref } from "vue";
//Types
import type { Expenses } from "@/types/models";
//Pinia
import { defineStore } from "pinia";
//Utils
import { hmGet } from "@/utils/httpRequest";

export const useExpensesStore = defineStore("expensesStore", () => {
  const expenses = ref<Expenses[]>([]);

  async function fetchExpenses() {
    expenses.value = await hmGet<Expenses[]>(
      import.meta.env.VITE_APP_EXPENSES_URL
    );
  }

  return { expenses, fetchExpenses };
});

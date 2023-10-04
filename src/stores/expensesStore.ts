import type { Expenses } from "@/types/models";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useExpensesStore = defineStore("expensesStore", () => {
  const expenses = ref<Expenses[]>([]);

  async function fetchExpenses() {
    const data = await fetch(new URL("../data/expense.json", import.meta.url));
    const res = await data.json();
    expenses.value = res;
  }

  return { expenses, fetchExpenses };
});

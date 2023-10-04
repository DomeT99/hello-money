<script setup lang="ts">
//Components
import { onMounted, computed } from "vue";
import HMExpenseTable from "./HMExpenseTable.vue";

//Store
import { useExpensesStore } from "@/stores/expensesStore";
const store = useExpensesStore();

//Computed
const expenses = computed(() => store.expenses);

//Hooks
onMounted(async () => {
  if (expenses.value.length <= 0) await store.fetchExpenses();
});
</script>

<template>
  <section class="antialiased flex flex-col justify-center mt-12 max-h-screen">
    <div class="mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <HMExpenseTable
        :body="expenses"
        :header="[
          'Name',
          'Amount',
          'Category',
          'Date',
          'Created',
          'Location',
          '',
        ]"
      />
    </div>
  </section>
</template>

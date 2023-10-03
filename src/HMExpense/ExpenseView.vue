<script setup lang="ts">
import HMExpenseTable from "./HMExpenseTable.vue";

import { useExpensesStore } from "@/stores/expensesStore";
const store = useExpensesStore();

</script>

<template>
  <div class="antialiased flex flex-col justify-center mt-12 max-h-screen">
    <div class="mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <HMExpenseTable
        :body="store.expenses"
        :header="['Name', 'Amount', 'Category', 'Date', 'Created', 'Location']"
      />
    </div>
  </div>
</template>

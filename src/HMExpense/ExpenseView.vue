<script setup lang="ts">
//Components
import { onMounted, computed } from "vue";
import HMExpenseTable from "./HMExpenseTable.vue";
import HMButton from "@/components/HMButton.vue";

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
    <div class="fixed bottom-0 right-12">
      <HMButton rounded="full" class="my-8 py-2.5 float-right text-4xl"
        >+</HMButton
      >
    </div>
  </section>
</template>

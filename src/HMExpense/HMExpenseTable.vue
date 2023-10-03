<script setup lang="ts">
import { type Table } from "@/types/components";
import { type Expenses } from "@/types/models";

import HMButton from "@/components/HMButton.vue";

const props = defineProps<Table<Expenses>>();
</script>
<template>
  <div class="p-2">
    <div class="overflow-x-auto max-h-[60vh]">
      <table class="table-auto w-full">
        <thead
          class="text-md sticky font-semibold uppercase text-gray-400 bg-gray-50"
        >
          <tr>
            <th class="p-2 whitespace-nowrap" v-for="title of props.header">
              <div class="font-semibold text-left">{{ title }}</div>
            </th>
          </tr>
        </thead>
        <tbody class="text-md divide-y divide-gray-100 overflow-y-auto">
          <tr v-for="item of props.body">
            <td class="p-2 whitespace-nowrap">
              <div class="font-medium">{{ item.name }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="font-medium">{{ item.amount }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="font-medium">{{ item.category }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="font-medium">
                {{ item.dateTransaction }}
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="font-medium">
                {{ item.createdDate }}
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="font-medium">{{ item.location }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <HMButton>Edit</HMButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

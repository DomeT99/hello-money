import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HOME",
      component: () => import("../HMHome/HomeView.vue"),
    },
    {
      path: "/expense",
      name: "EXPENSE",
      component: () => import("../HMExpense/ExpenseView.vue"),
    },
  ],
});

export default router;

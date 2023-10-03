import type { MenuOptions } from "@/types/components";

import HMHomeIcon from "@/components/Icons/HMHomeIcon.vue";
import HMExpenseIcon from "@/components/Icons/HMExpenseIcon.vue";
import HMChartIcon from "@/components/Icons/HMChartIcon.vue";
import HMSettingsIcon from "@/components/Icons/HMSettingsIcon.vue";
import HMUserIcon from "@/components/Icons/HMUserIcon.vue";

export const principalMenuOptions: MenuOptions[] = [
  {
    route: "/",
    icon: HMHomeIcon,
  },
  {
    route: "/expense",
    icon: HMExpenseIcon,
  },
  {
    route: "/chart",
    icon: HMChartIcon,
  },
];

export const secondaryMenuOptions: MenuOptions[] = [
  {
    route: "/settings",
    icon: HMSettingsIcon,
  },
  {
    route: "/profile",
    icon: HMUserIcon,
  }
];

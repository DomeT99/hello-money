import type { Component } from "vue";

export type Icon = {
  classes: string;
  stroke: string;
  fill?: string;
};

export type MenuOptions = {
  route: string;
  icon: Component;
};

export type Table<T> = {
  header: string[];
  body?: T[];
};

export type Button = {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: "md" | "lg" | "xl" | "full";
};

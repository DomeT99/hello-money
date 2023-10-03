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

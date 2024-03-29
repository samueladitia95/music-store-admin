import { Dispatch } from "react";

export type GlobalContextType = {
  state: GlobalState;
  dispatch: Dispatch<GlobalAction>;
};

export type GlobalState = {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  pageTitle: string;
};

export type GlobalActionKind =
  | "TOGGLE_DARK_MODE"
  | "SET_TO_DARK_MODE"
  | "TOGGLE_SIDEBAR"
  | "SET_TITLE";

export type GlobalAction = {
  type: GlobalActionKind;
  payload?: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  imageUrl: string;
};

import { GlobalAction, GlobalState } from "../type";

export function globalReducer(
  state: GlobalState,
  action: GlobalAction
): GlobalState {
  const { type, payload } = action;
  const { isDarkMode, isSidebarOpen } = state;

  switch (type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDarkMode: !isDarkMode,
      };
    case "SET_TO_DARK_MODE":
      return {
        ...state,
        isDarkMode: true,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !isSidebarOpen,
      };
    case "SET_TITLE":
      return {
        ...state,
        pageTitle: payload ? payload : "",
      };
    default:
      return state;
  }
}

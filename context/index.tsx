import {
  createContext,
  ReactNode,
  useContext,
  Context,
  useReducer,
} from "react";
import { globalReducer } from "./reducer";
import { GlobalContextType, GlobalState } from "../type";

const initialState: GlobalState = {
  isDarkMode: false,
  isSidebarOpen: false,
  pageTitle: "",
};

export const GlobalContext: Context<GlobalContextType> =
  createContext<GlobalContextType>({
    state: initialState,
    dispatch: () => null,
  });

export const useGlobalContext = (): GlobalContextType =>
  useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

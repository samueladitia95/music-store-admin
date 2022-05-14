import { createContext, useState, ReactNode, useContext, Context } from "react";
import { GlobalContextType } from "./type";

export const GlobalContext: Context<GlobalContextType> =
  createContext<GlobalContextType>({
    isSidebarOpen: true,
    setIsSidebarOpen: () => {},
  });

export const useGlobalContext = (): GlobalContextType =>
  useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  return (
    <GlobalContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

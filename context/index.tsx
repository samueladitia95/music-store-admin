import { createContext, useState, ReactNode, useContext, Context } from "react";
import { GlobalContextType } from "./type";

export const GlobalContext: Context<GlobalContextType> =
  createContext<GlobalContextType>({
    isSidebarOpen: true,
    setIsSidebarOpen: () => {},
    isDarkMode: false,
    setIsDarkMode: () => {},
    pageTitle: "Hello",
    setPageTitle: () => {},
  });

export const useGlobalContext = (): GlobalContextType =>
  useContext(GlobalContext);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [pageTitle, setPageTitle] = useState<string>("");

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        isDarkMode,
        setIsDarkMode,
        pageTitle,
        setPageTitle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

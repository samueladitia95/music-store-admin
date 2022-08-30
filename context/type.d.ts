export type GlobalContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
  pageTitle: string;
  setPageTitle: (pageTitle: string) => void;
};

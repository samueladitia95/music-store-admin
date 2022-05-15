import { Fragment, ReactNode } from "react";
import { GlobalProvider, useGlobalContext } from "../../context";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

//! Harus double seperti ini component Layoutnya
//! Kalau gak Contextnya ga akan responsive/jalan
//! Need to fix in the future, Low Priority
const NestedLayout = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useGlobalContext();

  return (
    <Fragment>
      {/* Temporary  */}
      <div className={`font-display md:flex ${isDarkMode ? "dark" : ""}`}>
        <Sidebar />
        <div className="flex-grow">
          <Navbar />
          <div
            className="container dark:bg-bDarkPrimary dark:text-tDarkPrimary"
            style={{ minHeight: "200vh" }}
          >
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <GlobalProvider>
      <NestedLayout>{children}</NestedLayout>
    </GlobalProvider>
  );
};

export default Layout;

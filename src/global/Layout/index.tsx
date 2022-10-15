import { Fragment, ReactNode, useEffect } from "react";
import { useGlobalContext } from "../../context";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const { state, dispatch } = useGlobalContext();
  const { isDarkMode } = state;

  useEffect(() => {
    if (localStorage.getItem("isDarkMode")) {
      dispatch({ type: "SET_TO_DARK_MODE" });
    }
  }, [dispatch]);

  return (
    <Fragment>
      {/* Temporary  */}
      <div className={`font-display md:flex ${isDarkMode ? "dark" : ""}`}>
        <Sidebar />
        <div className="flex-grow dark:bg-bDarkPrimary dark:text-tDarkPrimary">
          <Navbar />
          <div className="container" style={{ minHeight: "200vh" }}>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;

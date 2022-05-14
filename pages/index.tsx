import type { NextPage } from "next";
import { Fragment } from "react";
import { useGlobalContext } from "../context";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet,
            aperiam sapiente magnam ex corrupti asperiores ducimus similique
            magni ullam dicta suscipit adipisci libero facere odio repellat
            nostrum, alias atque.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;

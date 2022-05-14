import type { NextPage } from "next";
import { Fragment } from "react";
import { GlobalProvider } from "../context";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <GlobalProvider>
        {/* Temporary  */}
        <div className="font-display md:flex">
          <Sidebar />
          <div className="flex-grow">
            <Navbar />
            <div className="container" style={{ minHeight: "200vh" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet,
              aperiam sapiente magnam ex corrupti asperiores ducimus similique
              magni ullam dicta suscipit adipisci libero facere odio repellat
              nostrum, alias atque.
            </div>
          </div>
        </div>
      </GlobalProvider>
    </Fragment>
  );
};

export default Home;

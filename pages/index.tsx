import type { NextPage } from "next";
import { Fragment } from "react";
import { GlobalProvider } from "../context";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <GlobalProvider>
        <Navbar />
        <Sidebar />
      </GlobalProvider>
    </Fragment>
  );
};

export default Home;

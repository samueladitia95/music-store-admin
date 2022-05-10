import type { NextPage } from "next";
import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
    </Fragment>
  );
};

export default Home;

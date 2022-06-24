import { Fragment, ReactElement } from "react";
import Layout from "../../components/Layout";

const Home = () => {
  return <Fragment>INI HALAMAN PRODUCT</Fragment>;
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

import { ReactElement } from "react";
import Layout from "../components/Layout";
import PageMeta from "../components/PageMeta";

const Home = () => {
  return (
    <>
      <PageMeta
        title="Dashboard"
        description="Dimas Music Dashboard"
        keywords="dimas music, music, dashboard"
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet, aperiam
      sapiente magnam ex corrupti asperiores ducimus similique magni ullam dicta
      suscipit adipisci libero facere odio repellat nostrum, alias atque.
    </>
  );
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

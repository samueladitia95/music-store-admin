import { ReactElement } from "react";
import Layout from "../../components/Layout";
import PageMeta from "../../components/PageMeta";

const Home = () => {
  return (
    <div>
      <PageMeta
        title="Products"
        description="Music equipment product list"
        keywords="dimas music, music, equipment"
      />
    </div>
  );
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

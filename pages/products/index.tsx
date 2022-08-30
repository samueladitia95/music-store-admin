import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { setPageTitle, pageTitle } = useGlobalContext();
  setPageTitle("Products");
  return (
    <div className="block md:hidden">
      <p className="text-xl font-medium">{pageTitle}</p>
    </div>
  );
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

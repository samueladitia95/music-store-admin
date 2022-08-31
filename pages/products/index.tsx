import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { useGlobalContext } from "../../context";

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  dispatch({
    type: "SET_TITLE",
    payload: "Products",
  });
  return (
    <div className="block md:hidden">
      <p className="text-xl font-medium">{state.pageTitle}</p>
    </div>
  );
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

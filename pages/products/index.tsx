import { ReactElement } from "react";
import Layout from "../../components/Layout";
import PageMeta from "../../components/PageMeta";

const Home = () => {
  return (
    <>
      <PageMeta
        title="Products"
        description="Music equipment product list"
        keywords="dimas music, music, equipment"
      />
      <div>
        <table className=" text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>Product 1</td>
            <td>19</td>
            <td>
              <button>Edit</button>
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;

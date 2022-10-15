import { ReactElement } from "react";
import Layout from "../../global/Layout";
import PageMeta from "../../global/PageMeta";
import { Product } from "../../type";
import ProductBoxes from "./subComponents/ProductBoxes";

const Home = ({ products }: { products: Product[] }) => {
  return (
    <>
      <PageMeta
        title="Products"
        description="Music equipment product list"
        keywords="dimas music, music, equipment"
      />
      <div className="sm:mt-4 flex flex-col gap-4">
        {/* List of product boxes */}
        {products.map((product: Product, index: number) => (
          <ProductBoxes key={index} product={product} />
        ))}
      </div>
    </>
  );
};

//? Setiap halaman yang butuh Sidebar dan Navbar butuh ini
//? Sesuai dokumentasi Next js
Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default Home;

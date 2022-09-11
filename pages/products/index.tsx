import { ReactElement } from "react";
import Layout from "../../components/Layout";
import PageMeta from "../../components/PageMeta";
import { Product } from "../../type";
import ProductBoxes from "./subComponents/ProductBoxes";

const products: Product[] = [
  {
    id: "631dcf422ee627b261642fb6",
    name: "produtct 4",
    price: 671225,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 21,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cupiditate inventore reprehenderit pariatur excepturi eveniet odit tempore temporibus, atque sapiente ratione libero dicta vitae maxime dolores nulla necessitatibus voluptas fuga!",
  },
  {
    id: "631dcf42e491bec74a3f97e7",
    name: "produtct 41",
    price: 971617,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 28,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cupiditate inventore reprehenderit pariatur excepturi eveniet odit tempore temporibus, atque sapiente ratione libero dicta vitae maxime dolores nulla necessitatibus voluptas fuga!",
  },
  {
    id: "631dcf423113e0f7eb4caf81",
    name: "produtct 91",
    price: 902771,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 26,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cupiditate inventore reprehenderit pariatur excepturi eveniet odit tempore temporibus, atque sapiente ratione libero dicta",
  },
  {
    id: "631dcf420040a5bc1c10a29d",
    name: "produtct 32",
    price: 758001,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 30,
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: "631dcf421bc6c650f46588ba",
    name: "produtct 42",
    price: 416229,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 38,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati cupiditate inventore reprehenderit pariatur excepturi eveniet odit tempore temporibus",
  },
  {
    id: "631dcf4259519f883c715c51",
    name: "produtct 66",
    price: 872780,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 38,
    description: "hello",
  },
  {
    id: "631dcf429acb5a823981b121",
    name: "produtct 59",
    price: 640937,
    imageUrl: "https://placekitten.com/g/400/600",
    stock: 38,
    description: "Lorem ipsum dolor sit amet ",
  },
];

const Home = () => {
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

export default Home;

import Image from "next/image";
import { Product } from "../../../type";

export default function ProductBoxes({ product }: { product: Product }) {
  const { name, price, stock, imageUrl, description } = product;
  return (
    <div className="bg-bLightSecondary p-3 rounded-md sm:flex sm:gap-4 sm:items-center">
      <div className="hidden sm:block">
        <Image
          src={imageUrl}
          alt="Product 1"
          height={150}
          width={100}
          className="rounded"
        />
      </div>
      <div className="sm:w-3/4 lg:w-full">
        <p className="font-semibold text-lg">{name}</p>
        <div className="text-sm">
          <p className="font-medium">Price: Rp. {price.toLocaleString("id")}</p>
          <p className="font-medium">Stock: {stock}</p>

          <p className="font-light text-justify mt-2">
            <span className="font-medium">Description: </span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

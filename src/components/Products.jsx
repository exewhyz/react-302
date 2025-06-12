import { useState } from "react";
import ProductItem from "./ProductItem";

const products = [
  {
    name: "HP",
    price: 100000,
  },
  {
    name: "DELL",
    price: 200000,
  },
  {
    name: "MAC",
    price: 300000,
  },
  {
    name: "ASUS",
    price: 400000,
  },
];

export default function Products() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {products.map((product, index) => {
        return (
          <ProductItem key={index} name={product.name} price={product.price} />
        );
      })}
    </div>
  );
}

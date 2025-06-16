import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

export default function Products() {
  const prods = [
    {
      name: "HP",
      price: 100000,
    },
    {
      name: "Dell",
      price: 200000,
    },
    {
      name: "Lenovo",
      price: 300000,
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("i am inside useEffect");
    return () => {
      //clean up func
    };
  }, [loading]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {prods.map((prod, index) => {
        return <ProductItem key={index} name={prod.name} price={prod.price} />;
      })}
    </div>
  );
}

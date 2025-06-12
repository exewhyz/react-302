import { useState } from "react";

export default function ProductItem({ name, price }) {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClick = (name) => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
      setCount((prev) => prev + 1);
    },2000)
  };
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
      <p>Quantity: {count}</p>
      <button disabled={loading} onClick={() => handleClick(name)}>
        {loading ? "Adding to cart" : "Add to cart"}
      </button>
    </div>
  );
}

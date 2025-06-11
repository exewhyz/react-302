import React from "react";

export default function ProductItem({ name, price }) {
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
    </div>
  );
}

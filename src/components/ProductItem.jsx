
export default function ProductItem({ name, price }) {

  const handleClick = (name) => {
    alert("Added to Cart " + name);
  };
  return (
    <div>
      <h2>Product Name: {name}</h2>
      <p>Product Price: {price}</p>
      <button onClick={() => handleClick(name)}>Add to Cart</button>
    </div>
  );
}

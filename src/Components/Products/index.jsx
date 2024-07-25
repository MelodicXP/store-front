'use strict';
import { useSelector } from "react-redux";

const Products = () => {
  // Pulls state via useSelector from counter.js in the intiial state
  const products = useSelector((state) => state.counter.filteredProducts);
  
  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}: ${product.price} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import ProductsContext from "./ProductsContext"; // Import the context

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching Data: ", err));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <Product products={products} />
    </ProductsContext.Provider>
  );
}

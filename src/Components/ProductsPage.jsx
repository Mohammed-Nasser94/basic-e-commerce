import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Product from "./Product";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching Data: ", err));
  }, []);

  return (
    <div>
      <Product products={products} />
      <Outlet context={{ products }} />
    </div>
  );
}

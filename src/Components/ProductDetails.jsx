import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid h-50 mt-5 dethailsImg"
          />
        </div>
        <div className="col-6 my-5">
          <h1 className="my-5">{product.title}</h1>
          <p className="my-5">{product.description}</p>
          <p>
            <strong className="text-danger">Price: </strong>${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

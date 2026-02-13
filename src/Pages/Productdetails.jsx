import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Productdetails = () => {
  const { id } = useParams();
  const number = id.slice(1);

  const [product, setProduct] = useState(null);

  const getSingleData = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${number}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    getSingleData();
  }, [number]);

  if (!product) return <h2>Loading...</h2>;

  return (
    
        <div className="singleDetails">
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h3>₹ {product.price}</h3>
        </div>
    
  );
};

export default Productdetails;

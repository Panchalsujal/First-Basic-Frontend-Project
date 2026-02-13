import React, { useContext } from "react";
import { Productscontext } from "../ProductContext/Productcontext";
import { Link, useParams } from "react-router-dom";
const Products = () => {
  useParams;
  const ProductData = useContext(Productscontext);

  return (
    <div>
      <div className="Allproducts">
        {ProductData.map((elm, idx) => {
          return (
            <Link
              href=""
              key={idx}
              target="_blank"
              className="product"
              to={`/Products/:${elm.id}`}
            >
              <div className="productDetails">
                <img src={elm.image} alt="" />
                <h1>{elm.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

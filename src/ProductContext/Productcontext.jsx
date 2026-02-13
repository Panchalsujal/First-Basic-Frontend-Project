import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Productscontext = createContext();
const Productcontext = (props) => {
  const user = "Context Complited";
  const [ProductData, setProductData] = useState([]);
  const Getdata = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    return setProductData(response.data);
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div>
      <Productscontext.Provider value={ProductData}>
        {props.children}
      </Productscontext.Provider>
    </div>
  );
};
export default Productcontext;

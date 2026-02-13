import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Homepages">
      <h1>Home Page</h1>
      <button
        onClick={() => {
          navigate("/Products");
        }}
      >
        Explore Product
      </button>
    </div>
  );
};

export default Home;

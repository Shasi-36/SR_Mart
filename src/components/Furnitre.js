import React from "react";
import { Link } from "react-router-dom";
import { furnitureData } from "../data/furniture";

const Furniture = () => {
  const sixProducts = furnitureData.slice(0, 6);

  return (
    <div className="prductshell">
      <div className="title">
        <h3>Mobiles</h3>
      </div>
      <div className="productimg">
        {sixProducts.map((product) => {
          return (
            <Link to={`/furnitures/${product.id}`}>
              <div className="imagebox" key={product.id}>
                <img className="image" src={product.image} alt="product" />
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/furnitures">
        <div>
          <button className="btn">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Furniture;

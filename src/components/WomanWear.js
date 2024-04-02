import React from "react";
import { Link } from "react-router-dom";
import { womanData } from "../data/woman";

const WomanWear = () => {
  const sixProducts = womanData.slice(0, 6);

  return (
    <div className="prductshell">
      <div className="title">
        <h3>Mobiles</h3>
      </div>
      <div className="productimg">
        {sixProducts.map((product) => {
          return (
            <Link to={`/womans/${product.id}`}>
              <div className="imagebox" key={product.id}>
                <img className="image" src={product.image} alt="product" />
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/womans">
        <div>
          <button className="btn">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default WomanWear;

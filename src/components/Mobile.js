import React from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

const Mobile = () => {
  const sixProducts = mobileData.slice(0, 6);

  return (
    <div className="prductshell">
      <div className="title">
        <h3>Mobiles</h3>
      </div>
      <div className="productimg">
        {sixProducts.map((product) => {
          return (
            <Link to={`/mobiles/${product.id}`}>
              <div className="imagebox" key={product.id}>
                <img className="image" src={product.image} alt="product" />
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/mobiles">
        <div>
          <button className="btn">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Mobile;

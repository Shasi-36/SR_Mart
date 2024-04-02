import React from "react";
import { Link } from "react-router-dom";
import { speakerData } from "../data/speaker";

const Speaker = () => {
  const sixProducts = speakerData.slice(0, 6);

  return (
    <div className="prductshell">
      <div className="title">
        <h3>Mobiles</h3>
      </div>
      <div className="productimg">
        {sixProducts.map((product) => {
          return (
            <Link to={`/speakers/${product.id}`}>
              <div className="imagebox" key={product.id}>
                <img className="image" src={product.image} alt="product" />
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/speakers">
        <div>
          <button className="btn">View All</button>
        </div>
      </Link>
    </div>
  );
};

export default Speaker;

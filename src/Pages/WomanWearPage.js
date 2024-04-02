import React, { useState } from "react";
import { Link } from "react-router-dom";
import { womanData } from "../data/woman";

const WomanWearPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? womanData
      : womanData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
    <>
      <div className="fullpage">
        <div className="filterproduct">
          <h2>Brand</h2>
          {womanData.map((prod) => {
            return (
              <div className="profilter" key={prod.id}>
                <label>
                  <input
                    type="checkbox"
                    className="filterinput"
                    checked={selectedProduct.includes(prod.brand)}
                    onChange={() => companyHandler(prod.brand)}
                  />
                  {prod.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="productpage">
          {filteredProduct.map((product) => {
            return (
              <Link to={`/womans/${product.id}`}>
                <div className="proimage">
                  <img className="image" src={product.image} alt="product" />
                  <span className="model">
                    <h3>{product.model}</h3>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WomanWearPage;

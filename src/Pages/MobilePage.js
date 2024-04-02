import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

const MobilePage = () => {
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
      ? mobileData
      : mobileData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <div className="fullpage">
        <div className="filterproduct">
          <h2>Company</h2>
          {mobileData.map((prod) => {
            return (
              <div className="profilter" key={prod.id}>
                <label>
                  <input
                    type="checkbox"
                    className="filterinput"
                    checked={selectedProduct.includes(prod.company)}
                    onChange={() => companyHandler(prod.company)}
                  />
                  {prod.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="productpage">
          {filteredProduct.map((product) => {
            return (
              <Link to={`/mobiles/${product.id}`}>
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

export default MobilePage;

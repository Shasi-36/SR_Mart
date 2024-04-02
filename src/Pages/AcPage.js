import React, { useState } from "react";
import { Link } from "react-router-dom";
import { acData } from "../data/ac";

const AcPage = () => {
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
      ? acData
      : acData.filter((orange) => selectedProduct.includes(orange.company));

  return (
    <>
      <div className="fullpage">
        <div className="filterproduct">
          <h2>Company</h2>
          {acData.map((prod) => {
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
              <Link to={`/ac/${product.id}`} className="Link">
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

export default AcPage;

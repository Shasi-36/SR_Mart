import React, { useState } from "react";
import { Link } from "react-router-dom";
import { booksData } from "../data/books";

const BookPage = () => {
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
      ? booksData
      : booksData.filter((orange) => selectedProduct.includes(orange.author));

  return (
    <>
      <div className="fullpage">
        <div className="filterproduct">
          <h2>Author</h2>
          {booksData.map((prod) => {
            return (
              <div className="profilter" key={prod.id}>
                <label>
                  <input
                    type="checkbox"
                    className="filterinput"
                    checked={selectedProduct.includes(prod.author)}
                    onChange={() => companyHandler(prod.author)}
                  />
                  {prod.author}
                </label>
              </div>
            );
          })}
        </div>
        <div className="productpage">
          {filteredProduct.map((product) => {
            return (
              <Link to={`/books/${product.id}`} className="Link">
                <div key={product.id} className="proimage">
                  <img className="image" src={product.image} alt="product" />
                  <span className="model">
                    <h3>{product.author}</h3>
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

export default BookPage;

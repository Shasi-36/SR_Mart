import React from "react";
import { useParams } from "react-router-dom";
import { speakerData } from "../data/speaker";
import { useCart } from "../Context/CartContext";

const SpeakerSingle = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const product = speakerData.find((item) => item.id === id);
  return (
    <div className="singlepage">
      <div className="pageimg">
        <img className="singleimg" src={product.image} alt="product" />
      </div>
      <div className="proddetails">
        <div className="company">
          <h3>{product.company}</h3>
        </div>
        <div className="promodel">
          <h4>{product.model}</h4>
        </div>
        <div className="price">
          <h3>{product.price}</h3>
        </div>
        <div className="desc">
          <p>{product.description}</p>
        </div>
        <div>
          <button onClick={() => addToCart(product)} className="probtn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSingle;

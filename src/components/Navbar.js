import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="Link">
          <div className="navlogo">
            <h2>SR-Mart</h2>
          </div>
        </Link>

        <div className="navsearch">
          <input type="search" placeholder="Search" />
        </div>
        <div className="navlogin">
          <button>Login</button>
        </div>
        <Link to="/cart">
          <div className="navcart Link">
            <h3>Cart</h3>
          </div>
        </Link>
      </div>

      <div className="subnav">
        <ul>
          <Link to="/mobiles" className="Link">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers" className="Link">
            <li>Computers</li>
          </Link>
          <Link to="/mens" className="Link">
            <li>Men's Wear</li>
          </Link>
          <Link to="/womans" className="Link">
            <li>Woman's Wear</li>
          </Link>
          <Link to="/speakers" className="Link">
            <li>Speakers</li>
          </Link>
          <Link to="furnitures" className="Link">
            <li>Furniture</li>
          </Link>
          <Link to="/watches" className="Link">
            <li>Watches</li>
          </Link>
          <Link to="/fridges" className="Link">
            <li>Fridge</li>
          </Link>
          <Link to="/ac" className="Link">
            <li>AC</li>
          </Link>
          <Link to="/tv" className="Link">
            <li>TV</li>
          </Link>
          <Link to="/books" className="Link">
            <li>Books</li>
          </Link>
          <Link to="/kitchen" className="Link">
            <li>Kitchen</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

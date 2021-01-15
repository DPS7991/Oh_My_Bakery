import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./cart.css";
import { CartContext } from "../App";

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartContext = useContext(CartContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="cart__Nav">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
      </div>

      <div className="cart__Container">
        <h1 className="cart__Heading">CART</h1>
        <div className="cart__Wrapper">
          {cartContext.cartItems.map((item) => (
            <div className="cart__Card">
              <img src={item.img} alt="Product" className="product__Img" />
              <div className="product__Info">
                <h2 className="product__Title">{item.name}</h2>
                <p className="product__Description">{item.desc}</p>
                <p className="product__Price">{item.price}</p>
                <button className="product__Button">{item.quantity}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;

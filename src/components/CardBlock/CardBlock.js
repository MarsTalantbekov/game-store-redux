import React from "react";
import { useSelector } from "react-redux";
import { BiCartAlt } from "react-icons/bi";
import CartMenu from "../CartMenu/CartMenu";
import "./CardBlock.css";
import { calcTotalPrice } from "../utils";
import { useState } from "react";
import ItemsInCart from "../ItemsInCart/ItemsInCart";

const CardBlog = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
        <ItemsInCart quantity={items.length}/>
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price"> {totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};

export default CardBlog;